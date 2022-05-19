import classes from '../css/Welcome.module.css';
import reduxt_logo from '../imgs/redux_logo.png';
import react_logo from '../imgs/react_logo.png';
import reactrouter_logo from '../imgs/reactrouter_logo.png';


const Welcome = () => {

    return(
        <div className={classes.welcome}>
            <h2>Welcome to my React e-store app!</h2>
            <p>
                I made this application to present my React skills ;)<br></br><br></br>
                Home tab - presents technologies I used to write this application and contains some information.<br></br>
                Products tab - shows products avaliable to purchase in the store, and allows to put them into the shoping cart.<br></br>
                Opinions tab - displays opinions about store and products.<br></br>
                Cart's state is stored in Google's realtime database - Firebase.


            </p>
            <p><i>Technologies i used:</i></p>
            <ul className={classes.list}>
                <li className={classes.tech}>
                    <img src={react_logo} alt={'react-logo'} />    
                    <h3>React</h3>
                    <p>
                        useEffect,<br></br>
                        Fragment,<br></br>
                        module.css,<br></br>
                    </p>
                </li>
                <li className={classes.tech}>
                    <img src={reduxt_logo} alt={'redux-logo'} />
                    <h3>Redux(Redux-Toolkit)</h3>
                    <p>
                        useDispatch, useSelector,<br></br>
                        createSlice, createStore,<br></br>
                        Action Creator Thunk,<br></br>
                        Fetching Data,<br></br>

                    </p>
                </li>
                <li className={classes.tech}>
                    <img className={classes.wider} src={reactrouter_logo} alt={'react-router-logo'} />
                    <h3>React-Router(@5)</h3>
                    <p>
                        Route, Switch, Redirect,<br></br>
                        BrowserRouter<br></br>
                        NavLink,<br></br>

                    </p>
                </li>
            </ul>
            <div className={classes.list}>
                <p className={classes.note}>
                    I created this application to present my skills in React developing - for job interview.<br></br>
                    It has no use for commercial purposes.
                </p>

            </div>
        </div>
    )
};

export default Welcome;