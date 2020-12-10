import React, { Component } from 'react';
import back_1 from './img/pc-part.jpg';
import back_2 from './img/building-pc.jpg';
import back_3 from './img/blue-print.jpg';

import './Home.css';

class Carousel extends Component {
    render() {
        return (
            <div id="slides" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-caption carouselCaption">
                            <h1 className="display-2">Create your own PC</h1>
                            <h3>Discover the platform that gives you the freedom to selecte,
                                create, analyst and develop your own PC exactly the way you want.</h3>
                            <button type="button" className="btn btn-outline-light btn-lg">Get Started</button>
                        </div>
                        <img src={back_1} className="carouselImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption carouselCaption">
                            <h1 className="display-2">Self-pick your PC part</h1>
                            <h3>Discover the platform that gives you the freedom to selecte,
                                create, analyst and develop your own PC exactly the way you want.</h3>
                            <button type="button" className="btn btn-outline-light btn-lg">Get Started</button>
                        </div>
                        <img src={back_2} className="carouselImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption carouselCaption">
                            <h1 className="display-2">Passionate with your PC</h1>
                            <h3>Discover the platform that gives you the freedom to selecte,
                                create, analyst and develop your own PC exactly the way you want.</h3>
                            <button type="button" className="btn btn-outline-light btn-lg">Get Started</button>
                        </div>
                        <img src={back_3} className="carouselImg" alt="..." />
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;