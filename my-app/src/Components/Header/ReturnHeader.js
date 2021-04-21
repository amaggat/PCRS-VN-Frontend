import { Link } from 'react-router-dom';

const ReturnHeader = ({returnTo}) => {
    return (
        <div className="nav return-header">
            <Link className="arrow fas fa-home" to={returnTo}></Link>
        </div>
    )
}

export default ReturnHeader;