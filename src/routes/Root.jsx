import react from 'react';
import { NavLink, Outlet } from "react-router-dom";

const Root =() => (
        <div className="webapp">
            <header>
                <h1>L-e-k</h1>

               <nav>
               <NavLink to="/">Landing</NavLink>
               <NavLink to="/">Kundvagn</NavLink>
               <NavLink to="/">Login</NavLink>
               <NavLink to="/products">Products</NavLink>
               <NavLink to="/">AddProducts</NavLink>
               </nav>
            </header>   

            <main>

                <Outlet/>
            </main>
        </div>
    );

export default Root; 