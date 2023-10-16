import "whatwg-fetch"; // Import fetch polyfill
require("dotenv").config();

const API_KEY = process.env.SECRET_KEY;

const corsProxy = "https://cors-anywhere.herokuapp.com/";
const baseURL = "https://api.yelp.com/v3/businesses/search";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `${corsProxy}${baseURL}?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};

export default Yelp;
