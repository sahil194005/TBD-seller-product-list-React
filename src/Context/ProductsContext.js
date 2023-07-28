import { useState } from "react";
import React from "react";


export const ProductsContext = React.createContext();
let tempproducts = [
	{
		id: "m1",
		ShoeName: "adidas",
		description: "100% cotton",
		price: 1299,
		large: 97,
		small: 20,
		medium: 102,
	},
	{
		id: "m2",
		ShoeName: "nike",
		description: "Lightweight and durable",
		price: 1499,
		large: 120,
		small: 15,
		medium: 75,
	},
]
export const ProductsContextProvider = (props) => {
	const [itemsInCart, setItemsInCart] = useState(0);
	const [products, setProducts] = useState(tempproducts);
	

	return (
		<ProductsContext.Provider
			value={{
				products,
				setProducts,
				itemsInCart,
				setItemsInCart,
			}}>
			{props.children}
		</ProductsContext.Provider>
	);
};
