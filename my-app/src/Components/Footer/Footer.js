import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sologan from './Sologan';
import Categories from './Categories';
import Info from './Info';
import MediaLink from './MediaLink';
import './Footer.css';

class Footer extends Component {
    render (){
        return (
            <div className="footer">
                <div className="container-md">
                    <div className="row top-footer">
                        <Sologan />
                        <Categories />
                        <Info />
                    </div>

                    <div className="row text-center">
                        <MediaLink />
                    </div>

                    <div className="row text-center">
                        <div className="col">
                            <p className="copyright">©2020 NMD CUK DINK. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Footer;