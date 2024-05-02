import React from "react";
import { useStore } from '../Data/store'




const Kundvagn = () => {
    const Kundvagn = useStore();

      if (!Kundvagn) {
        return <div>Loading...</div>;
      }
      
    return (
        <div>
            <h2>Kundvagn</h2>
            {Kundvagn.products.map(product => (
                <div key={product.id}>
                  <p>{product.name} - {product.price}</p>
                  <button onClick={() => 
                  Kundvagn.removeFromCart(product.id)}>Remove</button>
                  </div>
            ))}
            <p>Total: {Kundvagn.total}</p>   
        
        </div>
    );
};

export default Kundvagn 