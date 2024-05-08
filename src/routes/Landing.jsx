import React from 'react';
import Landing from './Landing.';
import Navbar from '../components/Navbar';
import AddProducts from '../components/AddProducts';
import Products from "../routes/Products"



       

const Landing = () => ( 
   
        <div>
            <h1> Introduction to our products</h1>
            <Landing/>
            <Navbar/>
            <App/>
            <Kundvagn/>
            <AddProducts/>
            <Products/>

        </div>
       

    )

export default Landing;