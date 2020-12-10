import React, { Component } from 'react';
import image from './avatar.jpg';
import logo from './logo.png';
import './Build.css'

class BuildTag extends Component {
    render() {
        return (
            <div class="item">
                <div class="top">
                    <div class="info">
                        <img src={logo} alt=""/>
                        <span>Title</span>
                    </div>
                    <div class="image">
                        <img class="w-100" src={image} alt=""/>
                    </div>
                </div>
                <div class="center mt-2 p-2">
                    <h3>Tiêu đề</h3>
                    <div class="des">
                        <p>Mô tả</p>
                    </div>
                </div>
                <div class="footer d-flex p-2 border-top">
                    <div class="text-left w-100">$123.123</div>
                    <div class="text-right w-100">
                        <i class="fa fa-arrow-up"></i>6
                        <i class="ml-2 fa fa-comment"></i>6
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildTag;