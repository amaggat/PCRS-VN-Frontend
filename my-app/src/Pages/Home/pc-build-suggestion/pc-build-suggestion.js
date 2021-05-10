import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import BuildTag from '../../Build/BuildTag';
import ProfileService from '../../../Client/ProfileService';
import BuildCategoryCard from './build-category-card/build-category-card';
import '../Home.css'
import './pc-build-suggestion.css'

import EntryLevelBackgroundImage from '../../../Components/Sources/Category-Background-Images/entry-level-gaming.jpg'
import MainstreamBackgroundImage from '../../../Components/Sources/Category-Background-Images/mainstream-gaming.jpg'
import HighEndBackgroundImage from '../../../Components/Sources/Category-Background-Images/high-end-gaming.jpg'
import OfficeBackgroundImage from '../../../Components/Sources/Category-Background-Images/office.jpg'
import WorkstationBackgroundImage from '../../../Components/Sources/Category-Background-Images/workstation.jpg'
import LaptopBackgroundImage from '../../../Components/Sources/Category-Background-Images/laptop.jpg'

const PCBuildSuggestion = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    ProfileService.getProfiles({}).then((response) => {
      let temp = [];
      for (let i = 0; i < 2; ++i) {
        temp.push(response.data.content[i]);
      }
      setPosts(temp);
    }).catch(err => {
      console.log(err);
    });
  }, [])

  return (
    // All css stylings are stored in Home/Home.css
    // <div className="grey-back build-home">
    //   <div className="row w-container block">
    //     <div className="col text-content">
    //       <div className="text-banner-wrap vertical-center">
    //         <div className="text banner-title">Build Guides</div>
    //         <div className="text banner-content">Building your own PC and need ideas on where to get started?
    //           Explore our build guides which cover systems for a variety of use-cases and budgets.</div>
    //         <div className="button"><a type="button" href="/list" className="btn btn-primary btn-lg">View the Build Guilde</a></div>
    //       </div>
    //     </div>
    //     {/* {
    //       posts?.map(e =>
    //         <div className="col">
    //           <BuildTag post={e} />
    //         </div>
    //       )
    //     } */}

    //   </div>

    // </div>
    <Container className="build-guide">
      <div className="block-title">PC Category</div>
      <Row style={{ marginBottom: '50px' }}>
        <Col md="4" className="build-category-column">
          <BuildCategoryCard
            title="Entry-level Gaming PC"
            backgroundImg={EntryLevelBackgroundImage}
            gradientOverlay="linear-gradient(90deg, rgba(87,90,84,0.5) 0%, rgba(183,0,38,0.5) 100%)"
            gradientShadow="linear-gradient(90deg, rgba(87,90,84,1) 0%, rgba(183,0,38,1) 100%)"
          />
        </Col>
        <Col md="4" className="build-category-column">
          <BuildCategoryCard
            title="Mainstream Gaming PC"
            backgroundImg={MainstreamBackgroundImage}
            gradientOverlay="linear-gradient(90deg, rgba(226,164,111,0.5) 0%, rgba(122,226,138,0.5) 100%)"
            gradientShadow="linear-gradient(90deg, rgba(226,164,111,1) 0%, rgba(122,226,138,1) 100%)"
          />
        </Col>
        <Col md="4" className="build-category-column">
          <BuildCategoryCard
            title="High-end Gaming PC"
            backgroundImg={HighEndBackgroundImage}
            gradientOverlay="linear-gradient(90deg, rgba(255, 84, 255, 0.5) 0%, rgba(141, 1, 255, 0.5) 50%, rgba(15, 221, 255, 0.5) 100%)"
            gradientShadow="linear-gradient(90deg, rgba(255, 84, 255, 1) 0%, rgba(141, 1, 255, 1) 50%, rgba(15, 221, 255, 1) 100%)"
          />
        </Col>
      </Row>
      <Row>
        <Col md="4" className="build-category-column">
          <BuildCategoryCard
            title="Office PC"
            backgroundImg={OfficeBackgroundImage}
            gradientOverlay="linear-gradient(90deg, rgba(82,76,67,0.5) 0%, rgba(158,120,79,0.5) 100%)"
            gradientShadow="linear-gradient(90deg, rgba(82,76,67,1) 0%, rgba(158,120,79,1) 100%)"
          />
        </Col>
        <Col md="4" className="build-category-column">
          <BuildCategoryCard
            title="Workstation PC"
            backgroundImg={WorkstationBackgroundImage}
            gradientOverlay="linear-gradient(90deg, rgba(157,114,64,0.5) 0%, rgba(115,111,103,0.5) 100%)"
            gradientShadow="linear-gradient(90deg, rgba(157,114,64,1) 0%, rgba(115,111,103,1) 100%)"
          />
        </Col>
        <Col md="4" className="build-category-column">
          <BuildCategoryCard
            title="Laptop"
            backgroundImg={LaptopBackgroundImage}
            gradientOverlay="linear-gradient(90deg, rgba(28,88,119,0.5) 0%, rgba(166,130,101,0.5) 100%)"
            gradientShadow="linear-gradient(90deg, rgba(28,88,119,1) 0%, rgba(166,130,101,1) 100%)"
          />
        </Col>
      </Row>
      <br />
    </Container>
  )
}

export default PCBuildSuggestion;