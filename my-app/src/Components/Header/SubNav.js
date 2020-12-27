import { React, Component } from 'react';
import { Link } from 'react-router-dom';

import build from '../Sources/Icon/build.svg';
import guide from '../Sources/Icon/guide.svg';  
import product from '../Sources/Icon/product.svg';

class SubNav extends Component {
    render() {
    const {handleDropdown} = this.props;
        return (
            <>
            <nav className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <img className="item-img" src={build} alt=""></img>
                        <Link className="nav-link" to="/list">System Builder</Link>
                    </li>
                    <li className="nav-item">
                        <img className="item-img" src={guide} alt=""></img>
                        <Link className="nav-link" to="/builds">Builds Guide</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <img className="item-img" src={product} alt=""></img>
                        <Link to="#" className="nav-link dropdown-toggle" role="button" onFocus={()=>handleDropdown('focus')} onBlur={()=>handleDropdown('blur')}>Browse Products</Link>
                    </li>
                </ul>
            </nav>
            </>
        )
    }
}

export default SubNav;