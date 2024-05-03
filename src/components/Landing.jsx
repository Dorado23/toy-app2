import React from "react"
import Navbar from "./Navbar";
import Kundvagn from "../../toy-app2/src/router/kundvagn"
import AddProduct from "./components/AddProduct"
import App from '../../toy-app2/src/App'
import About from '../components/About'

const Landing = () => {
    return (
        <main>
            <h1> Hi there! </h1>
            <Navbar/>
            <Kundvagn/>
            <AddProduct/>
            <App/>
            <About/>
        </main>
    )

}
export default Landing;