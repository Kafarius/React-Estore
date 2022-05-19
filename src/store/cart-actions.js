import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
              "https://justread-ff42e-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
            );

            if (!response.ok) {
                throw new Error('Fetching data failed!');
            }

            const data = await response.json();
            
            return data;
        };

        try {
            const cartData = await fetchData();
            if (!cartData.items) {
                cartData.items = [];
            }
            dispatch(cartActions.replaceCart(cartData));
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Fetching cart data failed!",
                })
            )
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
              status: 'pending',
              title: 'Sending...',
              message: 'Sending cart data!',
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://justread-ff42e-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
            method: 'PUT', 
            body: JSON.stringify(cart),
            });
        
            if (!response.ok) {
                throw new Error('Sending cart data failed!');
            }
        };

        const hideNotifi = (time) => {
            setTimeout(() => {
                dispatch(uiActions.hideNotification());
            }, time);
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                  status: "success",
                  title: "Success!",
                  message: "Data cart was sent successfully!",
                })
            );
            hideNotifi(1500);
            
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Sending cart data failed!",
                })
              )
            };
            hideNotifi(1500);
    };
};