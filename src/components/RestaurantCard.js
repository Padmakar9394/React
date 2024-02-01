import React from "react";


import { CDN_URL } from "../utils/constant";

const RestuarntCard = ({details}) => {
    console.log(details);
    const url = CDN_URL + details.info.cloudinaryImageId;
    return (
        <div className="hover:bg-gray-50 hover:shadow-xl rounded-lg p-4 m-2">
            <img className="rounded-lg w-full h-64 object-cover" alt="res-img" src={url} />
            <div className="">
                <h2 className="font-bold">{details.info.name}</h2>
                <div className="flex items-center my-1">
                    <h3>⭐{details.info.avgRating}</h3>
                    <span className="bg-black w-2 h-2 rounded-full ml-2 mr-1"></span>
                    <h3>{details.info.sla.deliveryTime}minutes</h3>
                </div>
                <p className="text-gray-400">{details.info.cuisines.join(", ")}</p>
                <p className="text-gray-400">{details.info.locality}</p>
            </div>
        </div>
    )
}

export const withPromotionLabel = (RecommendedCard) => {
    return (props) => {
        return (
            <div>
                <label>Promotion</label>
                <RestuarntCard {...props}/>
            </div>
        )
    }
};

export default RestuarntCard;