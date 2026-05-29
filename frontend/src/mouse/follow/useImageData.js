import { useEffect, useState } from 'react'

/**
 * 分析单张图片：用离屏 canvas 读取像素，得到
 *   - naturalWidth / naturalHeight：原图尺寸
 *   - mask：非透明掩码（Uint8Array，1=非透明，0=透明），用于像素级接触检测
 *   - anchor：左下角的非透明像素（{x, y}），用于和鼠标做接触/定位
 */
function analyze(img, alphaThreshold) {
  const w = img.naturalWidth
  const h = img.naturalHeight

  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  ctx.drawImage(img, 0, 0)
  const px = ctx.getImageData(0, 0, w, h).data

  const mask = new Uint8Array(w * h)
  let minX = w, maxY = -1
  let found = false
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x
      if (px[i * 4 + 3] > alphaThreshold) {
        mask[i] = 1
        found = true
        if (x < minX) minX = x
        if (y > maxY) maxY = y
      }
    }
  }

  // 左下角非透明像素 = 离“(最小x, 最大y)”这个左下角最近的非透明像素
  let anchor = found ? { x: minX, y: maxY } : { x: 0, y: h - 1 }
  if (found) {
    let bestDist = Infinity
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (mask[y * w + x]) {
          const dx = x - minX
          const dy = y - maxY
          const d = dx * dx + dy * dy
          if (d < bestDist) {
            bestDist = d
            anchor = { x, y }
          }
        }
      }
    }
  }

  return { naturalWidth: w, naturalHeight: h, mask, anchor }
}

/**
 * 加载并分析一组图片。
 * @param {Object} sources  形如 { m1: url, m2: url, ... } 的映射（值由 Vite import 得到，保证同源可读像素）
 * @param {number} alphaThreshold
 * @returns {null | Object}  全部加载完成后返回 { m1: {...}, m2: {...}, ... }，否则 null
 */
export function useImageData(sources, alphaThreshold = 16) {
  const [data, setData] = useState(null)

  useEffect(() => {
    let cancelled = false
    const keys = Object.keys(sources)
    const results = {}
    let remaining = keys.length

    keys.forEach((key) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.src = sources[key]
      img.onload = () => {
        if (cancelled) return
        results[key] = analyze(img, alphaThreshold)
        remaining -= 1
        if (remaining === 0) setData(results)
      }
    })

    return () => {
      cancelled = true
    }
    // sources 在调用处用模块级常量，引用稳定
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alphaThreshold])

  return data
}
