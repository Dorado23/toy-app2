import React from 'react'
import { useState } from 'react'
import { useStore } from '../data/store.js'
//import { addProduct, getProducts} from '../data/crude.js'
import { db } from '../data/fire.js'


//const collectionRef = db.collection('collectionName');
const AddProduct = () => {

	const [isLoading, setIsLoading] = useState(false)
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
    const [image, setImage] = useState(null)
	const setProduct = useStore(state => state.setProduct)
    const [error, setError] = useState('')

    const types =['image/png', 'image/jpeg']

    const productImgHandler = async (event) => {
        let selectedFile = event.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)){
            setImage(selectedFile);
            setError('')
        }
         else {
        setImage(null);
        setError('Please select a avlid image type')
    }

    
    setIsLoading(true)
		event.preventDefault()
		const newProduct = { name: name, price: price, image: image }
		
		try {
			await addProduct(newProduct)
			setName('')
			setPrice('')
			setImage(await getProducts())

		} catch(error) {
			

		} finally {
			setIsLoading(false);
		}
		
	

	return (
		<section>
			<form className="form">
			<h3> Register a new Product </h3>
			<section className="column">
				<label> Name </label>
				<input type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					/>
			</section>

			<section className="column">
				<label> Price </label>
				<input type="text"
					value={price}
					onChange={e => setPrice(e.target.value)}
					/>
			</section>

            <section className="column">
				<label> Image </label>
				<input type="text"
					value={image}
					onChange={e => setImage(e.target.value)}
					/>
			</section>

			<button
				disabled={isLoading}
				onClick={productImgHandler} type="productImgHandler"> Register </button>
			</form>
		</section>
	)
}
}
export default AddProduct 
