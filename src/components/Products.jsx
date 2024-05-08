import { useState } from "react"
import { useStore } from " ../data/store.js"

const Products = () => {
    const { products, setProducts } = useStore(state=> ({
        products: state.products,
        setProducts: state.setProducts
    }))
          console.log(products)

    const handleGetProducts= async () => {
        setProducts(await getProducts())

        
    }
    
     const Firestore = () => {
        const [name, setName] = useState("");
        const [price, setPrice] = useState("");
        const [image, setImage] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            db.collection('data')
                .add({
                    name: name,
                    Price: Number(price),
                    image: image
                })

        
        .then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}
     }

     const Read = () => {
 
        const [info, setInfo] = useState([]);
     
        // Start the fetch operation as soon as
        // the page loads
        window.addEventListener('load', () => {
            fetchData();
        });

        const fetchData = () => {
            db.collection("data").get().then((querySnapshot) => {
     
                // Loop through the data and store
                // it in array to display
                querySnapshot.forEach(element => {
                    var data = element.data();
                    setInfo(arr => [...arr, data]);
     
                });
            })
        }


    return (
        <div>
            <h2> Products</h2>
            <div>
                <button onClick={handleGetProducts}> Get products</button>
            </div>

            {
            info.map((data) => (
                <Frame course={data.CourseEnrolled}
                key={data.id}
                name={data.Name}
                price={data.Price}
                imagee={data.image} />
                
            ))
        }
        </div>
    );
}
return (
    <div>
        <Firestore />
    </div>
);
};
export default Products