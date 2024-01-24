import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constant";

const Header = () => {
    const [btnEle, setBtnEle] = useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                    <li><Link className="link" to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <li><button className="login" onClick={() => {
                        btnEle === "Login" ? setBtnEle("Logout") : setBtnEle("Login")
                    }}>{btnEle}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;