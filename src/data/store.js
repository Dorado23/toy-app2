import { create } from 'zustand'


const useStore = create(set => ({
	products: [],

	setProducts: newProducts => set(state => ({
		products: newProducts

    })),
		addProduct: product => set(state => ({
			products: [...state.products, product]
		})),
	

	
}));



export { useStore }