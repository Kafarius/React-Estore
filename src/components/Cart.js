import classes from '../css/Cart.module.css'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);

    return (
      <div className={classes.cart}>
        <h2 className={classes.cart_name}>Your Shopping Cart</h2>
        <ul>
          {
            cartItems.length > 0 
                ?
                    cartItems.map((item) => (
                        <CartItem
                          key={item.id}
                          item={{
                            id: item.id,
                            title: item.name,
                            quantity: item.quantity,
                            total: item.totalPrice,
                            price: item.price,
                        }}
                        />
                    ))
                :
                <h2 className={classes.empty}>Your cart is empty :(</h2>
          }
        </ul>
      </div>
    );
};

export default Cart;