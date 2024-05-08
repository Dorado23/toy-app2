import { useState } from 'react'
import AddProduct from './components/AddProduct'
import Navbar from './components/Navbar'
import About from './components/About'
import Search from './components/Search'
import Products from './routes/Products'
//import ProductsContextProvider from './components/ProductsContext'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <h1>L-e-k</h1>

     <Search/>
     <About />
     <Navbar />
     <AddProduct />
     <Products/>

     
     
     </div>
  )
}



export default App 
