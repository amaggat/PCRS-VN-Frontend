import React, { useEffect } from 'react'; 
import { useMergeState } from '../../../Hook';
import '../Product.css'

export default function TopFunctionProduct (props) {
    const [filters, setFilters] = useMergeState({});
    const search = props.search
    
    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        setFilters({
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        search(filters)
    }, [filters, search])

    return(
        <div className="top-bar form-row align-items-center">
            <div className="col-5">
                <div className="col align-items-center">
                    <div className="form-check">
                        <h5 className="form-check-label font-weight-bold">
                            {props.total} Compatible Products
                        </h5>
                    </div>
                </div>
            </div>
            <div className="col-1"></div>
            <div className="col-4"></div>
            <div className="col align-items-center">
                <div className="input-group">
                    <form className="filter-content" onSubmit={handleSubmit} id="filterForm">
                        {/* <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fa fa-search"></i></div>
                        </div> */}
                        <input type="text" name="name" className="form-control  form-control-sm"
                            id="inlineFormInputGroup" onChange={handleChange}
                            placeholder="Keyword..."/>
                    </form>
                </div>
            </div>
        </div>
    )
}