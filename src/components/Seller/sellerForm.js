import "./SellerForm.css";
import { useRef, useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
const SellerForm = (props) => {
	const shoeName = useRef(null);
	const description = useRef(null);
	const price = useRef(null);
	const small = useRef(null);
	const medium = useRef(null);
	const large = useRef(null);

	const { Dispatch } = useContext(ProductsContext);
	const formSubmitHandler = (e) => {
		e.preventDefault();
		let obj = {
			ShoeName: shoeName.current.value,
			description: description.current.value,
			price: price.current.value,
			small: small.current.value,
			medium: medium.current.value,
			large: large.current.value,
			id: Math.random(),
		};
		Dispatch({ type: "ADD_PROD_2_LIST", product: obj });
	};
	return (
		<form
			className="sellerForm"
			onSubmit={formSubmitHandler}>
			<div className="seller-form--input__div">
				<label>Shoe Name</label>
				<input type="text" ref={shoeName}></input>
			</div>
			<div className="seller-form--input__div">
				<label>Description</label>
				<input type="text" ref={description}></input>
			</div>
			<div className="seller-form--input__div">
				<label>Price</label>
				<input type="number" ref={price}></input>
			</div>
			<div className="seller-form--input--size-div">
				<div className="seller-form--input--size-indi-div">
					<label>L</label>
					<input type="number" ref={large}></input>
				</div>
				<div className="seller-form--input--size-indi-div">
					<label>M</label>
					<input type="number" ref={medium}></input>
				</div>
				<div className="seller-form--input--size-indi-div">
					<label>S</label>
					<input type="number" ref={small}></input>
				</div>
			</div>
			<div>
				<button>Add Product</button>
			</div>
		</form>
	);
};
export default SellerForm;
