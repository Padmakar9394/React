import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";


import RestuarntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("render happens!");

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1485289&lng=77.3191471&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        const realData = data?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(data);
        setListOfRestaurants(realData);
        setFilteredList(realData);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    // Conditional Rendering
    if(listOfRestaurants.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className="body-top">
                <div className="search">
                    <input className="search-box" type="text" value={searchText} onChange={(e) => (setSearchText(e.target.value))}/>
                    <button className="search-btn" 
                            onClick={() => { 
                                const filteredRestaurants = listOfRestaurants.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            });

                            setFilteredList(filteredRestaurants);}}
                    >Search</button>
                </div>
                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        let newfilteredList = listOfRestaurants.filter((res) => {
                            return res.info.avgRating > 4;
                    })
                        setFilteredList(newfilteredList);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container">
                { 
                    filteredList.map((res) => (
                        // console.log(res);
                        <Link className="link new" key={res.info.id} to={"/restaurant/" + res.info.id}><RestuarntCard details={res} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;