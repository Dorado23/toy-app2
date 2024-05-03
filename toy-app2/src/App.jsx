import React, { useState } from 'react'
import './App.css'
import AddProduct from './components/AddProduct'
import Products from './components/Product'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)
  
  

  return(
    <div>
     <h1>L-e-k</h1>
    
      <AddProduct/>
      <Products/>
      <Navbar/>

     </div>
 )
}

export default App
