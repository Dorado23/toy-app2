import React from "react"
import Navbar from "../components/Navbar";
import Kundvagn from "../router/kundvagn"
import AddProduct from "../components/AddProduct"
import App from '../App'

const Landing = () => {
    return (
        <main>
            <Navbar/>
            <Kundvagn/>
            <AddProduct/>
            <App/>
        </main>
    )

}
export default Landing;