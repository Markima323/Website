// 全站中英文案字典。加内容只动这里：在 zh 和 en 各加对应字段即可。
// 约定：全大写的装饰性英文标签（如 RHODES、LAB TERMINAL、Dorothy's Vision）属于视觉排版元素，
//      两个语言版本都保持英文；只有“叙述性内容”才做中英切换。
export const translations = {
  zh: {
    // 导航项（key 对应路由，见 siteContent.navItems）
    nav: { home: '首页', aboutme: '关于我',project: '项目', resume: '简历', contact: '联系我', GitHub: 'GitHub'},

    // 首页 Hero
    hero: {
      badge: 'PERSONAL WEBSITE', // 装饰英文，两版一致
      brandTop: 'JIAL WANG',
      brandBottom: 'PORTFOLIO',
      titleTop: '个人',
      titleBottom: '网站',
      subtitle: "ROOTED IN DESIGN, GROWN THROUGH CODE", // 装饰英文
      description:
        '你好，欢迎来到我的个人网站。这里记录了我的项目经验，也会展示一些我制作的网页交互动画与创意开发实验。如果你对我的项目、作品，或任何创意想法感兴趣，欢迎与我交流。',
      primaryCta: '进入站点',
      secondaryCta: '查看简历',
    },

    // 首页 Features（视觉组件方向）
    features: {
      eyebrow: 'UI SYSTEM', // 装饰英文
      title: '视觉组件方向',
      desc: '适合活动官网、游戏专题页、角色档案页、沉浸式剧情入口与实验室数据看板。',
      // 顺序与 siteContent.featureIcons 对应
      items: [
        { title: '生态复原区', desc: '以温室、植物覆生与灰绿雾面光感构成主视觉，营造静谧但危险的研究场域。' },
        { title: '莱茵式终端', desc: '半透明玻璃面板承载关键数据，强调未来实验室界面与行动指令感。' },
        { title: '干员档案入口', desc: '将角色视觉转化为网站中的任务入口、事件介绍与档案浏览模块。' },
      ],
    },

    // 首页 LAB TERMINAL 面板（这一块的文字都在这里改）
    lab: {
      terminalLabel: 'PROFILE DASHBOARD',
      title: 'Software Developer',
      live: 'LIVE',
      // 三个指标：[标签, 数值]
      metrics: [
        ['SYNC', '98.7%'],
        ['BIO-LUX', '642'],
        ['ZONE', 'P-09'],
      ],
      signalLabel: 'SIGNAL',
      researchLabel: 'RESEARCH',
      researchText: 'Bio-light survey awaiting operator confirmation.',
    },

    // 内页（PageShell）通用文案
    page: {
      underConstruction: 'UNDER CONSTRUCTION', // 装饰英文
      constructionDesc:
        '该模块正在建设中，内容稍后上线。这是一个统一风格的空白页面模板，可以直接往里面填内容。',
      backHome: '返回首页',
      catPreviewTitle: 'CAT ANIMATION PREVIEW', // 装饰英文
      catPreviewNote: '猫咪动画预览（循环）',
    },

    // 各内页标题区（eyebrow 装饰英文两版一致；subtitle 仅中文版作英文副标，英文版留空避免与大标题重复）
    pages: {
      aboutme: { eyebrow: 'Section / About', title: '关于我', subtitle: 'About' },
      project: { eyebrow: 'Section / Project', title: '项目', subtitle: 'Project' },
      resume: { eyebrow: 'Section / Resume', title: '简历', subtitle: 'Resume' },
      contact: { eyebrow: 'Section / Contact', title: '联系我', subtitle: 'Contact' },
      notFound: { eyebrow: 'Error / 404', title: '页面未找到', subtitle: 'Not Found' },
    },

    // 语言切换按钮上显示的“目标语言”
    switchLabel: 'EN',
  },

  en: {
    nav: { home: 'HOME', aboutme: 'ABOUT', project: 'PROJECT', resume: 'RESUME', contact: 'CONTACT', GitHub: 'GitHub' },

    hero: {
      badge: 'PERSONAL WEBSITE',
      brandTop: 'JIAL WANG',
      brandBottom: 'PORTFOLIO',
      titleTop: 'Personal',
      titleBottom: 'Website',
      subtitle: 'ROOTED IN DESIGN, GROWN THROUGH CODE',
      description:
        "Hi, welcome to my personal website. Here I document my project experience, and share comics, illustrations and other fun experiments I've made. If you're interested in my projects, my work, or any creative idea, feel free to reach out.",
      primaryCta: 'ENTER SITE',
      secondaryCta: 'VIEW RESUME',
    },

    features: {
      eyebrow: 'UI SYSTEM',
      title: 'Visual Directions',
      desc: 'Fit for event sites, game feature pages, character archives, immersive story entries and lab dashboards.',
      items: [
        { title: 'Ecological Zone', desc: 'Greenhouses, overgrowth and grey-green haze form the main visual — a calm yet dangerous research field.' },
        { title: 'Rhine Terminal', desc: 'Translucent glass panels carry key data, emphasizing a futuristic lab interface and a sense of command.' },
        { title: 'Operator Archive', desc: 'Turns character visuals into mission entries, event briefs and archive-browsing modules.' },
      ],
    },

    lab: {
      terminalLabel: 'LAB TERMINAL',
      title: 'Pioneer Ecological Lab',
      live: 'LIVE',
      metrics: [
        ['SYNC', '98.7%'],
        ['BIO-LUX', '642'],
        ['ZONE', 'P-09'],
      ],
      signalLabel: 'SIGNAL',
      researchLabel: 'RESEARCH',
      researchText: 'Bio-light survey awaiting operator confirmation.',
    },

    page: {
      underConstruction: 'UNDER CONSTRUCTION',
      constructionDesc:
        'This module is under construction; content is coming soon. A unified blank page template — drop your content right in.',
      backHome: 'Back Home',
      catPreviewTitle: 'CAT ANIMATION PREVIEW',
      catPreviewNote: 'Cat animation preview (loop)',
    },

    pages: {
      aboutme: { eyebrow: 'Section / About', title: 'About Me', subtitle: '' },
      project: { eyebrow: 'Section / Project', title: 'Project', subtitle: '' },
      resume: { eyebrow: 'Section / Resume', title: 'Resume', subtitle: '' },
      contact: { eyebrow: 'Section / Contact', title: 'Contact', subtitle: '' },
      notFound: { eyebrow: 'Error / 404', title: 'Page Not Found', subtitle: '' },
    },

    switchLabel: '中文',
  },
}
