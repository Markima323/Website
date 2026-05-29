import { useEffect, useState } from 'react'

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
    </main>
  )
}

export default App
