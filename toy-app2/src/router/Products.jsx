import App from '../App'

const Products = () => {
    const { products, setProducts } = useStoore(state=> ({
        products: state.products,
        setProducts: state.setProducts
    }))
    const handleGetProducts= async () => {
		setProducts(await getProducts())
	}

	return (
		<div>
			<h2> Our team </h2>
			<div>
				<button onClick={handleGetProducts}> Get products</button>
			</div>
			{products.map(e => (
				<ViewProduct key={e.key} product={e} />
			))}
		</div>
	)
}



<App/>

export default Products