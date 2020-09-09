import React from 'react';
import Card from "../Card/Card";
import './Restaurants.css';

const Restaurants = () => {
  return (
      <div className={'mr-med ml-med'}>
        <div className={'restaurant-wrapper'}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
  )
};

export default Restaurants;