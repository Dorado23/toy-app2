import { useState } from 'react'
import AddProduct from './components/AddProduct'
import Navbar from './components/Navbar'
import About from './components/About'
import Search from './components/Search'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <h1>L-e-k</h1>

     <Search/>
     <About />
     <Navbar />
     <AddProduct />
     
     </div>
  )
}



export default App 
