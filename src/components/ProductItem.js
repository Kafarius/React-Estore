import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import classes from '../css/ProductItem.module.css'


const ProductItem = (props) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id: props.id,
            title: props.title,
            price: props.price,
        }));
    };

    return (
        <div className={classes.product}>
            <h3>{props.title}</h3>
            
            <p>{props.price} $</p>
            <p>{props.description}</p>
            <button 
                className={classes.btn} 
                onClick={addToCartHandler}
            >Add to Cart
            </button>
        </div>
    )
    
}

export default ProductItem;