import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class SubNav extends Component {
    render() {
    const {handleDropdown} = this.props;
        return (
            <>
            <nav className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/list">System Builder</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/builds">Completed Builds</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" role="button" onFocus={()=>handleDropdown('focus')} onBlur={()=>handleDropdown('blur')}>Browse Products</Link>
                    </li>
                </ul>
            </nav>
            </>
        )
    }
}

export default SubNav;