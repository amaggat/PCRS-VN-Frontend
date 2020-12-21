import React, { Component } from 'react';
import image from './avatar.jpg';
import logo from './logo.png';
import './Build.css'

class BuildTag extends Component {
    render() {
        return (
            <div className="item">
                <div className="top">
                    <div className="info">
                        <img src={logo} alt=""/>
                        <span>Title</span>
                    </div>
                    <div className="image">
                        <img className="w-100" src={image} alt=""/>
                    </div>
                </div>
                <div className="center mt-2 p-2">
                    <h3>Tiêu đề</h3>
                    <div className="des">
                        <p>Mô tả</p>
                    </div>
                </div>
                <div className="footer d-flex p-2 border-top">
                    <div className="text-left w-100">$123.123</div>
                    <div className="text-right w-100">
                        <i className="fa fa-arrow-up"></i>6
                        <i className="ml-2 fa fa-comment"></i>6
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildTag;