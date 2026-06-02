import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Menu } from 'lucide-react'
import { navItems } from '../data/siteContent'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageSwitch from './LanguageSwitch'

// 首页顶部导航栏（深色风格）。文字走当前语言字典。
export default function Navbar() {
  const { t, lang } = useLanguage()
  // 中文用紧凑字距，英文保留宽字距（宽字距是给英文大写设计的，套中文会很松散）
  const navTrack = lang === 'zh' ? 'tracking-[0.1em]' : 'tracking-[0.28em]'

  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center border border-white/30 bg-white/10 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-lime-100" />
          </div>
          <div>
            <p className="text-xs tracking-[0.42em] text-white/55">{t.hero.brandTop}</p>
            <p className="text-sm font-semibold tracking-[0.28em]">{t.hero.brandBottom}</p>
          </div>
        </Link>
      </motion.div>

      <div className="hidden items-center gap-8 md:flex">
        <nav className="flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
            >
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs text-white/55 transition hover:text-white ${navTrack}`}
                >
                  {t.nav[item.key]}
                </a>
              ) : (
                <Link
                  to={item.to}
                  className={`text-xs text-white/55 transition hover:text-white ${navTrack}`}
                >
                  {t.nav[item.key]}
                </Link>
              )}
            </motion.div>
          ))}
        </nav>
        <LanguageSwitch className="text-white/55 hover:text-white" />
      </div>

      {/* 小屏：语言切换 + 菜单按钮 */}
      <div className="flex items-center gap-3 md:hidden">
        <LanguageSwitch className="text-white/70 hover:text-white" />
        <button className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs tracking-[0.24em] text-white/80 backdrop-blur-xl transition hover:bg-white/20">
          <Menu className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
