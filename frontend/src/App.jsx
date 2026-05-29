import { useEffect, useState } from 'react'
import Follow from './mouse/follow/Follow.jsx'

function App() {
  const [status, setStatus] = useState('connecting…')

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus('backend not reachable'))
  }, [])

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>My Website</h1>
      <p>Backend: {status}</p>

      {/* 鼠标跟随交互（所有相关逻辑都在 src/mouse 文件夹里） */}
      <Follow />
    </main>
  )
}

export default App
