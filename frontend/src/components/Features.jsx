import { motion } from 'framer-motion'
import { features as defaultFeatures, featuresIntro } from '../data/siteContent'

// 第二屏：视觉组件方向卡片。items 可传入自定义卡片（每项 { icon, title, desc }）。
export default function Features({ items = defaultFeatures, intro = featuresIntro }) {
  return (
    <section className="relative bg-black px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.42em] text-lime-100/55">{intro.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.06em] md:text-5xl">{intro.title}</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/45">{intro.desc}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: idx * 0.08 }}
                className="group border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="mb-8 grid h-11 w-11 place-items-center border border-white/15 bg-white/10 text-lime-100 transition group-hover:bg-lime-100 group-hover:text-black">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/48">{feature.desc}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
