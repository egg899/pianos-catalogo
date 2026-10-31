import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Navbar, Footer } from './components'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Posts from './pages/Posts'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App