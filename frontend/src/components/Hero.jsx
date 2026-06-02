import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Navbar from './Navbar'
import LabTerminal from './LabTerminal'
import { heroLinks } from '../data/siteContent'
import { useLanguage } from '../i18n/LanguageContext'

// 第一屏 Hero：背景装饰层 + 顶部导航 + 左侧文案 + 右侧实验室终端面板。
// 文案随当前语言切换（见 i18n/translations.js 的 hero）。
export default function Hero() {
  const { t, lang } = useLanguage()
  const content = t.hero
  // 中文用紧凑字距（宽字距套中文会松散难看）
  const btnTrack = lang === 'zh' ? 'tracking-[0.1em]' : 'tracking-[0.24em]'
  // 大标题：英文用负字距更紧凑有力；中文负字距会让两字重叠，改成正字距拉开一点
  const titleTrack = lang === 'zh' ? 'tracking-[0.08em]' : 'tracking-[-0.08em]'
  return (
    <section className="relative min-h-screen isolate">
      {/* 背景装饰层 */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_8%,rgba(214,240,223,0.32),transparent_24%),radial-gradient(circle_at_78%_28%,rgba(99,150,107,0.22),transparent_30%),linear-gradient(180deg,#11191a_0%,#0a0f0f_62%,#050807_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -top-24 left-[18%] h-[66rem] w-24 rotate-[22deg] bg-white/10 blur-[2px]" />
      <div className="absolute -top-28 right-[22%] h-[72rem] w-32 rotate-[-18deg] bg-white/8 blur-[2px]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="absolute left-0 top-20 h-[80%] w-24 skew-x-[-18deg] bg-black/45" />
      <div className="absolute right-0 top-0 h-full w-36 skew-x-[-16deg] bg-black/55" />
      <div className="absolute bottom-0 left-0 right-0 h-44 opacity-70">
        {Array.from({ length: 42 }).map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 w-[2px] rounded-full bg-emerald-200/30"
            style={{
              left: `${(i * 37) % 100}%`,
              height: `${38 + ((i * 19) % 92)}px`,
              transform: `rotate(${(i % 7) * 8 - 24}deg)`,
            }}
          />
        ))}
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-20 lg:pt-20">
        <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8 inline-flex items-center gap-3 border border-white/15 bg-white/[0.06] px-4 py-2 text-xs tracking-[0.28em] text-lime-100/80 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-200 shadow-[0_0_14px_rgba(217,255,179,0.9)]" />
            {content.badge}
          </div>

          <h1 className={`max-w-4xl text-6xl font-black leading-[0.9] text-white md:text-8xl lg:text-9xl ${titleTrack}`}>
            {content.titleTop}
            <span className="block text-white/30">{content.titleBottom}</span>
          </h1>

          <div className="mt-6 flex items-center gap-5">
            <div className="h-px w-36 bg-white/45" />
            <p className="text-sm uppercase tracking-[0.52em] text-white/45">{content.subtitle}</p>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/62 md:text-lg">{content.description}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to={heroLinks.primaryTo}
              className={`group flex items-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-[#0b1010] transition hover:bg-lime-100 ${btnTrack}`}
            >
              {content.primaryCta}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to={heroLinks.secondaryTo}
              className={`border border-white/20 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white/80 backdrop-blur-xl transition hover:bg-white/15 ${btnTrack}`}
            >
              {content.secondaryCta}
            </Link>
          </div>
        </motion.div>

        <LabTerminal />
      </div>
    </section>
  )
}
