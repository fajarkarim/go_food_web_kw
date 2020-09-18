import React, { useState, useEffect } from 'react';
import Restaurant from "../Restaurant/Restaurant";
import RestaurantsService from "../../services/RestaurantsService";
import ActionButton from "../ActionButton/ActionButton";
import './Restaurants.css';
import Loading from "../Loading/Loading";

const SearchRestaurants = () => {
  const [restaurants, setRestaurants] =  useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(false);

  const getRestaurants = async () => {
    try {
      setLoading(true);
      let zomatoRestaurants = await RestaurantsService.fetchRestaurants({ q: search });
      setLoading(false);
      setRestaurants(zomatoRestaurants);
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    getRestaurants()
  }, []);

  const handleOnSearch = () => {
    getRestaurants();
  };

  const handleOnSearchChange = (event) => {
    const { target: { value }} = event;
    setSearch(value);
  };

  const handleOnEnter = (event) => {
    const { key } = event;
    if (key === 'Enter') {
      getRestaurants();
    }
  };

  const renderRestaurants = () => {
    return (<div className={'pt-1 pb-1'}>
      <div className={'restaurant-wrapper'}>
        {
          restaurants.map((restaurant) => {
            return <Restaurant key={restaurant.id} restaurant={restaurant}/>
          })
        }
      </div>
    </div>)
  };

  return (
      <>
        <div className={'pt-1 pb-1'}>
          <div className={'flex justify-center height-32'}>
            <input
                className={'search-input mr-xs'}
                type="text"
                placeholder={'Search Restaurant'}
                onChange={handleOnSearchChange}
                value={search}
                onKeyDown={handleOnEnter}
                data-testid='search-input'/>

            <ActionButton label={'Search'} onClick={handleOnSearch}/>
          </div>
        </div>

        {isLoading ? <Loading/> : renderRestaurants()}
      </>
  )
};

export default SearchRestaurants;