import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import cpu_icon from './img/nav-cpu.png';
import gpu_icon from './img/nav-videocard.png';
import ram_icon from './img/nav-memory.png';
import main_icon from './img/nav-motherboard.png';
import ssd_icon from './img/nav-ssd.png';

import "./Home.css";

class ProductBrowsing_ extends Component {
    render () {
        return (
            <div className="card-group w-container productBrowsing">
                <div className="col-6">
                    <div className="row">
                        <div className="col-sm card">
                            <div className="card-body">
                                <Link to="#"> 
                                    <img src={cpu_icon} className="card-img-top" alt="completed-build" />
                                    <h5 className="card-title text-center">CPU</h5>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm card">
                            <div className="card-body">
                                <Link to="#">
                                    <img src={gpu_icon} className="card-img-top" alt="completed-build" />
                                    <h5 className="card-title text-center">Video Card</h5>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm card">
                            <div className="card-body">
                                <Link to="">
                                    <img src={main_icon} className="card-img-top" alt="completed-build" />
                                    <h5 className="card-title text-center">Mother board</h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-sm card">
                            <div className="card-body">
                                <Link to="">
                                    <img src={ram_icon} className="card-img-top" alt="completed-build" />
                                    <h5 className="card-title text-center">Memory</h5>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm card">
                            <div className="card-body">
                                <Link to="">
                                    <img src={ssd_icon} className="card-img-top" alt="completed-build" />
                                    <h5 className="card-title text-center">Storage</h5>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm card">
                            <div className="card-body">
                                <button type="button" className="btn btn-primary btn-lg">See more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h2 className="card-title">Abcdefghiklm</h2>
                        <p className="card-text">Looking for PC part?</p>
                    </div>
                </div>
            </div>
        )
    }
}

// export default ProductBrowsing;

function ProductItem({img,link,name}) {
	return (
		<div className="col-4 product-browsing__item" >
			<Link className="product-browsing__item-link" to={link}>
				<img className="product-browsing__item-img" src={img} alt="completed-build" />
				<h5 className="product-browsing__item-title">{name}</h5>
			</Link>
		</div>
	)
}

export default function ProductBrowsing() {
	return (
  	<div className="container">
			<div className="row">
				<div className="col-6">
					<div className="row">
						<ProductItem img={cpu_icon} link="#" name="CPU"/>
						<ProductItem img={gpu_icon} link="#" name="Video Card"/>
						<ProductItem img={ram_icon} link="#" name="Memory"/>
						<ProductItem img={main_icon} link="#" name="Mother board"/>
						<ProductItem img={ssd_icon} link="#" name="Storage"/>
						<div className="col-4 product-browsing__item">
							<button type="button" className="btn btn-primary btn-lg">See more</button>
						</div>

					</div>
				</div>
				<div className="col-6">
					<div className="card-body">
						<h2 className="card-title">Abcdefghiklm</h2>
						<p className="card-text">Looking for PC part?</p>
					</div>
				</div>
			</div>
		</div>
  );
}
