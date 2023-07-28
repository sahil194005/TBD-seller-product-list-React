import "./SingleProduct.css";
import React, { useReducer } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../../Context/ProductsContext";
const sizeReducer = (state, action) => {
	switch (action.type) {
		case "SMALL": {
			return { ...state, smallCount: state.smallCount - 1 };
		}
		case "LARGE": {
			return { ...state, largeCount: state.largeCount - 1 };
		}
		case "MEDIUM": {
			return {
				...state,
				mediumCount: state.mediumCount - 1,
			};
		}
		default:
			return state;
	}
};
const SingleProduct = (props) => {
	const { setItemsInCart } = useContext(ProductsContext);
	const [sizeState, sizeDispatch] = useReducer(
		sizeReducer,
		{
			smallCount: props.small,
			largeCount: props.large,
			mediumCount: props.medium,
		}
	);
	const onSmallClick = (e) => {
		setItemsInCart((prevState) => prevState + 1);
		sizeDispatch({ type: "SMALL" });
	};
	const onLargeClick = (e) => {
		setItemsInCart((prevState) => prevState + 1);

		sizeDispatch({ type: "LARGE" });
	};
	const onMediumClick = (e) => {
		setItemsInCart((prevState) => prevState + 1);

		sizeDispatch({ type: "MEDIUM" });
	};
	return (
		<div className="product">
			<div className="product--details">
				<h3>{props.ShoeName}</h3>
				<h3>{props.description}</h3>
				<h3>{props.price}</h3>
			</div>
			<div className="product--buttons">
				<button onClick={onLargeClick}>
					Buy large ({sizeState.largeCount})
				</button>
				<button onClick={onMediumClick}>
					Buy medium ({sizeState.mediumCount})
				</button>
				<button onClick={onSmallClick}>
					Buy small ({sizeState.smallCount})
				</button>
			</div>
		</div>
	);
};

export default SingleProduct;
