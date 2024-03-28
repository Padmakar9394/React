import React, { useState } from "react";
import { useParams } from "react-router-dom"; 
import { FaHourglassHalf } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";


import Shimmer from "./Shimmer";
import "../css/RestaurantMenu.css";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuDropdown from "./RestaurantMenuDropdown";

const RestaurantMenu = () => {
    const [vegRes, setVegRes] = useState([]);
    const { resID } = useParams();

    const resInfo = useRestaurantMenu(resID);
    console.log(resInfo);
    const [activeIdx, setActiveIdx] = useState(1);

    if(resInfo === null) return <Shimmer /> ;
    const {name, cuisines, areaName, totalRatingsString, costForTwoMessage, avgRating} = resInfo?.cards[0]?.card?.card?.info;

    // console.log(resInfo?.cards[0]?.card?.card?.info);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return (
        <div className="menu">
            <div className="menu-header">
                <div>
                    <h3 className="menu-title">{name}</h3>
                    <h4 className="menu-cuisines">{cuisines.join(",")}</h4>
                    <h5 className="menu-area">{areaName}</h5>
                </div>
                <div className="menu-rating-container">
                    <h5 className="menu-rating">⭐{avgRating}</h5>
                    <h5 className="menu-rating-cnt">{totalRatingsString}</h5>
                </div>
            </div>
            <p className="dashed"></p>
            <div className="menu-details">
                <div className="menu-div">
                    <span className="delivery-icon"><FaHourglassHalf /></span>
                    <span>{resInfo?.cards[0]?.card?.card?.info?.sla?.deliveryTime ? resInfo?.cards[0]?.card?.card?.info?.sla?.deliveryTime : 30}   MINS</span>
                </div>
                <div className="menu-div">
                    <span className="rupee-icon"><HiOutlineCurrencyRupee /></span>
                    <span>{costForTwoMessage}</span>
                </div>
            </div>
            <p className="dashed"></p>
            <div className="toggle">
                <button className="veg-filter" onClick={() => {

                }}>Filter Veg</button>
            </div>
            <div>
                {
                    categories.map((c, index) => (
                        <RestaurantMenuDropdown 
                            key={c.card?.card?.title} 
                            data={c.card?.card}
                            showDetails={index === activeIdx ? true : false}
                            setActiveDropDown={() => setActiveIdx(index)}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default RestaurantMenu;