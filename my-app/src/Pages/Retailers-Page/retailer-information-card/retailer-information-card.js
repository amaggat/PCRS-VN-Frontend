import React from 'react';
import StarRating from 'react-star-ratings';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DefaultLogo from '../../../Components/Sources/Icon/default-avatar.png';

const RetailerInformationCard = ({ name, logo, description, rating, link, facebook }) => {
  const Wrapper = styled.div`
    max-width: 400px;
    /* margin: 0px 15px; */
    height: fit-content;
    /* max-height: 375px; */
    align-items: center;
    flex-direction: column;
    background-color: white;
    /* Use M-UI Shadow guidelines */
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
      /* border: 3px solid #E26723; */
      transform: scale(1.02);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
  `;

  const Header = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #191B2B;
    padding: 5px 5px;
  `;

  const RetailerImage = styled.img`
    max-width: 15%;
    max-height: fit-content;
    padding: 2px 2px;
  `;

  const RetailerName = styled.div`
    align-self: center;
    color: white;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `;

  const RetailerLogo = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 10px;
    height: 100px;
    max-width: 100%;
    border-bottom: 1px solid #EAEAEA;
  `;

  const RetailerDescription = styled.div`
    font-weight: 400;
    height: 200px;
    padding: 10px 10px;
    text-align: justify;
    align-self: flex-end;
    border-bottom: 1px solid #EAEAEA;
  `;

  const RetailerRating = styled.div`
    padding: 10px 10px;
    /* bottom: 0; */
    /* padding: 10px 10px; */
    /* border-bottom: 1px solid #EAEAEA; */
  `;

  const RetailerLink = styled.div`
    background-color: #191B2B;
    color: white;
    text-align: center;
    padding: 10px 10px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `;
  const RetailerFacebook = styled.div`
    background-color: #191B2B;
    color: white;
    text-align: center;
    padding: 10px 10px;
    padding-top: 0;

    &:hover {
      cursor: pointer;
      /* text-decoration: underline; */
    }
  `;

  return (
    <Wrapper>
      <Header>
        <RetailerImage src={DefaultLogo} alt="Default logo" />
        <RetailerName>
          {name || 'Hanoi Computer'}
        </RetailerName>
      </Header>
      <RetailerLogo>
        <img src={logo || './logo.png'} alt="Retailer logo" />
      </RetailerLogo>
      <RetailerDescription>
        {description || 'No description provided'}
      </RetailerDescription>
      <RetailerRating>
        Ratings: &nbsp;
        <StarRating
          rating={rating}
          starRatedColor="orange"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="5px"
        />
      </RetailerRating>
      <RetailerLink>
        <i class="fas fa-sign-in-alt" />
        &nbsp;
        <a href={link || ''} target="_blank" style={{ color: 'white' }}>
          Go to website
        </a>
      </RetailerLink>
      <RetailerFacebook>
        <i class="fab fa-facebook" />
        &nbsp;
        <a href={facebook || ''} target="_blank" style={{ color: 'white' }}>
          Facebook
        </a>
      </RetailerFacebook>
    </Wrapper>
  )
}

export default RetailerInformationCard;
