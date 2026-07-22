import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/About/About.jsx'
import Contact from '../pages/Contact/Contact.jsx'
import Home from '../pages/Home/Home.jsx'
import Products from '../pages/Products/Products.jsx'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes