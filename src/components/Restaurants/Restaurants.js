import React from 'react';
import './Restaurants.css';
import Restaurant from "../Restaurant/Restaurant";

const Restaurants = () => {
  return (
      <div className={'pt-1 pb-1'}>
        <div className={'restaurant-wrapper'}>
          <Restaurant/>
          <Restaurant/>
          <Restaurant/>
          <Restaurant/>
        </div>
      </div>
  )
};

export default Restaurants;