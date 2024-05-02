import React, { useState } from 'react'
import './App.css'
import AddProduct from './components/AddProduct'
import Products from './router/Product'
import Navbar from './components/Navbar'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {storage } from "./firebase-config"

function App() {
  const [count, setCount] = useState(0)
  const [imageUpload, setImageUpload ] = useState();

  const uploadFile = () => {
    if (!imageUpload) return;
    const imageRef = ref(storage, )
    
  }

  return (
    <div>
     <h1>L-e-k</h1>
    
      <AddProduct/>
      <Products/>
      <Navbar/>

      <div className='App'>
      <input type= "file"
     onChange={(event) => {
      setImageUpload(event.target.files[0]);
     }}
     />

     </div>)
    </div>
  )
}

export default App
