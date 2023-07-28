import React, { useState } from "react";
import './App.css'
import SellerForm from "./components/Seller/sellerForm";
import Cart from "./components/Cart/Cart";
const App = (props) => {
	return (
		<React.Fragment>
			<div className="navbar">
				<SellerForm />
				<Cart />
			</div>
		</React.Fragment>
	);
};
export default App;
