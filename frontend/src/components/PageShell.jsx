import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from './Navbar'

// 统一风格的页面外壳：深色背景 + 网格/光感装饰 + 顶部导航 + 标题区。
// 新页面只要 <PageShell eyebrow="..." title="..."> 即可，内容区 children 不传则显示占位。
export default function PageShell({ eyebrow, title, subtitle, children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080d0d] text-white selection:bg-lime-200/30 selection:text-white">
      {/* 背景装饰层（与首页同款风格） */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_8%,rgba(214,240,223,0.28),transparent_26%),linear-gradient(180deg,#11191a_0%,#0a0f0f_62%,#050807_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute right-0 top-0 h-full w-36 skew-x-[-16deg] bg-black/55" />

      <Navbar />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.42em] text-lime-100/55">{eyebrow}</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] md:text-7xl">{title}</h1>
          <div className="mt-6 flex items-end gap-5">
            <div className="h-px w-36 bg-white/40" />
            {subtitle && <p className="text-sm uppercase tracking-[0.4em] text-white/45">{subtitle}</p>}
          </div>

          {children ?? (
            <div className="mt-12 max-w-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <p className="text-xs tracking-[0.34em] text-lime-100/70">UNDER CONSTRUCTION</p>
              <p className="mt-4 text-base leading-8 text-white/55">
                该模块正在建设中，内容稍后上线。这是一个统一风格的空白页面模板，可以直接往里面填内容。
              </p>
            </div>
          )}

          <Link
            to="/"
            className="mt-12 inline-flex items-center gap-3 border border-white/20 bg-white/[0.06] px-6 py-4 text-sm font-semibold tracking-[0.24em] text-white/80 backdrop-blur-xl transition hover:bg-white/15"
          >
            <ArrowLeft className="h-4 w-4" />
            BACK HOME
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
