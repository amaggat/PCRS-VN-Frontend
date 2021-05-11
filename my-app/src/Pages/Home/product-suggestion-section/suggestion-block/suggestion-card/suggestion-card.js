import { lightpink } from 'color-name';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './suggestion-card.css';

const ProductSuggestionCard = ({ name, img = '', seller, price, rating = 5.0, link }) => {

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
      <div className="card-button">
        <Link to={link} style={{textDecoration: 'none', color: 'white'}}>
          Go to product
        </Link>
      </div>
    </div>
  );
}

export default ProductSuggestionCard;

