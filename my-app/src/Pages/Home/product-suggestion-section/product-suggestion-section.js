import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';

import cpu from '../img/card-cpu.png'
import motherboard from '../img/card-motherboard.jpg'
import memory from '../img/card-memory.jpg'
import ssd from '../img/card-ssd.png'
import power from '../img/card-power.jpg'
import videocard from '../img/card-gpu.jpg'
import SuggestionBlock from './suggestion-block/suggestion-block';
import CategoryCard from '../category-card/category-card';

const ProductSuggestionSection = () => {
  const [suggestionBlockShow, setSuggestionBlockShow] = useState(false);
  const [selected_product_type, setSelectedProductType] = useState('');

  const handleCategoryClick = (product_type) => {
    setSelectedProductType(product_type);
    if (suggestionBlockShow !== true) setSuggestionBlockShow(true);
    // toast.dark(`Product suggestion clicked: ${product_type || 'no product type'}`)
  }

  return (
    <Container className="build-guide">
      <div className="row block-title">Browse Product</div>
      <Row style={{ marginBottom: '50px' }}>
        <Col md="2" className="build-category-column">
          <div onClick={() => handleCategoryClick('cpu')}>
            <CategoryCard
              width="160px"
              title="CPU"
              backgroundImg={cpu}
              gradientShadow="linear-gradient(90deg, rgba(18,109,175,1) 0%, rgba(194,20,53,1) 100%)"
              gradientOverlay="linear-gradient(90deg, rgba(18,109,175,0.5) 0%, rgba(194,20,53,0.5) 100%)"
            />
          </div>
        </Col>
        <Col md="2" className="build-category-column">
          <div onClick={() => handleCategoryClick('mainboard')}>
            <CategoryCard
              width="160px"
              title="Motherboard"
              backgroundImg={motherboard}
              gradientShadow="linear-gradient(90deg, rgba(119,117,253,1) 0%, rgba(173,48,240,1) 100%)"
              gradientOverlay="linear-gradient(90deg, rgba(119,117,253,0.5) 0%, rgba(173,48,240,0.5) 100%)"
            />
          </div>
        </Col>
        <Col md="2" className="build-category-column">
          <div onClick={() => handleCategoryClick('ram')}>
            <CategoryCard
              width="160px"
              title="Memory"
              backgroundImg={memory}
              gradientShadow="radial-gradient(circle, rgba(127,100,157,1) 0%, rgba(0,183,252,1) 100%)"
              gradientOverlay="radial-gradient(circle, rgba(127,100,157,0.5) 0%, rgba(0,183,252,0.5) 100%)"
            />
          </div>
        </Col>
        <Col md="2" className="build-category-column">
          <div onClick={() => handleCategoryClick('ssd')}>
            <CategoryCard
              width="160px"
              title="Solid State Drive"
              backgroundImg={ssd}
              gradientShadow="linear-gradient(90deg, rgba(226,168,245,1) 0%, rgba(15,111,180,1) 100%)"
              gradientOverlay="linear-gradient(90deg, rgba(226,168,245,0.5) 0%, rgba(15,111,180,0.5) 100%)"
            />
          </div>
        </Col>
        <Col md="2" className="build-category-column">
          <div onClick={() => handleCategoryClick('psu')}>
            <CategoryCard
              width="160px"
              title="Power Supply"
              backgroundImg={power}
              gradientShadow="linear-gradient(90deg, rgba(2,167,174,1) 0%, rgba(207,100,76,1) 100%)"
              gradientOverlay="linear-gradient(90deg, rgba(2,167,174,0.5) 0%, rgba(207,100,76,0.5) 100%)"
            />
          </div>
        </Col>
        <Col md="2" className="build-category-column">
          <div onClick={() => handleCategoryClick('gpu')}>
            <CategoryCard
              width="160px"
              title="Graphics Card"
              backgroundImg={videocard}
              gradientShadow="linear-gradient(90deg, rgba(52,51,69,1) 0%, rgba(203,188,173,1) 100%)"
              gradientOverlay="linear-gradient(90deg, rgba(52,51,69,0.5) 0%, rgba(203,188,173,0.5) 100%)"
              backgroundPosition="center"
            />
          </div>
        </Col>
      </Row>
      <br />
      {
        suggestionBlockShow
          ? <SuggestionBlock product_type={selected_product_type} />
          : null
      }

    </Container >
  )
}

export default ProductSuggestionSection;