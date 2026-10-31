import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import Home from './pages/Home'
import Posts from './pages/Posts'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App