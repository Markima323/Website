import { motion } from 'framer-motion'
import { Activity, Microscope } from 'lucide-react'
import { metrics as defaultMetrics } from '../data/siteContent'

// 右侧“实验室终端”玻璃面板。metrics 可传入自定义指标。
export default function LabTerminal({ metrics = defaultMetrics }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15 }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="absolute -inset-6 rounded-full bg-lime-200/10 blur-3xl" />
      <div className="relative overflow-hidden border border-white/15 bg-white/[0.07] p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl">
        <div className="absolute right-0 top-0 h-32 w-32 bg-lime-200/10 blur-2xl" />
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs tracking-[0.34em] text-white/40">LAB TERMINAL</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">Pioneer Ecological Lab</h2>
          </div>
          <div className="rounded-full border border-lime-100/20 bg-lime-100/10 px-3 py-1 text-xs tracking-[0.2em] text-lime-100">
            LIVE
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {metrics.map(([label, value]) => (
            <div key={label} className="border border-white/10 bg-black/20 p-4">
              <p className="text-[10px] tracking-[0.3em] text-white/35">{label}</p>
              <p className="mt-2 text-xl font-semibold text-white/90">{value}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-5 h-72 overflow-hidden border border-white/10 bg-[#101817]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_24%,rgba(255,255,255,0.22),transparent_18%),linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.08)_48%,transparent_49%)]" />
          <div className="absolute left-1/2 top-12 h-28 w-28 -translate-x-1/2 rounded-full border border-white/20 bg-white/8" />
          <div className="absolute left-1/2 top-28 h-28 w-44 -translate-x-1/2 rounded-t-[4rem] border border-white/20 bg-white/10 backdrop-blur-xl" />
          <div className="absolute left-[48%] top-20 h-16 w-16 -translate-x-1/2 rounded-full bg-[#eadfbc] shadow-[0_0_40px_rgba(255,255,255,0.28)]" />
          <div className="absolute left-[41%] top-7 h-14 w-8 rotate-[-22deg] rounded-full border border-[#eadfbc]/70 bg-[#eadfbc]/50" />
          <div className="absolute left-[55%] top-6 h-14 w-8 rotate-[18deg] rounded-full border border-[#eadfbc]/70 bg-[#eadfbc]/50" />
          <div className="absolute bottom-10 left-7 right-7 h-px bg-white/20" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute bottom-3 w-[2px] bg-emerald-200/40"
              style={{
                left: `${6 + i * 5.2}%`,
                height: `${24 + ((i * 13) % 70)}px`,
                transform: `rotate(${(i % 5) * 11 - 20}deg)`,
              }}
            />
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-2 text-lime-100/80">
              <Activity className="h-4 w-4" />
              <span className="text-xs tracking-[0.24em]">SIGNAL</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '76%' }}
                transition={{ duration: 1.4, delay: 0.6 }}
                className="h-full bg-white/75"
              />
            </div>
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-2 text-lime-100/80">
              <Microscope className="h-4 w-4" />
              <span className="text-xs tracking-[0.24em]">RESEARCH</span>
            </div>
            <p className="mt-3 text-sm text-white/55">Bio-light survey awaiting operator confirmation.</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
