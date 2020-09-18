import React from 'react'
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SearchRestaurants from "./SearchRestaurants";
import RestaurantsService from "../../services/RestaurantsService";

describe('SearchRestaurants', () => {

  describe('#render', () => {
    it('should render Search button and Input Search successfully',
        async () => {
          render(<SearchRestaurants/>);

          expect(screen.getByText('Search')).toBeInTheDocument();
          expect(screen.getByTestId('search-input')).toBeInTheDocument();
        });
  });

  describe('#handleOnSearch', () => {
    it('should call fetchRestaurants with expected query when search input'
        + ' filled with query & search button clicked', () => {
      render(<SearchRestaurants/>);
      const searchQuery = 'Bandar Jakarta';
      const fetchRestaurantsSpy = jest.spyOn(RestaurantsService,
          'fetchRestaurants');

      _simulateSearch(searchQuery);

      expect(fetchRestaurantsSpy).toHaveBeenCalledTimes(1);
      expect(fetchRestaurantsSpy).toHaveBeenCalledWith({q: searchQuery})
    });

    it(`should render 2 restaurant's cards when get response from Zomato API call`,
        async () => {
          render(<SearchRestaurants/>);
          const searchQuery = 'Pangsit Goreng Le gino';
          const firstRestaurantName = 'pangsit pak le gino';
          const secondRestaurantName = 'pangsit bu le gino2';
          const restaurantsResponse = [
            {
              id: '1',
              name: firstRestaurantName,
              thumbnail: '',
              rating: '',
              menus: ''
            },
            {
              id: '2',
              name: secondRestaurantName,
              thumbnail: '',
              rating: '',
              menus: ''
            }
          ];
          _mockFetchResturants(restaurantsResponse);

          _simulateSearch(searchQuery);
          await waitForElementToBeRemoved(() => screen.getByTestId('loading'))

          const firstRestaurantCardComponent = screen.getByTestId(
              `restaurant-${firstRestaurantName}`);
          const secondRestaurantCardComponent = screen.getByTestId(
              `restaurant-${secondRestaurantName}`);
          expect(firstRestaurantCardComponent).toBeInTheDocument();
          expect(secondRestaurantCardComponent).toBeInTheDocument();

        });
  });

  function _simulateSearch(inputText) {
    const searchButtonComponent = screen.getByText('Search');
    const searchInputComponent = screen.getByTestId('search-input');

    fireEvent.input(searchInputComponent, {target: {value: inputText}});
    fireEvent.click(searchButtonComponent);
  }

  function _mockFetchResturants(expectedResponse = []) {
    jest
    .spyOn(RestaurantsService, 'fetchRestaurants')
    .mockImplementationOnce(() => Promise.resolve(expectedResponse));
  }
});
