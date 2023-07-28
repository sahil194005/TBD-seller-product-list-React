import ReactModal from "react-modal";
ReactModal.setAppElement('#root')
const Cart = (props) => {
	const customStyles = {
		content: {
			top: "20%",
			left: "20%",
			right: "20%",
			bottom: "20%",
		},
    };
    
	return (
		<ReactModal
			isOpen={props.isCart}
			onRequestClose={() => {
				props.setCart(false);
			}}
            style={customStyles}>
            <h1 style={{ textAlign: "center" }}>Cart</h1>
            
		</ReactModal>
	);
};

export default Cart;
