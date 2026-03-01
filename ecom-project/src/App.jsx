import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar';
import { cartData } from './assets/cartData';
import { CartPage } from './pages/CartPage/CartPage';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(cartData);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products')
      await setProducts(response.data);
    }

    fetchData();
  },[])

  return (
    <div className='pt-18.5'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage products={products} setCart={setCart} />}></Route>
        <Route path='/cart' element={<CartPage cart={cart} />}></Route>
      </Routes>
    </div>
  )
}

export default App
