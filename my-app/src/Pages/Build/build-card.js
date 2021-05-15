import React from 'react';
import styled from 'styled-components';

import CPUIcon from '../../Components/Sources/Icon/cpu-icon.svg';
import GPUIcon from '../../Components/Sources/Icon/gpu-icon.png';
import MainboardIcon from '../../Components/Sources/Icon/mainboard-icon.png';
import PSUIcon from '../../Components/Sources/Icon/psu-icon.png';
import RAMIcon from '../../Components/Sources/Icon/ram-icon.jpg';
import HDDIcon from '../../Components/Sources/Icon/storage-icon.png';
import SSDIcon from '../../Components/Sources/Icon/ssd-icon.png';
import { toast } from 'react-toastify';

const BuildCard = ({ maxWidth = '400px', width = '300px', name, image, pcProfile, price, style = {} }) => {
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
    height: 275px;
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
    max-width: 9%;
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

  const onClickAddToBuild = () => {
    localStorage.clear();
    // Add price and link attribute to EACH component......
    delete pcProfile.id;
    delete pcProfile.name;
    delete pcProfile.user;
    delete pcProfile.category;

    for (const component in pcProfile) {
      if (pcProfile[component][0]) {
        pcProfile[component][0].price = pcProfile[component][0].priceList[0].price || 0;
        pcProfile[component][0].link = pcProfile[component][0].priceList[0].link || 0;
        console.log(pcProfile[component])
      }
    }
    localStorage.setItem('cpu', JSON.stringify(pcProfile.cpu[0]) || null);
    localStorage.setItem('socket', JSON.stringify(pcProfile.cpu[0].socket) || null);
    localStorage.setItem('video-card', JSON.stringify(pcProfile.gpu[0]) || null);
    localStorage.setItem('memory', JSON.stringify(pcProfile.ram[0]) || null);
    // localStorage.setItem('motherboard', JSON.stringify(pcProfile.main[0]) || null);
    localStorage.setItem('ssd', JSON.stringify(pcProfile.ssd[0]) || null);
    localStorage.setItem('hdd', JSON.stringify(pcProfile.hdd[0]) || null);
    localStorage.setItem('power', JSON.stringify(pcProfile.psu[0]) || null);
    toast.dark('Added to System Builder!')
    console.log('Toast rendered')
  }

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
          <ComponentImage src={CPUIcon} /> &nbsp; {pcProfile.cpu[0] ? pcProfile.cpu[0].fullname : 'No CPU (how?)'}
        </BuildComponent>
        <BuildComponent>
          <ComponentImage src={GPUIcon} /> &nbsp; {pcProfile.gpu[0] ? pcProfile.gpu[0].fullname : 'No GPU'}
        </BuildComponent>
        <BuildComponent>
          <ComponentImage src={RAMIcon} /> &nbsp; {pcProfile.ram[0] ? pcProfile.ram[0].fullname : 'No RAM (why?)'}
        </BuildComponent>
        <BuildComponent>
          <ComponentImage src={MainboardIcon} /> &nbsp; {pcProfile.main[0]? pcProfile.main[0].fullname : 'No motherboard (Are you The Verge or smt?)'}
        </BuildComponent>
        <BuildComponent>
          <ComponentImage src={HDDIcon} /> &nbsp; {pcProfile.hdd[0] ? pcProfile.hdd[0].fullname : 'No HDD'}
        </BuildComponent>
        <BuildComponent>
          <ComponentImage src={SSDIcon} /> &nbsp; {pcProfile.ssd[0] ? pcProfile.ssd[0].fullname : 'No SSD'}
        </BuildComponent>
        <BuildComponent>
          <ComponentImage src={PSUIcon} /> &nbsp; {pcProfile.psu[0] ? pcProfile.psu[0].fullname : 'No PSU (lmao good luck trying to turn on PC)'}
        </BuildComponent>
      </BuildSpecs>
      <BuildPrice>
        Price: &nbsp; {price + ' VND'}
      </BuildPrice>
      <BuildButton onClick={() => onClickAddToBuild()}>
        <i class="fas fa-plus" />
        Add To System Builder
      </BuildButton>
    </Wrapper>
  )
}

export default BuildCard;
