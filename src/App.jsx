import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'

const App = () => {
  const [products, setProducts] = useState([])
   const [cartItems, setCartItems] = useState([])

  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<Home products={products} setProducts={setProducts} setCartItems={setCartItems}/>} />
        <Route path='/cart' element={<Cart cartItems={cartItems} />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App