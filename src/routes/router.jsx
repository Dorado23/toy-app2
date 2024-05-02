import Landing from "./Landing";
import Admin from "./Admin";
import Login from "./Login";
//import Details from "./Details";
import NotFound from ":/NotFound";
import { createHashRouter, RouterProvider } from "react-router-dom";


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
            path: "/Admin",
            element: <Admin/>   
        },

        {
            path: "/Details",
            element: <Details/>   
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


        ],
    },
]);

export { router }



