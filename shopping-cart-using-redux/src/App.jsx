import './App.css'
import Product from './components/Product'
import { productList } from './store/productList'
// import store from './store/store'

function App() {
  // console.log(store)
  return (
    <>
      <div className="products-container">
        {productList.map(({ id, title, rating, price, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          />
        ))}
      </div>
    </>
  )
}

export default App
