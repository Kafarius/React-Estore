import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Products from './components/Products';
import Notification from './components/Notification';
import { fetchCartData ,sendCartData } from './store/cart-actions';
import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './components/Welcome'
import Opinions from './components/Opinions'


let initial = true;

function App() {

  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);


  useEffect (()=>{
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect (()=> {
    if (initial) {
      initial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);


 

  


  return (
    <div className="App">
      <Fragment>
        <Navbar />
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        {showCart && <Cart />}
        <Switch>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/opinions'>
            <Opinions />
          </Route>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
        </Switch>
      </Fragment>
    </div>
  );
}

export default App;
