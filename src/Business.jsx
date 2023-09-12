import React from "react";

   const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
    
};

function Business() {
 
    return (
      <div><div></div></div>
      
      <div></div>
      <div></div>
      <div></div>
     <img src={business.image} />
     <p>{business.name}</p>
     <p>{business.address}</p>
     <p>{business.city}</p>
     <p>{business.State}</p>
     <p>{business.Zipcode}</p>
     <p>{business.Category}</p>
     <p>{business.Rating}</p>
     <p>{business.ReviewCount}</p>
      
    )
  }

  export default Business;