import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

// 语言上下文：提供当前语言 lang、切换函数 toggle/setLang，以及当前语言的文案字典 t。
const LanguageContext = createContext(null)

const STORAGE_KEY = 'site-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'zh' || saved === 'en') return saved
    }
    return 'zh' // 默认中文
  })

  // 持久化选择，并同步 <html lang="..."> 方便无障碍/SEO
  useEffect(() => {
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lang)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    }
  }, [lang])

  const toggle = () => setLang((l) => (l === 'zh' ? 'en' : 'zh'))
  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// 组件里用 const { t, lang, toggle } = useLanguage()
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage 必须在 <LanguageProvider> 内使用')
  return ctx
}
