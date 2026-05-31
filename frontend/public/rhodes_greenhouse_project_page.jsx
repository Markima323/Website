import React from "react";

const navItems = ["PROJECT", "FIELD", "DATA", "ARCHIVE"];

function Logo() {
  return (
    <a href="/" className="group flex items-center gap-4" aria-label="Rhodes Greenhouse home">
      <div className="grid h-11 w-11 place-items-center border border-[#d8e4bd]/35 bg-[#eef6dd]/5 transition group-hover:border-[#d8e4bd]/70">
        <svg viewBox="0 0 40 40" className="h-7 w-7 text-[#d8e4bd]" fill="none" aria-hidden="true">
          <path d="M8 24 20 11l12 13" stroke="currentColor" strokeWidth="1.2" />
          <path d="M12 23v10h16V23" stroke="currentColor" strokeWidth="1.2" />
          <path d="M20 33V15" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
          <path d="M17 26c-3-5 1-8 4-8 0 5-2 7-4 8Z" stroke="currentColor" strokeWidth="1.1" />
          <path d="M22 27c4-3 7-1 7 3-4 .7-6-.5-7-3Z" stroke="currentColor" strokeWidth="1.1" />
        </svg>
      </div>

      <div className="leading-none tracking-[0.44em] text-[#f5f7ef]">
        <div className="text-[11px] font-light">RHODES</div>
        <div className="mt-2 text-sm font-semibold tracking-[0.34em]">GREENHOUSE</div>
      </div>
    </a>
  );
}

function CatPeek() {
  return (
    <svg
      viewBox="0 0 140 62"
      className="cat-peek absolute -top-10 right-7 h-14 w-32 text-[#d8e4bd]/70"
      fill="none"
      aria-hidden="true"
    >
      <path d="M34 46c6-19 48-19 54 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M43 33 48 16l12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 29 87 16l5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M56 41h.2M75 41h.2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M64 47c2 2 5 2 7 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M36 45H13M37 51H17M87 45h26M86 51h20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".65" />
      <path d="M47 57h19M76 57h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function CatPreview() {
  return (
    <div className="relative mx-auto flex aspect-[1.25/1] w-full max-w-[380px] items-center justify-center overflow-hidden rounded-[26px] border border-dashed border-[#d8e4bd]/18 bg-[#111817]/18 shadow-[inset_0_1px_24px_rgba(255,255,255,0.025)]">
      <div className="absolute inset-5 rounded-[22px] bg-[radial-gradient(circle_at_70%_18%,rgba(216,228,189,0.10),transparent_28%),radial-gradient(circle_at_22%_88%,rgba(255,255,255,0.05),transparent_38%)]" />

      <svg viewBox="0 0 360 260" className="relative z-10 h-full w-full text-[#d8e4bd]/70" fill="none" aria-label="cat animation preview">
        <path
          className="leaf-path"
          d="M194 89c29-7 32-30 66-32"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeDasharray="4 10"
          opacity=".45"
        />
        <g className="leaf-float">
          <path d="M267 50c10-11 22-5 19 8-10 1-17-1-19-8Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M268 50c3 7 4 12 2 18" stroke="currentColor" strokeWidth="1" opacity=".7" />
        </g>

        <g className="cat-breathe" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M122 178c-26-34-12-77 28-80 43-3 65 32 55 80" strokeWidth="1.7" />
          <path d="M145 100 151 69l22 25" strokeWidth="1.7" />
          <path d="M186 93 212 71l2 36" strokeWidth="1.7" />
          <path d="M111 179c-38 4-61-27-40-53 18-22 45 3 31 28" strokeWidth="1.8" />
          <path d="M126 180h102" strokeWidth="1.8" />
          <path d="M157 122h.2M190 121h.2" strokeWidth="4" />
          <path d="M168 137c6 4 13 4 19 0" strokeWidth="1.4" />
          <path d="M126 126H92M128 135H99M205 126h32M202 135h28" strokeWidth="1.1" opacity=".6" />
        </g>
      </svg>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        <span className="paw active" />
        <span className="paw" />
        <span className="paw" />
      </div>
    </div>
  );
}

export default function RhodesGreenhouseProjectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1d2523] px-6 py-8 font-sans text-[#f4f5ee] selection:bg-[#d8e4bd] selection:text-[#16201d] md:px-12 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(216,228,189,0.10),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.06),transparent_30%),linear-gradient(115deg,rgba(255,255,255,0.035),transparent_48%)]" />
      <div className="pointer-events-none absolute -bottom-16 right-2 h-[430px] w-[390px] rounded-full bg-[#0f1514] opacity-55 blur-3xl" />
      <div className="plant-shadow pointer-events-none absolute bottom-0 right-0 h-[420px] w-[380px] opacity-20" />

      <header className="relative z-10 mx-auto flex max-w-[1480px] items-start justify-between gap-8">
        <Logo />

        <nav className="hidden items-start gap-12 text-[12px] font-medium tracking-[0.55em] text-[#f4f5ee]/82 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="group relative pb-5 transition hover:text-[#d8e4bd]">
              <span className={item === "PROJECT" ? "text-[#d8e4bd]" : ""}>{item}</span>
              {item === "PROJECT" && (
                <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#d8e4bd] shadow-[0_0_14px_rgba(216,228,189,0.65)]" />
              )}
            </a>
          ))}
        </nav>
      </header>

      <section className="relative z-10 mx-auto mt-20 max-w-[1480px] rounded-[34px] border border-white/14 bg-[#2b3331]/76 px-7 py-10 shadow-[0_34px_100px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl md:mt-24 md:px-14 md:py-16 lg:px-20">
        <div className="cat-tail pointer-events-none absolute -left-11 bottom-24 h-20 w-20 rounded-full border-b border-l border-[#d8e4bd]/60" />

        <div className="grid items-center gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16">
          <div className="relative min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.62em] text-[#d8e4bd]/74">Section / Project</p>

            <div className="mt-9 flex flex-wrap items-end gap-x-7 gap-y-5">
              <h1 className="text-[clamp(4rem,9vw,7.25rem)] font-black leading-none tracking-[-0.08em] text-[#fbfcf8] drop-shadow-[0_14px_30px_rgba(0,0,0,0.28)]">
                项目
              </h1>
              <div className="mb-4 flex min-w-[240px] items-center gap-6">
                <span className="h-px w-44 bg-[#d8e4bd]/70" />
                <span className="text-sm font-semibold uppercase tracking-[0.55em] text-[#f4f5ee]/70">Project</span>
              </div>
            </div>

            <div className="relative mt-16 max-w-3xl rounded-[18px] border border-white/16 bg-[#6f7670]/24 px-8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <CatPeek />
              <p className="text-xs font-bold uppercase tracking-[0.48em] text-[#d8e4bd]">Under Construction</p>
              <p className="mt-6 max-w-2xl text-base leading-9 tracking-[0.03em] text-[#f4f5ee]/72 md:text-lg">
                该模块正在建设中，内容稍后上线。这是一个统一风格的空白页面模板，
                <br className="hidden md:block" />
                可以直接往里面填内容。
              </p>
            </div>

            <a
              href="/"
              className="mt-14 inline-flex h-14 items-center gap-3 rounded-[8px] border border-[#d8e4bd]/62 px-8 text-sm font-bold uppercase tracking-[0.35em] text-[#f4f5ee] transition hover:-translate-y-0.5 hover:border-[#d8e4bd] hover:bg-[#d8e4bd]/8 hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)] focus:outline-none focus:ring-2 focus:ring-[#d8e4bd]/70"
            >
              <span aria-hidden="true" className="text-lg leading-none">←</span>
              Back Home
            </a>
          </div>

          <aside className="relative border-white/12 lg:border-l lg:pl-16">
            <CatPreview />

            <div className="mx-auto mt-7 max-w-[380px] text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[#f4f5ee]/36">Cat Animation Preview</p>
              <p className="mt-4 text-sm tracking-[0.16em] text-[#f4f5ee]/42">猫咪动画预览（循环）</p>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        @keyframes catPeek {
          0%, 100% { transform: translateY(8px); opacity: .68; }
          45%, 60% { transform: translateY(0); opacity: 1; }
        }

        @keyframes catBreathe {
          0%, 100% { transform: translateY(1px) scaleY(1); }
          50% { transform: translateY(-2px) scaleY(1.015); }
        }

        @keyframes leafFloat {
          0% { transform: translate(0, 0) rotate(-8deg); opacity: .45; }
          50% { transform: translate(8px, -8px) rotate(9deg); opacity: .9; }
          100% { transform: translate(0, 0) rotate(-8deg); opacity: .45; }
        }

        @keyframes pawPulse {
          0%, 100% { transform: scale(.85); opacity: .45; }
          50% { transform: scale(1.08); opacity: .95; }
        }

        .cat-peek { animation: catPeek 5.2s ease-in-out infinite; transform-origin: 50% 100%; }
        .cat-breathe { animation: catBreathe 3.8s ease-in-out infinite; transform-origin: 50% 90%; }
        .leaf-float { animation: leafFloat 4.6s ease-in-out infinite; transform-origin: 260px 56px; }
        .leaf-path { animation: pawPulse 4.6s ease-in-out infinite; }

        .paw {
          position: relative;
          display: inline-block;
          width: 12px;
          height: 11px;
          color: rgba(244, 245, 238, .25);
        }

        .paw::before,
        .paw::after {
          content: "";
          position: absolute;
          border-radius: 999px;
          background: currentColor;
        }

        .paw::before {
          width: 7px;
          height: 7px;
          left: 2.5px;
          bottom: 0;
        }

        .paw::after {
          width: 3px;
          height: 3px;
          left: 1px;
          top: 0;
          box-shadow: 4px -2px 0 currentColor, 8px 0 0 currentColor;
        }

        .paw.active {
          color: rgba(216, 228, 189, .96);
          animation: pawPulse 2.4s ease-in-out infinite;
        }

        .plant-shadow::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 60% 75%, rgba(0,0,0,.45), transparent 40%),
            linear-gradient(25deg, transparent 58%, rgba(216,228,189,.10) 59%, transparent 61%),
            linear-gradient(-24deg, transparent 61%, rgba(216,228,189,.08) 62%, transparent 64%);
          filter: blur(.3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .cat-peek,
          .cat-breathe,
          .leaf-float,
          .leaf-path,
          .paw.active {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
