import { create } from 'zustand'


const useStore = create(set => ({
	products: [],

	setProducts: newProducts => set(state => ({
		products: newProducts
	})),

	addProducts: products => set(state => ({
		products: [ ...state.products, products ]
	})),

    increaseProducts: () => set((state) => ({ count: state.count + 1 })),

    decreaseProducts: () => set((state) => ({ count: state.count - 1 })),
}));



export { useStore };