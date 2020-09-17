import React, { useState, useEffect } from 'react';
import Restaurant from "../Restaurant/Restaurant";
import RestaurantsService from "../../services/RestaurantsService";
import ActionButton from "../ActionButton/ActionButton";
import './Restaurants.css';

const Restaurants = () => {
  const [restaurants, setRestaurants] =  useState([]);
  const [search, setSearch] = useState('');

  useEffect( () => {
    // fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    let zomatoRestaurants = await RestaurantsService.fetchRestaurants({ q: search });
    setRestaurants(zomatoRestaurants);
  };

  const handleOnSearch = () => {
    debugger
    fetchRestaurants();
  };

  const handleOnSearchChange = (event) => {
    const { target: { value }} = event;
    setSearch(value);
  };

  const handleOnEnter = (event) => {
    const { key } = event;
    if (key === 'Enter') {
      fetchRestaurants();
    }
  };

  return (
      <>
        <div className={'pt-1 pb-1'}>
          <div className={'flex justify-center height-32'}>
            <input className={'search-input mr-xs'} type="text" placeholder={'Search'
            + ' Restaurant'} onChange={handleOnSearchChange} value={search} onKeyDown={handleOnEnter}/>

            <ActionButton label={'Search'} onClick={handleOnSearch}/>
          </div>
        </div>

        <div className={'pt-1 pb-1'}>
          <div className={'restaurant-wrapper'}>
            {
              restaurants.map((restaurant, index) => {
                return <Restaurant key={index} restaurant={restaurant}/>
              })
            }
          </div>
        </div>
      </>
  )
};

export default Restaurants;