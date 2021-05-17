import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import formatMoney from '../../../../../Components/Page/CurrencyFormat';
import './suggestion-card.css';

const ProductSuggestionCard = ({ name, img = '', price, rating = 5.0, link }) => {

  const Wrapper = styled.div`
    width: 250px;
    margin: 0px 15px;
    height: fit-content;
    align-items: center;
    flex-direction: column;
    background-color: white;
    /* Use M-UI Shadow guidelines */
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  `;

  const ProductImageWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;

  const CardProductImage = styled.img`
    height: 200px;
    object-fit: cover;
    max-width: 100%;
    border-bottom: 1px solid #EAEAEA;
    /* max-height: 100%; */
  `;

  const CardTitle = styled.div`
    font-size: x-large;
    font-weight: bolder;
    align-self: flex-end;
    padding: 10px 10px 5px 10px;
    height: 110px;
    word-wrap: normal;
    white-space: normal;
  `;

  const CardPrice = styled.div`
    padding: 5px 10px 10px 10px;
    border-bottom: 1px solid #EAEAEA;
  `;

  const CardButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #191B2B;
    color: white;
    padding: 5px 5px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  `;

  const handleScrollToTop = () => {
    window.scroll(0, 0)
  }

  //TODO: Save seller-image to local
  return (
    <Wrapper>
      <ProductImageWrapper>
        <CardProductImage src={img} alt="product image" />
      </ProductImageWrapper>
      <CardTitle>
        {name}
      </CardTitle>
      <CardPrice>
        {`Price: ${formatMoney(price)} VND`}
      </CardPrice>
      <CardButton>
        <Link to={link} style={{ textDecoration: 'none', color: 'white' }} onClick={() => handleScrollToTop()}>
        <i class="fas fa-external-link-alt" /> &nbsp; Go to product
        </Link>
      </CardButton>
    </Wrapper>
  );
}

export default ProductSuggestionCard;

