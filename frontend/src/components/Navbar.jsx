import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Menu } from 'lucide-react'
import { navItems as defaultNavItems, heroContent } from '../data/siteContent'

// 顶部导航栏。items 可传入自定义导航项，brand 可覆盖左上角品牌名。
export default function Navbar({ items = defaultNavItems, brand = heroContent }) {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center border border-white/30 bg-white/10 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-lime-100" />
          </div>
          <div>
            <p className="text-xs tracking-[0.42em] text-white/55">{brand.brandTop}</p>
            <p className="text-sm font-semibold tracking-[0.28em]">{brand.brandBottom}</p>
          </div>
        </Link>
      </motion.div>

      <nav className="hidden items-center gap-8 md:flex">
        {items.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
          >
            <Link
              to={item.to}
              className="text-xs tracking-[0.28em] text-white/55 transition hover:text-white"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <button className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs tracking-[0.24em] text-white/80 backdrop-blur-xl transition hover:bg-white/20 md:hidden">
        <Menu className="h-4 w-4" />
      </button>
    </header>
  )
}
