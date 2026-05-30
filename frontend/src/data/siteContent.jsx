// 主页所有文案 / 数据集中在这里，改内容只动这个文件，不用进组件。
import { Leaf, Radio, Shield } from 'lucide-react'

// 顶部导航项（label 显示文字，to 路由路径）
export const navItems = [
  { label: 'PROJECT', to: '/project' },
  { label: 'FIELD', to: '/field' },
  { label: 'DATA', to: '/data' },
  { label: 'ARCHIVE', to: '/archive' },
]

// Hero 区文案
export const heroContent = {
  badge: 'SIDE STORY INTERFACE',
  brandTop: 'RHODES',
  brandBottom: 'GREENHOUSE',
  titleTop: '绿野',
  titleBottom: '幻梦',
  subtitle: "Dorothy's Vision",
  description:
    '一个面向活动专题、角色档案与实验区探索的网站 UI。整体以冷灰玻璃、植物覆生、强逆光与莱茵生命式科技排版为核心，形成「温柔、洁净、失控边缘」的视觉张力。',
  primaryCta: 'ENTER SITE',
  primaryTo: '/project',
  secondaryCta: 'VIEW ARCHIVE',
  secondaryTo: '/archive',
}

// 实验室终端面板的指标
export const metrics = [
  ['SYNC', '98.7%'],
  ['BIO-LUX', '642'],
  ['ZONE', 'P-09'],
]

// 视觉组件方向（卡片）。icon 存“组件引用”，在 Features 里用 <feature.icon /> 渲染
export const features = [
  {
    icon: Leaf,
    title: '生态复原区',
    desc: '以温室、植物覆生与灰绿雾面光感构成主视觉，营造静谧但危险的研究场域。',
  },
  {
    icon: Radio,
    title: '莱茵式终端',
    desc: '半透明玻璃面板承载关键数据，强调未来实验室界面与行动指令感。',
  },
  {
    icon: Shield,
    title: '干员档案入口',
    desc: '将角色视觉转化为网站中的任务入口、事件介绍与档案浏览模块。',
  },
]

// 第二屏标题区文案
export const featuresIntro = {
  eyebrow: 'UI SYSTEM',
  title: '视觉组件方向',
  desc: '适合活动官网、游戏专题页、角色档案页、沉浸式剧情入口与实验室数据看板。',
}
