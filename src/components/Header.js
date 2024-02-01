import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constant";

const Header = () => {
    const [btnEle, setBtnEle] = useState("Login");
    return(
        <div className="flex justify-between items-center bg-pink-200 px-24">
            <div className="w-36">
                <img className="w-full object-cover" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex items-center">
                    <li className="px-2 font-bold"><Link className="link" to="/grocery">Grocery</Link></li>
                    <li className="px-2 font-bold"><Link className="link" to="/">Home</Link></li>
                    <li className="px-2 font-bold"><Link className="link" to="/about">About</Link></li>
                    <li className="px-2 font-bold"><Link className="link" to="/contact">Contact</Link></li>
                    <li className="px-2 font-bold">Cart</li>
                    <li className="px-2">
                        <button className="bg-green-200 px-4 py-2 font-bold rounded-md" onClick={() => {
                            btnEle === "Login" ? setBtnEle("Logout") : setBtnEle("Login")
                        }}>{btnEle}
                    </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;