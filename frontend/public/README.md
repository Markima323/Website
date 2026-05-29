# public —— 静态资源目录

放在这里的文件会被原样提供，用根路径访问（例如 `public/cursor.png` → `/cursor.png`）。

## 自定义鼠标指针（动画期间）

把你的指针图片放到这个目录，命名为 **`cursor.png`**（或改 `src/mouse/follow/follow.config.js` 里的 `cursorImage` 路径）。

### 格式与大小要求（浏览器限制）

- **格式**：PNG（推荐，支持透明背景）；也支持 SVG、CUR。**动图（GIF/APNG）不会动**，只显示第一帧。
- **尺寸**：浏览器**最大 128×128 px**，超过会被忽略、光标直接回退成默认箭头。
  - 推荐 **32×32**（标准光标大小）；高分屏可用到 48×48 或 64×64。
- **热点（hotspot）**：指针真正的“定位/点击点”相对图片左上角的偏移，在
  `follow.config.js` 里用 `cursorHotspotX / cursorHotspotY` 设置（单位 px）。
  - 例如箭头型指针填 `0 0`（左上角尖）；十字/圆形指针填图片中心（如 16 16）。

### 设置方法

已经接好了。`follow.config.js` 里：

```js
cursorEnabled: true,        // 开关
cursorImage: '/cursor.png', // 这个目录下的文件
cursorHotspotX: 0,
cursorHotspotY: 0,
```

动画一开始（组件挂载）就会把整页鼠标换成这张图，动画播完或离开页面自动恢复默认。
底层就是 CSS：`cursor: url("/cursor.png") 0 0, auto;`
