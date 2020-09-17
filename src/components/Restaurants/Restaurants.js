import React, { useState, useEffect } from 'react';
import './Restaurants.css';
import Restaurant from "../Restaurant/Restaurant";
import RestaurantsService from "../../services/RestaurantsService";

const Restaurants = () => {
  const [restaurants, setRestaurants] =  useState([]);

  useEffect( () => {
    const fetchRestaurants = async () => {
      let zomatoRestaurants = await RestaurantsService.fetchRestaurants({ q: 'Jakarta' });
      setRestaurants(zomatoRestaurants);
    };
    fetchRestaurants();
  }, []);

  return (
      <div className={'pt-1 pb-1'}>
        <div className={'restaurant-wrapper'}>
          {
            restaurants.map(restaurant => {
              return <Restaurant restaurant={restaurant}/>
            })
          }
        </div>
      </div>
  )
};

export default Restaurants;