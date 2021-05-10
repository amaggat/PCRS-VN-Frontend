import React from 'react';
import styled from 'styled-components';
// No CSS imported, using styled-components instead

const defaultImg = './background.jpg';

const BuildCategoryCard = ({ title, backgroundImg, gradientOverlay = '', gradientShadow }) => {
  const BuildCardWrapper = styled.div`
    z-index: 9999;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);

    &:hover {
      transform: scale(1.05)
    }

    &:active {
      transform: scale(0.95)
    }
  `;

  const BuildCardGradientOverlay = styled.div`
    position: relative;
    width: 300px;
    height: 150px;
    text-align: center;
    border-radius: 15px;
    /* Background stuff */
    /* Box Shadows */
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); 
    background-image: url(${backgroundImg || defaultImg});
    background-size: cover;
    cursor: pointer;

    /* Gradient opacity background */
    &:before {
      /* padding: 30px 0px; */
      position: absolute;
      /* z-index: 1; */
      content: '';
      width: inherit;
      height: inherit;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      background: ${gradientOverlay};
      /* background: rgb(255, 84, 255);
       background: linear-gradient(90deg, rgba(255, 84, 255, 0.5) 0%, rgba(141, 1, 255, 0.5) 50%, rgba(15, 221, 255, 0.5) 100%);
       color: white;
       transition: all 0.3s cubic-bezier(.25,.8,.25,1); */
    }

    /* Gradient shadow */
    &:after {
      position: absolute;
      z-index: -1;
      content: '';
      border-radius: inherit;
      /* Same background but with opacity set to 1 */
      background: ${gradientShadow};
      /* Push overlay down in z axis */
      width: inherit;
      height: inherit;
      bottom: 0;
      left: 0;
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    }

    &:hover::after {
      transform: translateY(20px) scale(0.9);
      filter: blur(20px);
    }
  `;

  const BuildCardTitle = styled.div`
    position: relative;
    z-index: 1;
    margin: 0 0;
    padding: 59px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bolder;
    font-size: x-large;
    color: white;
  `;

  return (
    <BuildCardWrapper>
      <BuildCardGradientOverlay>
        <BuildCardTitle>
          {title || 'Placebo title'}
        </BuildCardTitle>
      </BuildCardGradientOverlay>
    </BuildCardWrapper>
    //   <div class="build-card-gradient-overlay">
    //     <div class="build-card-title"></div>
    //   </div>
    // </div >
  )
}

export default BuildCategoryCard;