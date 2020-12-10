import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class MediaLink extends Component {
    render () {
        return (
            <div className="col">
                <Link to="/" class="fab fa-facebook icon"></Link>
                <Link to="/" class="fab fa-github icon"></Link>
                <Link to="/" class="fab fa-twitter icon"></Link>
                <Link to="/" class="fab fa-instagram icon"></Link>
                <Link to="/" class="fab fa-twitch icon"></Link>
            </div>
        )
    }
}

export default MediaLink;