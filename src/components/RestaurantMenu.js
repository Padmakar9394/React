import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { FaHourglassHalf } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { LiaVimeoSquare } from "react-icons/lia";

import Shimmer from "./Shimmer";
import "../css/RestaurantMenu.css";
import { CDN_URL } from "../utils/constant";

const RecommendedCard = ({item}) => {
    // console.log(item.card.info);
    return (
        <>
            <div className="recommended-card">
                <div className="recommended-card-details">
                    <h3>{item.card.info?.isVeg ? <LiaVimeoSquare className="veg" /> : <FaRegSquareCaretUp className="non-veg" />}</h3>
                    <h2 className="title">{item.card.info.name}</h2>
                    <h4 className="price">₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h4>
                    <h6 className="desc">{item.card.info.description}</h6>
                </div>
                <div className="recommended-card-image">
                    <img src={CDN_URL + item.card.info.imageId} alt={item.title} />
                </div>
            </div>
            <p className="continuous"></p>  
        </>
    )
}


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [vegRes, setVegRes] = useState([]);
    const { resID } = useParams();
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1485289&lng=77.3191471&restaurantId=${resID}`);
        const data = await response.json();
        console.log(data);
        setResInfo(data?.data);
    }

    if(resInfo === null) return <Shimmer /> ;

    // console.log(resInfo);
    const {name, cuisines, areaName, totalRatingsString, costForTwoMessage, avgRating} = resInfo?.cards[0]?.card?.card?.info;
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
                    <span>{resInfo?.cards[0]?.card?.card?.info.sla.deliveryTime}   MINS</span>
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
            <div className="recommended-container">
                <h3 className="recommended-container-title">Recommended {"(" + resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.length + ")"}</h3>
                <ul className="list">
                    {
                        resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((res, index) => (
                            <li key={index}><RecommendedCard item={res} /></li>
                        ))
                    }</ul>
                
            </div>
        </div>
    )
};

export default RestaurantMenu;