import { create } from 'zustand'
import Products from '../routes/Products'


const useStore = create((set) => ({
	Products: [
		{
			name: "boll",
			id:1,
			image: "https://m.media-amazon.com/images/I/51Q5wy9AXLL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
			price: 99,
		}

	],
	setProducts: newProducts => set((state) => ({
		Products: newProducts

	})),
	addProductsZustand: Products => set(state => ({
		name: Products.name,
		price: Products.price,
		image: Products.image,
	}))
})) 


export { useStore, Products }