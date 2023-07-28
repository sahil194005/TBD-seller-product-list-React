
import './Cart.css'
import { useContext } from 'react'
import { ProductsContext } from '../../Context/ProductsContext'
const CartBtn = (props) => {

    const onClickHandler = () => {
        props.setCart((prevState)=>!prevState)
    }
    const { itemsInCart } = useContext(ProductsContext);
    return <button className="cart-button" onClick={onClickHandler}>Cart({itemsInCart})</button>
}

export default CartBtn