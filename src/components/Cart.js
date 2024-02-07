import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import { FoodCard, extendedFoodCard } from './RestaurantMenuDropdown';

const ExtendedFoodCard = extendedFoodCard(FoodCard);

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();

    const ClearAllCartItems = () => {
      dispatch(clearCart());
    }
  return (
    <div className='w-1/2 mx-auto my-4'>
      <div className='text-end'>
        <button className='p-2 bg-black text-white rounded-lg font-semibold' onClick={ClearAllCartItems}>Clear Cart</button>
      </div>
      <div className='my-8'>
        { 
        cartItems?.map((item) => (
          <ExtendedFoodCard key={item.id} info={item} />
        ))}
      </div>
    </div>
  )
}

export default Cart;