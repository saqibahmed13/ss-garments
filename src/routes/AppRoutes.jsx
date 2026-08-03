import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/About/About.jsx'
import Contact from '../pages/Contact/Contact.jsx'
import Home from '../pages/Home/Home.jsx'
import Products from '../pages/Products/Products.jsx'
import MainLayout from "../layouts/MainLayout.jsx";
import Gallery from '../pages/Gallery/Gallery.jsx'
import { NotFound } from '../pages/NotFound/NotFound.jsx'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
  <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>

  <Route path="*" element={<NotFound />} />
</Routes>
    </BrowserRouter>
  )
}

export default AppRoutes