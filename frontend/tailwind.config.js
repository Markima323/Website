/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // 系统字体栈：各平台用自带的现代黑体（Windows 微软雅黑 / Mac 苹方 / Linux 思源·Noto），
        // 中英文都清晰好看、零加载。Tailwind 默认的 font-sans 就用这套，所以全站自动生效。
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"PingFang SC"', // macOS / iOS 中文
          '"Microsoft YaHei"', // Windows 中文（微软雅黑）
          '"Hiragino Sans GB"',
          '"Source Han Sans SC"', // 思源黑体
          '"Noto Sans SC"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
