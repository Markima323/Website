import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

// 语言切换按钮：点击在中/英之间切换，显示“目标语言”。
// className 可传入以适配不同页面的配色（首页深色 / 内页温室绿）。
export default function LanguageSwitch({ className = '' }) {
  const { toggle, t, lang } = useLanguage()
  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.94 }}
      aria-label="切换语言 / Switch language"
      className={`inline-flex items-center gap-2 text-xs font-medium transition ${lang === 'en' ? 'tracking-[0.1em]' : 'tracking-[0.24em]'} ${className}`}
    >
      <Languages className="h-4 w-4" />
      {t.switchLabel}
    </motion.button>
  )
}
