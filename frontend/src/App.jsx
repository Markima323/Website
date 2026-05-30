import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Field from './pages/Field'
import Data from './pages/Data'
import Archive from './pages/Archive'
import NotFound from './pages/NotFound'
import Follow from './mouse/follow/Follow.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/field" element={<Field />} />
        <Route path="/data" element={<Data />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* 鼠标剧情动画（覆盖在所有页面之上，逻辑都在 src/mouse 里） */}
      <Follow />
    </>
  )
}

export default App
