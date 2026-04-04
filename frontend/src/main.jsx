import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import HomePage from './landing_page/home/HomePage'
import SignUp from './landing_page/signup/SignUp'
import Login from './landing_page/signup/Login'
import AboutPage from './landing_page/about/AboutPage'
import ProductPage from './landing_page/products/ProductPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'
import { AuthProvider } from './context/AuthContext'

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/*' element={<HomePage />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/product' element={<ProductPage />}></Route>
        <Route path='/pricing' element={<PricingPage />}></Route>
        <Route path='/support' element={<SupportPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Footer />}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
