import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import "./List.css"
import ProductCard from './Table'; 

class List extends Component {
    render () {
        return (
            <div className="system-build white-back">
                <Header />
                <div className="banner">
                    <h1 className="text-center">SYSTEM BUILD</h1>
                </div>

                <div className="tab-content sb-table w-container" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-system" role="tabpanel" aria-labelledby="pills-home-tab">
                        <ProductCard /> 
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default List;