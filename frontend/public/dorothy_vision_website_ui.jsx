import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Radio, Shield, Sparkles, Activity, Microscope, Menu } from "lucide-react";

const navItems = ["PROJECT", "FIELD", "DATA", "ARCHIVE"];

const features = [
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "生态复原区",
    desc: "以温室、植物覆生与灰绿雾面光感构成主视觉，营造静谧但危险的研究场域。",
  },
  {
    icon: <Radio className="h-5 w-5" />,
    title: "莱茵式终端",
    desc: "半透明玻璃面板承载关键数据，强调未来实验室界面与行动指令感。",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "干员档案入口",
    desc: "将角色视觉转化为网站中的任务入口、事件介绍与档案浏览模块。",
  },
];

const metrics = [
  ["SYNC", "98.7%"],
  ["BIO-LUX", "642"],
  ["ZONE", "P-09"],
];

export default function DorothyVisionWebsiteUI() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d0d] text-white selection:bg-lime-200/30 selection:text-white">
      <section className="relative min-h-screen isolate">
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

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center border border-white/30 bg-white/10 backdrop-blur-xl">
              <Sparkles className="h-5 w-5 text-lime-100" />
            </div>
            <div>
              <p className="text-xs tracking-[0.42em] text-white/55">RHODES</p>
              <p className="text-sm font-semibold tracking-[0.28em]">GREENHOUSE</p>
            </div>
          </motion.div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item, idx) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="text-xs tracking-[0.28em] text-white/55 transition hover:text-white"
                href="#"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <button className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs tracking-[0.24em] text-white/80 backdrop-blur-xl transition hover:bg-white/20 md:hidden">
            <Menu className="h-4 w-4" />
          </button>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-20 lg:pt-20">
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-8 inline-flex items-center gap-3 border border-white/15 bg-white/[0.06] px-4 py-2 text-xs tracking-[0.28em] text-lime-100/80 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-200 shadow-[0_0_14px_rgba(217,255,179,0.9)]" />
              SIDE STORY INTERFACE
            </div>

            <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.08em] text-white md:text-8xl lg:text-9xl">
              绿野
              <span className="block text-white/30">幻梦</span>
            </h1>

            <div className="mt-6 flex items-end gap-5">
              <div className="h-px w-36 bg-white/45" />
              <p className="text-sm uppercase tracking-[0.52em] text-white/45">Dorothy&apos;s Vision</p>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              一个面向活动专题、角色档案与实验区探索的网站 UI。整体以冷灰玻璃、植物覆生、强逆光与莱茵生命式科技排版为核心，形成「温柔、洁净、失控边缘」的视觉张力。
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-3 bg-white px-6 py-4 text-sm font-semibold tracking-[0.24em] text-[#0b1010] transition hover:bg-lime-100">
                ENTER SITE
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button className="border border-white/20 bg-white/[0.06] px-6 py-4 text-sm font-semibold tracking-[0.24em] text-white/80 backdrop-blur-xl transition hover:bg-white/15">
                VIEW ARCHIVE
              </button>
            </div>
          </motion.div>

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
                      animate={{ width: "76%" }}
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
        </div>
      </section>

      <section className="relative bg-black px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs tracking-[0.42em] text-lime-100/55">UI SYSTEM</p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-0.06em] md:text-5xl">视觉组件方向</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/45">
              适合活动官网、游戏专题页、角色档案页、沉浸式剧情入口与实验室数据看板。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.08 }}
                className="group border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="mb-8 grid h-11 w-11 place-items-center border border-white/15 bg-white/10 text-lime-100 transition group-hover:bg-lime-100 group-hover:text-black">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/48">{feature.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
