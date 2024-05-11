import Landing from "./Landing";
import About from "./About";
import Login from "./Login";
import NotFound from "./NotFound";
import Products from "./Products";
import AddProduct from "../components/AddProduct"
import { createHashRouter, RouterProvider } from "react-router-dom";
import EditProduct from "../components/EditProduct"


const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
            path:  "/Landing",
            element: <Landing/>,
            
        },

        {
            path: "/Adout",
            element: <About/>   
        },

        {
            path: "/EditProduct",
            element: <EditProduct/>   
        },

        {
            path: "/Kundvagn",
            element: <Kundvagn/>   
        },

        {
            path: "/Login",
            element: <Login/>   
        },

        {
            path: "/NotFound",
            element: <NotFound/>   
        },

        {
            path: "/Products",
            element: <Products/>   
        },

        {
            path: "/Addproduct",
            element: <Addproduct/>   
        },


        ],
    },
]);

export { router }



