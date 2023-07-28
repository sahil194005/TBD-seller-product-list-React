import "./SellerForm.css";
const SellerForm = (props) => {
	return (
		<form className="sellerForm">
			<div className="seller-form--input__div">
				<label>Shoe Name</label>
				<input type="text"></input>
			</div>
			<div className="seller-form--input__div">
				<label>Description</label>
				<input type="text"></input>
			</div>
			<div className="seller-form--input__div">
				<label>Price</label>
				<input type="number"></input>
			</div>
			<div className="seller-form--input--size-div">
				<div>
					<label>L</label>
					<input type="number"></input>
				</div>
				<div>
					<label>M</label>
					<input type="number"></input>
				</div>
				<div>
					<label>S</label>
					<input type="number"></input>
				</div>
			</div>
			<div>
				<button>Add Product</button>
			</div>
		</form>
	);
};
export default SellerForm;
