import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { CDN_URL } from '../utils/constant';
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { LiaVimeoSquare } from "react-icons/lia";

const FoodCard = ({info}) => {
  // console.log(info);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className='w-4/6' >
          <h3 className='my-2'>{info?.isVeg ? 
              <LiaVimeoSquare className="veg" /> : 
              <FaRegSquareCaretUp className="non-veg" />}
          </h3>
          <h1 className="font-mono text-md font-bold">{info?.name}</h1>
          <h3 className="font-mono text-md font-semibold"> ₹{ info.price ? info?.price / 100 : info?.defaultPrice / 100}</h3>
          <p className="text-gray-500 text-xs my-2">{info?.description}</p>
        </div>
        <div className='w-1/6'>
          <img className="w-full rounded-md shadow-xl" src={CDN_URL + info.imageId} />
        </div>
      </div>
      <hr className="my-4" />
    </div>
  )
}

const RestaurantMenuDropdown = ({data, showDetails, setActiveDropDown}) => {
    const handleClick = () => {
      setActiveDropDown();
    }
  return (
    <div>
        {/* Header */}
        <div className="cursor-pointer flex justify-between items-center bg-gray-100 shadow-lg my-4 p-4" onClick={handleClick}>
            <h1 className='font-bold font-mono text-xl'>
              {data.title} ({data.itemCards.length})
            </h1>
            {showDetails ? 
              <FaChevronDown /> :
              <FaChevronUp />}
        </div>
        {/* Body */}
        {
          showDetails && data?.itemCards.map((item) => (
            <FoodCard key={item?.card?.info?.name} info={item?.card?.info} />
        )
        )}
      </div>
  )
}
export default RestaurantMenuDropdown;