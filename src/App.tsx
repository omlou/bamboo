import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Marked from './pages/Marked/Marked'
import ToastUI from './pages/ToastUI/ToastUI'
import './App.css'

function App() {

  return (
    <div id='app'>
      <NavBar></NavBar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Marked />} />
          <Route path="/marked" element={<Marked />} />
          <Route path="/toastui" element={<ToastUI />} />
          <Route path="*" element={<Marked />} />
        </Routes>
      </div>
    </div>
  )
}

export default App