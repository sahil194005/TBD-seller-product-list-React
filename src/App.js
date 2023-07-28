import React, { useState } from "react";
import "./App.css";
import SellerForm from "./components/Seller/sellerForm";
import CartBtn from "./components/Cart/CartBtn";
import ProductsList from "./components/Products/ProductsList";
import Cart from "./components/Cart/Cart";
import { ProductsContextProvider } from "./Context/ProductsContext";
const App = (props) => {
	const [isCart, setCart] = useState(true);
	return (
		<ProductsContextProvider>
			{isCart && <Cart isCart={isCart} setCart={setCart} />}
			<div className="navbar">
				<SellerForm />
				<CartBtn isCart={isCart} setCart={setCart} />
			</div>
			<ProductsList />
		</ProductsContextProvider>
	);
};
export default App;
