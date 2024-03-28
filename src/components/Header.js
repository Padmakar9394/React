import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const data = useContext(UserContext);
    const {loggedInUser} = data;

    const [btnEle, setBtnEle] = useState("Login");
    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="flex justify-between items-center bg-pink-200 px-24">
            <div className="w-36">
                <img className="w-full object-cover" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex items-center">
                    <li className="px-2 font-bold">
                        <Link className="link" to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-2 font-bold">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="px-2 font-bold">
                        <Link className="link" to="/about">About</Link>
                    </li>
                    <li className="px-2 font-bold">
                        <Link className="link" to="/contact">Contact</Link>
                    </li>
                    <li className="px-2 font-bold">
                        <Link to="/cart">Cart({cartItems?.length} items)</Link>
                    </li>
                    <li className="px-2">
                        <button className="bg-green-200 px-4 py-2 font-bold rounded-md" onClick={() => {
                            btnEle === "Login" ? setBtnEle("Logout") : setBtnEle("Login")
                        }}>{btnEle}
                    </button>
                    </li>
                    <li className="px-2 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;