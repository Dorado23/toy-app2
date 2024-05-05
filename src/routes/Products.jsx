import { useState } from 'react'
import { getEmployees } from '../data/crud.js'
import { useStore } from '../data/store.js'
//import ViewProducts from './ViewEmployee.jsx'

const Products= () => {
	const { products, setProducts } = useStore(state => ({
		producta: state.products,
		setProducts: state.setProducts
	}))

	const handleGetProducts = async () => {
		setProducts(await getProducts())
	}

	return (
		<div>
			<h2> Our team </h2>
			<div>
				<button onClick={handleGetProducts}> Add to Cart</button>
			</div>
			{products.map(e => (
				<ViewProducts key={e.key} products={e} />
			))}
		</div>
	)
}

export default Products