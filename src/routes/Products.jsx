import { useState } from 'react'
import { getProducts } from '../data/crude.js'
import { useStore } from '../data/store.js'

const Products= () => {
	const { products, setProducts } = useStore(state => ({
		products: state.products,
		setProducts: state.setProducts
	}))

	const handleGetProducts = async () => {
		setProducts(await getProducts())
	}

	return (
		<div>
			<h2> Our team </h2>
			<div>
				<button onClick={handleGetProducts}> Fetch products </button>
			</div>
			{products.map(e => (
				<Products key={e.key} products={e} />
			))}
		</div>
	)
}

export default Products