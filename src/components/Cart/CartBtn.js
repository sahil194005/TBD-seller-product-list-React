import "./Cart.css";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
const CartBtn = (props) => {
	const { state } = useContext(ProductsContext);

	const onClickHandler = () => {
		props.setCart((prevState) => !prevState);
		
	};
	return (
		<button
			className="cart-button"
			onClick={onClickHandler}>
			Cart({state.itemsInCart})
		</button>
	);
};

export default CartBtn;
