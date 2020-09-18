class RestaurantsService {
  static async fetchRestaurants(query) {
    const ZOMATO_URL = 'https://developers.zomato.com/api/v2.1/search?';
    let urlSearchParams = new URLSearchParams(query);
    const options = {
      cache: 'force-cache',
      headers: {
        'Content-Type' : 'application/json',
        'user-key': '58fa86e5185c9ad350e44ff6fd2412dd'
      }
    };
    let response = await fetch(ZOMATO_URL + urlSearchParams, options);
    let { restaurants } = await response.json();

    let mappedResponse = restaurants.map(restaurantData => {
      const { restaurant: { id, name, thumb, user_rating, cuisines} } = restaurantData;
      const defaultThumbnail = 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/8333bc70-4ed3-4b12-92ee-2ab59d57247b_restaurant-image_1596583458965.jpg?h=445&w=534&fit=crop&auto=compress';
      const wrappedMenus = cuisines.length > 15 ? cuisines.substring(0,15) + '...' : cuisines;
      const thumbnail = thumb.length < 1 ? defaultThumbnail : thumb;

    return {
      id: id,
      name: name,
      thumbnail: thumbnail,
      rating: user_rating.aggregate_rating.toString(),
      menus: wrappedMenus
    }
  });

    return mappedResponse;
  }
}

export default RestaurantsService;