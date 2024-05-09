import { create } from 'zustand'

const useStore = create((set) => ({
	Products: [
		{
			name: "boll",
			id:1,
			image: "https://m.media-amazon.com/images/I/51Q5wy9AXLL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
			price: 99,
		}

	]
})) 


export { useStore }