import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { CDN_URL } from '../utils/constant';
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { LiaVimeoSquare } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";

import { useDispatch } from 'react-redux'; 
import { addItem, removeItem } from "../utils/cartSlice";

export const FoodCard = ({info}) => {
  // console.log(info);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
      dispatch(addItem(item));
  }
  return (
    <div>
          <div className="flex justify-between items-center">
            <div className='w-4/6' >
              <h3 className='my-2'>{info?.isVeg ? 
                  <LiaVimeoSquare className="veg" /> : 
                  <FaRegSquareCaretUp className="non-veg" />}
              </h3>
              <h1 className="font-mono text-md font-bold">{info?.name}</h1>
              <h3 className="font-mono text-md font-semibold"> ₹{info?.price ? (info?.price / 100).toFixed() : info?.defaultPrice / 100}</h3>
              <p className="text-gray-500 text-xs my-2">{info?.description}</p>
            </div>
            <div className='relative w-1/6 my-2'>
              <img className="rounded-md shadow-xl" src={CDN_URL + info?.imageId} />
              <button  onClick={() => handleAddItem(info)} className='absolute top-0 bg-black text-white rounded-md p-2 left-7 font-bold'>Add+</button>
            </div>
            
          </div>
          <hr className="my-4" />
    </div>
  )
}

export const extendedFoodCard = (FoodCard) => {
  return (props) => {
    const dispatch = useDispatch();
    const clearItem = (item) => {
      dispatch(removeItem(item));
    }
    return (
      <div className='relative bg-gray-100 shadow-lg px-2 pt-8'>
        <div onClick={() => clearItem(props)} className='z-50 absolute right-1 top-1 bg-black text-white rounded-full' >
          <IoCloseOutline  className="text-2xl" />
        </div>
        <FoodCard {...props}/>
      </div>
    )
  }
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
              {data.title} ({data?.itemCards.length})
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