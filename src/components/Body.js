import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";


import RestuarntCard, { withPromotionLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const EnhancedComponent = withPromotionLabel(RestuarntCard);

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    // console.log("render happens!");

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        const realData = data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(data);
        setListOfRestaurants(realData);
        setFilteredList(realData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you are offline! Please check your internet connection</h1>
    
    // Conditional Rendering
    if(listOfRestaurants?.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="mx-24">
            <div className="flex my-8">
                <div className="">
                    <input 
                        className="outline-none bg-gray-200 py-2 px-4 font-mono" 
                        placeholder="Search for food and restaurant" 
                        type="text" value={searchText} 
                        data-testid="searchInput"
                        onChange={(e) => (setSearchText(e.target.value))}
                    />
                    <button className="mx-2 bg-green-200 px-4 py-2 font-bold rounded-md" 
                            onClick={() => { 
                                const filteredRestaurants = listOfRestaurants.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            });

                            setFilteredList(filteredRestaurants);}}
                    >Search</button>
                </div>
                <div className="mx-2">
                    <button className="bg-green-200 px-4 py-2 font-bold rounded-md" onClick={() => {
                        let newfilteredList = listOfRestaurants.filter((res) => {
                            return res.info.avgRating > 4;
                    })
                        setFilteredList(newfilteredList);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap w-full my-8">
                { 
                    filteredList?.map((res) => (
                        // console.log(res);
                        <Link className="w-1/3" key={res.info.id} to={"/restaurant/" + res.info.id}>
                            {res.info.promoted ? <EnhancedComponent details={res} /> : <RestuarntCard  details={res} /> }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;