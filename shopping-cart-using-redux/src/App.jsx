import { useSelector } from 'react-redux'
import './App.css'
import Product from './components/Product'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
// import { productList } from './store/productList'

function App() {
  const productList = useSelector((state) => state.products)
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
