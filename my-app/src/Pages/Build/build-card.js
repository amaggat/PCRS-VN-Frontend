import React from 'react';
import styled from 'styled-components';

import CPUIcon from '../../Components/Sources/Icon/cpu-icon.svg';
import GPUIcon from '../../Components/Sources/Icon/gpu-icon.png';
import MainboardIcon from '../../Components/Sources/Icon/mainboard-icon.png';
import PSUIcon from '../../Components/Sources/Icon/psu-icon.png';
import RAMIcon from '../../Components/Sources/Icon/ram-icon.jpg';
import StorageIcon from '../../Components/Sources/Icon/storage-icon.png';

const BuildCard = ({ maxWidth = '300px', name, image, pcProfile, price, style = {} }) => {
  const Wrapper = styled.div`
    max-width: ${maxWidth};
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
    justify-content: center;
    font-size: larger;
    background-color: #191B2B;
    padding: 15px 15px;
  `;

  const DefaultImage = styled.img`
    max-width: 15%;
    max-height: fit-content;
    padding: 2px 2px;
  `;

  const BuildName = styled.div`
    align-self: center;
    color: white;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `;

  const BuildImage = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 10px;
    height: 100px;
    max-width: 100%;
    border-bottom: 1px solid #EAEAEA;
  `;

  const BuildSpecs = styled.div`
    font-weight: 400;
    height: 220px;
    padding: 10px 10px;
    text-align: justify;
    align-self: flex-end;
    border-bottom: 1px solid #EAEAEA;
  `;

  const BuildComponent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2px 2px;
`;

  const ComponentImage = styled.img`
    max-width: 7%;
    max-height: fit-content;
    padding: 2px 2px;
`;

  const ComponentName = styled.div`
    align-self: center;
    color: white;
    cursor: pointer;
/*       
    &:hover {
      text-decoration: underline;
    } */
`;

  const BuildPrice = styled.div`
    padding: 10px 10px;
    /* bottom: 0; */
    /* padding: 10px 10px; */
    /* border-bottom: 1px solid #EAEAEA; */
  `;

  const BuildButton = styled.div`
    background-color: #191B2B;
    color: white;
    text-align: center;
    padding: 10px 10px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `;

  return (
    <Wrapper style={style}>
      <Header>
        {/* <DefaultImage src={DefaultLogo} alt="Default logo" /> */}
        <BuildName>
          {name || 'Hanoi Computer'}
        </BuildName>
      </Header>
      <BuildImage>
        <img src={image || './logo.png'} alt="Retailer logo" />
      </BuildImage>
      <BuildSpecs>
        <BuildComponent>
          <ComponentImage src={CPUIcon} /> &nbsp; {pcProfile.cpu}
        </BuildComponent>
        <BuildComponent>
          <ComponentImage src={GPUIcon} /> &nbsp; {pcProfile.gpu}
        </BuildComponent>
        <BuildComponent>
          <ComponentImage src={RAMIcon} /> &nbsp; {pcProfile.ram}
        </BuildComponent>
        <BuildComponent>
          <ComponentImage src={MainboardIcon} /> &nbsp; {pcProfile.motherboard}
        </BuildComponent>
        <BuildComponent>
          <ComponentImage src={StorageIcon} /> &nbsp; {pcProfile.storage}
        </BuildComponent>
        <BuildComponent>
          <ComponentImage src={PSUIcon} /> &nbsp; {pcProfile.psu}
        </BuildComponent>
      </BuildSpecs>
      <BuildPrice>
        Price: &nbsp; {price}
      </BuildPrice>
      <BuildButton>
        <i class="fas fa-plus" />
        Add To System Builder
      </BuildButton>
    </Wrapper>
  )
}

export default BuildCard;
