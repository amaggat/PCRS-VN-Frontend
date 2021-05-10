import React from 'react';
import { Button } from 'react-bootstrap';
import './suggestion-card.css';

const ProductSuggestionCard = ({ name, img = '', seller, price, rating = 5.0, }) => {

  //TODO: Save seller-image to local
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <img className="seller-image" src="https://pcpartpicker.com/static/img/default-avatar.png" alt="" />
        <div className="seller-name">{seller}</div>
      </div>
      <img className="card-product-image" src={img} alt="" />
      <div className="card-title">
        {name}
      </div>
      <div className="card-price">
        {price}
      </div>
      <div className="card-buttons">
        <Button color="primary">Add to build</Button>
        <Button color="primary">Go to product</Button>
      </div>
    </div>
  );
}

export default ProductSuggestionCard;

