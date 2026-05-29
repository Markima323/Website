// 两张图片“非透明像素是否接触/重叠”的检测。
//
// 每个角色在屏幕上的摆放信息用一个对象描述：
//   { L, T, dispW, dispH, scale, flip, data }
//   L, T      —— 元素左上角的屏幕坐标
//   dispW/H   —— 显示尺寸
//   scale     —— 显示尺寸 / 原图尺寸
//   flip      —— 是否水平翻转（scaleX(-1)）
//   data      —— { naturalWidth, naturalHeight, mask }

// 判断屏幕点 (sx, sy) 落在该角色身上时，对应的原图像素是否非透明
function pixelHit(c, sx, sy) {
  const ex = sx - c.L
  const ey = sy - c.T
  if (ex < 0 || ey < 0 || ex >= c.dispW || ey >= c.dispH) return false

  // 翻转时，元素内的水平坐标要镜像回原图坐标
  const localX = c.flip ? c.dispW - ex : ex
  const px = Math.floor(localX / c.scale)
  const py = Math.floor(ey / c.scale)

  const { naturalWidth, naturalHeight, mask } = c.data
  if (px < 0 || py < 0 || px >= naturalWidth || py >= naturalHeight) return false
  return mask[py * naturalWidth + px] === 1
}

// 在两个角色的屏幕包围盒交集内按 step 采样，只要有一个采样点上双方都非透明，就算接触
export function pixelsOverlap(a, b, step = 3) {
  const x0 = Math.max(a.L, b.L)
  const y0 = Math.max(a.T, b.T)
  const x1 = Math.min(a.L + a.dispW, b.L + b.dispW)
  const y1 = Math.min(a.T + a.dispH, b.T + b.dispH)
  if (x1 <= x0 || y1 <= y0) return false // 包围盒都不相交

  for (let sy = y0; sy <= y1; sy += step) {
    for (let sx = x0; sx <= x1; sx += step) {
      if (pixelHit(a, sx, sy) && pixelHit(b, sx, sy)) return true
    }
  }
  return false
}
