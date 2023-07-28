import { useContext } from "react";
import SingleCartList from "./SingleCartList";
import { ProductsContext } from "../../Context/ProductsContext";
const CartList = (props) => {
	const { state } = useContext(ProductsContext);
	return (
		<ul>
			{state.cartItems.map((item) => {
				return (
					<SingleCartList
						key={item.id}
						ShoeName={item.ShoeName}
						description={item.description}
						price={item.price}
						large={item.large}
						small={item.small}
						medium={item.medium}
					/>
				);
			})}
		</ul>
	);
};

export default CartList;
