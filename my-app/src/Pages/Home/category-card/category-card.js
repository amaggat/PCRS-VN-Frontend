import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
// No CSS imported, using styled-components instead

const defaultImg = './background.jpg';

const CardWrapper = styled.div`
/* z-index: 9999; */
transition: all 0.3s cubic-bezier(.25, .8, .25, 1);

&:hover {
  transform: scale(1.05)
}

&:active {
  transform: scale(0.95)
}
`;

const CardGradientOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  text-align: center;
  border-radius: 15px;
  /* Background stuff */
  /* Box Shadows */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); 
  background-image: url(${props => props.backgroundImg || defaultImg});
  background-size: cover;
  background-position: ${props => props.backgroundPosition};
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
    background: ${props => props.gradientOverlay};
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
    background: ${props => props.gradientShadow};
    /* Push overlay down in z axis */
    width: inherit;
    height: inherit;
    bottom: 0;
    left: 0;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  }

  &:hover::after {
    transform: translateY(25px) scale(0.9);
    filter: blur(15px);
  }
`;

const CardTitle = styled.div`
position: relative;
z-index: 1;
margin: 0 0;
/* padding: 59px 0; */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: bolder;
font-size: ${props => props.fontSize};
color: white;
`;

const CategoryCard = ({
  title,
  backgroundImg,
  gradientOverlay = '',
  gradientShadow,
  width = '300px',
  height = '150px',
  fontSize = 'x-large',
  backgroundPosition = 'top',
  isCategoryCard = false,
  linkTo = ''
}) => {
  const history = useHistory();

  const handleClick = () => {
    if (isCategoryCard) {
      history.push(linkTo);
    }
  }

  return (
    <CardWrapper onClick={() => handleClick()}>
      <CardGradientOverlay
        width={width}
        height={height}
        backgroundImg={backgroundImg}
        backgroundPosition={backgroundPosition}
        gradientOverlay={gradientOverlay}
        gradientShadow={gradientShadow}
      >
        <CardTitle fontSize={fontSize}>
          {title || ''}
        </CardTitle>
      </CardGradientOverlay>
    </CardWrapper>
  )
}

export default CategoryCard;