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
    toast.dark(`Product suggestion clicked: ${product_type || 'no product type'}`)
  }

  return (
    // <div className="light-back home-product">
    //     <div className="w-container">
    //         <div className="row block-title">Browse Product</div>
    //         <div className="row block small-container">
    //             <div className="col text-center">
    //                 <div className="col-img">
    //                     <div className="suggestion" onClick={() => handleCategoryClick('cpu')}>
    //                         <img src={cpu} alt="cpu" className="img" />
    //                         <div className="product-title">CPU</div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col text-center">
    //                 <div className="col-img">
    //                     <div className="suggestion" onClick={() => handleCategoryClick('motherboard')}>
    //                         <img src={motherboard} alt="motherboard" className="img" />
    //                         <div className="product-title">Motherboard</div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col text-center">
    //                 <div className="col-img">
    //                     <div className="suggestion" onClick={() => handleCategoryClick('memory')}>
    //                         <img src={memory} alt="memory" className="img" />
    //                         <div className="product-title">Memory</div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="row block small-container">
    //             <div className="col text-center">
    //                 <div className="col-img">
    //                     <div className="suggestion" onClick={() => handleCategoryClick('ssd')}>
    //                         <img src={ssd} alt="cpu" className="img" />
    //                         <div className="product-title">Solid State Drive</div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col text-center">
    //                 <div className="col-img">
    //                     <div className="suggestion" onClick={() => handleCategoryClick('power')}>
    //                         <img src={power} alt="cpu" className="img" />
    //                         <div className="product-title">Power Supply</div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col text-center">
    //                 <div className="col-img ">
    //                     <div className="suggestion" onClick={() => handleCategoryClick('videocard')}>
    //                         <img src={videocard} alt="cpu" className="img" />
    //                         <div className="product-title">Video Card</div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    <Container className="build-guide">
      <div className="row block-title">Browse Product</div>
      <Row style={{ marginBottom: '50px' }}>
        <Col md="4" className="build-category-column">
          <div onClick={() => handleCategoryClick('cpu')}>
            <CategoryCard
              title="CPU"
              backgroundImg={cpu}
              gradientShadow="linear-gradient(90deg, rgba(18,109,175,1) 0%, rgba(194,20,53,1) 100%)"
              gradientOverlay="linear-gradient(90deg, rgba(18,109,175,0.5) 0%, rgba(194,20,53,0.5) 100%)"
            />
          </div>
        </Col>
        <Col md="4" className="build-category-column">
          <div onClick={() => handleCategoryClick('motherboard')}>
            <CategoryCard
              title="Motherboard"
              backgroundImg={motherboard}
              gradientShadow="linear-gradient(90deg, rgba(119,117,253,1) 0%, rgba(173,48,240,1) 100%)"
              gradientOverlay="linear-gradient(90deg, rgba(119,117,253,0.5) 0%, rgba(173,48,240,0.5) 100%)"
            />
          </div>
        </Col>
        <Col md="4" className="build-category-column">
          <div onClick={() => handleCategoryClick('memory')}>
            <CategoryCard
              title="Memory"
              backgroundImg={memory}
              gradientShadow="radial-gradient(circle, rgba(127,100,157,1) 0%, rgba(0,183,252,1) 100%)"
              gradientOverlay="radial-gradient(circle, rgba(127,100,157,0.5) 0%, rgba(0,183,252,0.5) 100%)"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="build-category-column">
          <div onClick={() => handleCategoryClick('ssd')}>
            <CategoryCard
              title="Solid State Drive"
              backgroundImg={ssd}
            />
          </div>
        </Col>
        <Col md="4" className="build-category-column">
          <div onClick={() => handleCategoryClick('power')}>
            <CategoryCard
              title="Power Supply"
              backgroundImg={power}
            />
          </div>
        </Col>
        <Col md="4" className="build-category-column">
          <div onClick={() => handleCategoryClick('videocard')}>
            <CategoryCard
              title="Graphics Card"
              backgroundImg={videocard}
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