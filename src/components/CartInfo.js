import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import classes from '../css/CartInfo.module.css'
import { FaShoppingCart } from "react-icons/fa";


const CartInfo = () => {

    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.cart.totalQuantity);
    const cartTotalPrice = useSelector(state => state.cart.totalPrice);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }

    return (
        <div className={classes.cart_info}>
            <button className={classes.btn} onClick={toggleCartHandler}>
                <FaShoppingCart />
                <span>{cartQuantity}</span>
            </button>
            {/* <p>amount: <span>{cartQuantity}</span></p> */}
            {/* <p>{cartTotalPrice} $</p> */}
        </div>
    )
};

export default CartInfo