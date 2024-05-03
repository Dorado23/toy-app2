import React from 'react'
import { useState } from 'react'
import { useStore } from '../data/store.js'
import { db } from '../data/fire.js'
import { storageInstance } from '../data/fire.js'

//import { addProduct, getProduct} from '../data/crude.js'


const AddProduct = () => {

	const [isLoading, setIsLoading] = useState(false)
	const [productName, setProductName] = useState('')
	const [productPrice, setProductPrice] = useState(0)
    const [productImg, setProductImg] = useState(null)
	const setProduct = useStore(state => state.setProduct)
    const [error, setError] = useState('')

    const types =['image/png', 'image/jpeg']

    const productImgHandler = async (event) => {
        let selectedFile = event.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)){
            setProductImg(selectedFile);
            setError('')
        }
         else {
        setProductImg(null);
        setError('Please select a avlid image type')
    }

    }

    const addProduct = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(productName, productPrice, productImg)
        const uploadTask = storageBucket.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            console.log(progress);
        }, 
        err => {
            setError(err.message)
            setIsLoading(false)
        }, () => {
            storage.ref('product-images').child(productImg.name).getDownloadURL().then(url=> {
                db.collection('product').add({
                    productName: productName,
                    productPrice: Number(productPrice),
                    productImg: url,
                    setProduct: setProduct,
                    
                }).then(()=> {
                    setProductName('');
                    setProductPrice(0);
                    setProductImg(null)
                    setError('')
                    setIsLoading(false)
                });
                    
                }).catch((error) => {
                    setError(error.message);
                    setIsLoading(false);



                })
           

        }
    )
    }



    

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={addProduct}>
                <label htmlFor="product-name">Name</label>
                <input type="text" id="product-name" value={productName} onChange={(e) => setProductName(e.target.value)} required />

                <label htmlFor="product-price">Price</label>
                <input type="number" id="product-price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />

                <label htmlFor="product-img">Image</label>
                <input type="file" id="product-img" onChange={productImgHandler} required />

                {error && <p>{error}</p>}

                <button type="submit" disabled={isLoading}>Add Product</button>
            </form>
        </div>
    );
};



export default AddProduct 
