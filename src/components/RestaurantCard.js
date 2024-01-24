import React from "react";


import { CDN_URL } from "../utils/constant";

const RestuarntCard = ({details}) => {
    // console.log(details);
    const url = CDN_URL + details.info.cloudinaryImageId;
    return (
        <div className="res-card">
            <img alt="res-img" src={url} />
            <div className="res-desc">
                <h2>{details.info.name}</h2>
                <p>{details.info.cuisines}</p>
                <h3>{details.info.avgRating}⭐</h3>
                <h3>{details.info.sla.deliveryTime}minutes</h3>
                <p>{details.info.locality}</p>
            </div>
        </div>
    )
}

export default RestuarntCard;