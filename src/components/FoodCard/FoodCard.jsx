import React from 'react';

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className='card w-96 bg-base-200 shadow-xl p-4'>
      <figure>
        <img className='rounded-lg' src={image} alt='Shoes' />
      </figure>
      <p className='bg-slate-900 text-white absolute right-0 mt-4 mr-8 p-1 rounded-md'>${price}</p>
      <div className='card-body text-center'>
        <h2 className='card-title flex justify-center font-bold'>{name}</h2>
        <p>{recipe}</p>
        <div className='card-actions justify-center'>
        <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase bg-slate-200 text-yellow-600">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
