import React, { Component } from 'react';
import "./List.css"
import ProductCard from './Table'; 

class List extends Component {
    render () {
        return (
            <div className="system-build">
                <div className="banner">
                    <h1 className="text-center">SYSTEM BUILD</h1>
                </div>

                <div className="tab-content sb-table container-md" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-system" role="tabpanel" aria-labelledby="pills-home-tab">
                        <ProductCard /> 
                    </div>
                </div>
            </div>
        )
    }
}

export default List;