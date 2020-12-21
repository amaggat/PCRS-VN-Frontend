import React, { Component } from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import './Page.css'

class NotFound extends Component {
    render() {
        return (
            <div className="notfound white-back">
                <Header />
                <dir className="body card-body">
                    <div className="card-title main-text text-center">
                        <h1>Oops!</h1>
                    </div>
                    <div className="card-text sub-text text-center">
                        <h1>404 - PAGE NOT FOUND</h1>
                        <p>The page you are looking for is temporarily unavailable. 
                        please try again later</p>
                    </div>
                </dir>
                <Footer />
            </div>
        )
    }
}

export default NotFound;