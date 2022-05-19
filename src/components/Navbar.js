import React from "react";
import classes from '../css/Navbar.module.css'
import { NavLink } from "react-router-dom";


import CartInfo from "./CartInfo";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.logo}>
                React-Estore
            </div>
            <ul className={classes.navigation}>
                <li>
                    <NavLink activeClassName={classes.active} to='/welcome' >Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active}  to='/products' >Products</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active}  to='/opinions' >Opinions</NavLink>
                </li>
            </ul>
            <CartInfo />
        </div>
    )
};

export default Navbar;