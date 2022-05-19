import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import classes from '../css/CartItem.module.css'

const CartItem = (props) => {
    const { title, quantity, total, price, id } = props.item;
    const dispatch = useDispatch();

    const removeItemhandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    const addItemhandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
        }));
    };

    return (
        <div className={classes.item}>
            <div className={classes.info}>
                <h2>{title} x {quantity}</h2>
                <h3>Total Price: {total}$ --- ({price}$/item)</h3>
            </div>
            <div className={classes.buttons}>
                <button onClick={removeItemhandler}>-</button>
                <button onClick={addItemhandler}>+</button>
            </div>

        </div>
    )
};

export default CartItem;