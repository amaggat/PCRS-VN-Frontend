import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import cpu from '../img/nav-cpu.png'
import motherboard from '../img/nav-motherboard.png'
import memory from '../img/nav-memory.png'
import ssd from '../img/nav-ssd.png'
import power from '../img/nav-powersupply.png'
import videocard from '../img/nav-videocard.png'
import SuggestionBlock from './suggestion-block/suggestion-block';

const ProductSuggestionSection = () => {
    const [isFirstBlockShow, setFirstBlockShow] = useState(false);
    const [isSecondBlockShow, setSecondBlockShow] = useState(false);
    const [selected_product_type, setSelectedProductType] = useState('');

    const handleCategoryClick = (product_type) => {
        if (product_type === 'cpu' || product_type === 'motherboard' || product_type === 'memory') {
            if (product_type !== selected_product_type) {
                setFirstBlockShow(!isFirstBlockShow);
            } else setSelectedProductType(product_type);
        } else {
            if (product_type !== selected_product_type) {
                setSecondBlockShow(!isSecondBlockShow);
            } else setSelectedProductType(product_type);
        }
        toast.dark(`Product suggestion clicked: ${product_type || 'no product type'}`)
    }

    return (
        <div className="light-back home-product">
            <div className="w-container">
                <div className="row block-title">Browse Product</div>
                <div className="row block small-container">
                    <div className="col text-center">
                        <div className="col-img">
                            <div className="suggestion" onClick={() => handleCategoryClick('cpu')}>
                                <img src={cpu} alt="cpu" className="img" />
                                <div className="product-title">CPU</div>
                            </div>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="col-img">
                            <div className="suggestion" onClick={() => handleCategoryClick('motherboard')}>
                                <img src={motherboard} alt="motherboard" className="img" />
                                <div className="product-title">Motherboard</div>
                            </div>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="col-img">
                            <div className="suggestion" onClick={() => handleCategoryClick('memory')}>
                                <img src={memory} alt="memory" className="img" />
                                <div className="product-title">Memory</div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    isFirstBlockShow
                        ? <SuggestionBlock product_type={selected_product_type} />
                        : null
                }
                <div className="row block small-container">
                    <div className="col text-center">
                        <div className="col-img">
                            <div className="suggestion" onClick={() => handleCategoryClick('ssd')}>
                                <img src={ssd} alt="cpu" className="img" />
                                <div className="product-title">Solid State Drive</div>
                            </div>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="col-img">
                            <div className="suggestion" onClick={() => handleCategoryClick('power')}>
                                <img src={power} alt="cpu" className="img" />
                                <div className="product-title">Power Supply</div>
                            </div>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="col-img ">
                            <div className="suggestion" onClick={() => handleCategoryClick('videocard')}>
                                <img src={videocard} alt="cpu" className="img" />
                                <div className="product-title">Video Card</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col see-more">
                            <div className="button text-center">
                                <a href="/products" type="button" className="btn btn-primary">See More</a>
                            </div>
                        </div> */}
                </div>
                {
                    isSecondBlockShow
                        ? <SuggestionBlock product_type={selected_product_type} />
                        : null
                }
                <Button style={{ width: '100%' }} color="primary">See more</Button>
            </div>
        </div>
    )
}

export default ProductSuggestionSection;