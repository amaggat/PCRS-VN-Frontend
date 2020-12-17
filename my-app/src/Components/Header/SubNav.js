import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class SubNav extends Component {
    render() {
    const {handleDropdownFocus, handleDropdownBlur} = this.props;
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
                        <Link className="nav-link dropdown-toggle" role="button" onBlur={handleDropdownBlur} onFocus={handleDropdownFocus}>Browse Products</Link>
                    </li>
                </ul>
            </nav>
            </>
        )
    }
}

export default SubNav;