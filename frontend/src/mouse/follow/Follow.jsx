import { useEffect, useRef } from 'react'
import mouse1 from '../Image/Mouse1.png'
import mouse2 from '../Image/Mouse2.png'
import mouse3 from '../Image/Mouse3.png'
import mouse4 from '../Image/Mouse4.png'
import { useImageData } from './useImageData'
import { pixelsOverlap } from './pixelOverlap'
import { FOLLOW_CONFIG as CFG } from './follow.config'

// 四张图的地址（模块级常量，引用稳定，方便 useImageData 加载）
const SOURCES = { m1: mouse1, m2: mouse2, m3: mouse3, m4: mouse4 }

// 毫米转像素：CSS 标准 96px = 1 英寸 = 25.4mm
const MM_TO_PX = 96 / 25.4

// 走路效果：移动时返回一个随时间上下摆动的 scaleY，静止时返回 1
const walkScaleY = (now, moving) =>
  moving ? 1 + CFG.walkAmplitude * Math.sin(now * CFG.walkSpeed) : 1

/**
 * 鼠标剧情动画，分 5 个阶段：
 *  follow：Mouse1 慢速跟随鼠标，按运动方向左右翻转，接触鼠标会抖动（持续 30 秒）
 *  chase ：屏幕右边出现 Mouse2，冲向 Mouse1；Mouse1 仍跟鼠标，所以 Mouse2 方向实时改变
 *  merge ：两图非透明像素接触 → Mouse1 变 Mouse3，脱离鼠标，对齐到同一水平线
 *  wait  ：保持 5 秒（仍在 merge 阶段里计时）
 *  exit  ：Mouse3 变 Mouse4，和 Mouse2 一起向右移出屏幕后消失
 *
 * 注：位置/朝向用 ref + 直接操作 DOM（性能好、不触发 React 重渲染）；
 * 图片切换也直接改 <img> 的 src。
 */
export default function Follow() {
  const ref1 = useRef(null) // 主角：Mouse1 → Mouse3 → Mouse4
  const ref2 = useRef(null) // Mouse2
  const data = useImageData(SOURCES, CFG.alphaThreshold)

  const cx = typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  const cy = typeof window !== 'undefined' ? window.innerHeight / 2 : 0

  // 鼠标位置 + 是否在窗口内
  const cursor = useRef({ x: cx, y: cy, inside: false })
  // 状态机
  const phase = useRef('follow')
  const phaseStart = useRef(0)
  const started = useRef(false)
  const lineY = useRef(cy)
  // 角色：px/py 是“锚点（左下角非透明像素）”的屏幕坐标
  const char1 = useRef({ key: 'm1', px: cx, py: cy, flip: false, prevPx: cx, prevPy: cy })
  const char2 = useRef({ key: 'm2', px: 0, py: 0, flip: false, prevPx: 0, prevPy: 0 })

  // 监听鼠标
  useEffect(() => {
    const onMove = (e) => {
      cursor.current = { x: e.clientX, y: e.clientY, inside: true }
    }
    const onLeave = () => {
      cursor.current.inside = false
    }
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  // 主循环
  useEffect(() => {
    if (!data || !ref1.current || !ref2.current) return

    // 把一个角色摆放到屏幕上，并把接触检测要用的 L/T/尺寸写回角色对象
    const renderChar = (el, ch, jitterX = 0, jitterY = 0, scaleY = 1) => {
      const d = data[ch.key]
      const scale = CFG.displayWidth / d.naturalWidth
      const dispW = CFG.displayWidth
      const dispH = d.naturalHeight * scale
      const aX = d.anchor.x * scale
      const aY = d.anchor.y * scale
      // 翻转时锚点在元素内的水平位置变成 dispW - aX
      const anchorOffsetX = ch.flip ? dispW - aX : aX
      const L = ch.px - anchorOffsetX + jitterX
      const T = ch.py - aY + jitterY

      if (el.dataset.key !== ch.key) {
        el.src = SOURCES[ch.key]
        el.dataset.key = ch.key
      }
      el.style.width = `${dispW}px`
      el.style.left = `${L}px`
      el.style.top = `${T}px`
      // 以底部中心为支点：水平镜像中心仍是 50%（不破坏接触检测），上下走路缩放从脚下起伏
      el.style.transformOrigin = '50% 100%'
      el.style.transform = `scaleX(${ch.flip ? -1 : 1}) scaleY(${scaleY})`
      el.style.visibility = 'visible'

      // 供 pixelsOverlap 使用
      ch.L = L
      ch.T = T
      ch.dispW = dispW
      ch.dispH = dispH
      ch.scale = scale
      ch.data = d
    }

    // Mouse1 跟随鼠标一帧（含按运动方向翻转、接触鼠标抖动、走路缩放）
    const updateChar1Follow = (now) => {
      const c1 = char1.current
      const cur = cursor.current
      c1.px += (cur.x - c1.px) * CFG.followEase
      c1.py += (cur.y - c1.py) * CFG.followEase

      // 本帧位移（用于翻转和判断是否在移动）
      const dxMove = c1.px - c1.prevPx
      const dyMove = c1.py - c1.prevPy
      // 按水平运动方向翻转（默认脸朝左：向右运动则翻转成朝右）
      if (dxMove > CFG.flipMoveThreshold) c1.flip = true
      else if (dxMove < -CFG.flipMoveThreshold) c1.flip = false
      c1.prevPx = c1.px
      c1.prevPy = c1.py
      const moving = Math.hypot(dxMove, dyMove) > CFG.walkMoveThreshold

      // 接触鼠标抖动
      let jx = 0
      let jy = 0
      const dist = Math.hypot(cur.x - c1.px, cur.y - c1.py)
      if (cur.inside && dist <= CFG.contactRadius) {
        jx = (Math.random() * 2 - 1) * CFG.jitterAmplitude
        jy = (Math.random() * 2 - 1) * CFG.jitterAmplitude
      }
      renderChar(ref1.current, c1, jx, jy, walkScaleY(now, moving))
    }

    let raf
    const tick = (now) => {
      if (!started.current) {
        started.current = true
        phaseStart.current = now
      }
      const p = phase.current

      if (p === 'follow') {
        updateChar1Follow(now)
        if (now - phaseStart.current >= CFG.followDurationMs) {
          // 进入 chase：Mouse2 从屏幕右边出现，和 Mouse1 同高
          const c2 = char2.current
          c2.key = 'm2'
          c2.px = window.innerWidth + 120
          c2.py = char1.current.py
          c2.flip = false
          c2.prevPx = c2.px
          c2.prevPy = c2.py
          // 先摆到屏幕右外的正确位置再显示，避免在 (0,0) 闪现一帧
          renderChar(ref2.current, c2)
          phase.current = 'chase'
        }
      } else if (p === 'chase') {
        updateChar1Follow(now) // Mouse1 继续跟鼠标
        const c1 = char1.current
        const c2 = char2.current
        // Mouse2 朝 Mouse1 锚点匀速冲（每帧重新算方向 → Mouse1 动则方向变）
        const dx = c1.px - c2.px
        const dy = c1.py - c2.py
        const len = Math.hypot(dx, dy) || 1
        c2.px += (dx / len) * CFG.chaseSpeed
        c2.py += (dy / len) * CFG.chaseSpeed
        if (dx > CFG.flipDeadzone) c2.flip = true
        else if (dx < -CFG.flipDeadzone) c2.flip = false
        const c2Moving =
          Math.hypot(c2.px - c2.prevPx, c2.py - c2.prevPy) > CFG.walkMoveThreshold
        c2.prevPx = c2.px
        c2.prevPy = c2.py
        renderChar(ref2.current, c2, 0, 0, walkScaleY(now, c2Moving))

        // 两图非透明像素接触 → 合体
        if (pixelsOverlap(c1, c2, CFG.contactSampleStep)) {
          c1.key = 'm3' // Mouse1 变 Mouse3（素材自带朝右）
          c1.flip = false
          c1.px -= CFG.mergeShiftLeftMm * MM_TO_PX // 在原位置上左移 20mm
          const line = (c1.py + c2.py) / 2
          lineY.current = line
          c1.py = line
          c2.py = line
          phase.current = 'merge'
          phaseStart.current = now
        }
      } else if (p === 'merge') {
        // 脱离鼠标，停在同一水平线上等待
        char1.current.py = lineY.current
        char2.current.py = lineY.current
        renderChar(ref1.current, char1.current)
        renderChar(ref2.current, char2.current)
        if (now - phaseStart.current >= CFG.mergeWaitMs) {
          char1.current.key = 'm4' // Mouse3 变 Mouse4
          // 需求：Mouse4 与 Mouse2 都以左右翻转的状态向右离场
          char1.current.flip = true
          char2.current.flip = true
          phase.current = 'exit'
        }
      } else if (p === 'exit') {
        // 两图一起向右移动离场
        char1.current.px += CFG.exitSpeed
        char2.current.px += CFG.exitSpeed
        char1.current.py = lineY.current
        char2.current.py = lineY.current
        renderChar(ref1.current, char1.current, 0, 0, walkScaleY(now, true))
        renderChar(ref2.current, char2.current, 0, 0, walkScaleY(now, true))
        if (
          char1.current.L > window.innerWidth &&
          char2.current.L > window.innerWidth
        ) {
          ref1.current.style.visibility = 'hidden'
          ref2.current.style.visibility = 'hidden'
          phase.current = 'done'
          return // 结束循环
        }
      } else {
        return // done
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [data])

  const baseStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    pointerEvents: 'none',
    userSelect: 'none',
    willChange: 'left, top, transform',
    zIndex: 9999,
    // 初始隐藏，等第一次 renderChar 摆好位置后再显示，避免在 (0,0) 闪现
    visibility: 'hidden',
  }

  return (
    <>
      <img ref={ref1} src={mouse1} alt="主角猫" draggable={false} style={baseStyle} />
      <img ref={ref2} src={mouse2} alt="冲过来的猫" draggable={false} style={baseStyle} />
    </>
  )
}
