import Hero from '../components/Hero'
import Features from '../components/Features'

// 首页：第一屏 Hero + 第二屏 Features。
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d0d] text-white selection:bg-lime-200/30 selection:text-white">
      <Hero />
      <Features />
    </main>
  )
}
