// 主页/导航的“结构性数据”（与语言无关）。
// 所有文字内容（中英）都在 src/i18n/translations.js，这里只放路由、图标、数值。
import { Leaf, Radio, Shield } from 'lucide-react'

// 顶部导航项：key 对应 translations.nav[key] 的文字。
// 内部页用 to（react-router 路由）；外链（如 GitHub）用 href + external: true（新标签打开）。
export const navItems = [
  { key: 'home', to: '/' },
  { key: 'aboutme', to: '/aboutme' },
  { key: 'project', to: '/project' },
  { key: 'resume', to: '/resume' },
  { key: 'contact', to: '/contact' },
  { key: 'GitHub', href: 'https://github.com/Markima323', external: true }, // ← 改成你的 GitHub 地址
]

// Hero 两个按钮各自的跳转目标（文字在 translations.hero.primaryCta / secondaryCta）
export const heroLinks = {
  primaryTo: '/aboutme',
  secondaryTo: '/resume',
}

// Features 卡片的图标，顺序与 translations.features.items 一一对应
export const featureIcons = [Leaf, Radio, Shield]
