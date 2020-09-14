import React from 'react';
import Card from "../Card/Card";
import './Restaurant.css'

const Restaurant = () => {
  return (
      <Card>
        <div className={'one-hundred-percent-height'}>
          <div className={'restaurant-card-img-wrapper'}>
            <img src={'https://via.placeholder.com/300'} alt={'food'}/>
          </div>
          <div className={'restaurant-card-info-wrapper'}>
            <h3 className={'m-0 font-small'}>Nasi Kulit Gokskin, kacangan</h3>
            <div className={'flex mt-small mb-small align-items-center'}>
              <div className={'width-75'}>
                <div>
                  <span className={'font-small'}>Aneka nasi, Ayam & bebek</span>
                </div>
              </div>
              <div className={'width-25'}>
                <img className={'width-75'} src={'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/7cf36875-baaa-44b4-8254-7d03d725ae56.png'} alt={'start rating'}/>
              </div>
            </div>
            <div className={'flex align-items-center'}>
              <img
                  className={'height-m'}
                  src="https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/list-rating-star-icon.png"
                  alt="rating"/>
              <span className={'font-bold ml-small mr-small'}>4.7</span>
            </div>
          </div>
        </div>
      </Card>
  )
};

export default Restaurant;