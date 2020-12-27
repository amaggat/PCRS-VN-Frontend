import React, { useEffect  } from 'react';
import { useMergeState } from '../../../../Hook'
import '../../Product.css'

function VideocardFilter ({search}) {
    const [filters, setFilters] = useMergeState({});
    
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

    return (
        <div className="filter">
            <h5 className="filter-title p-2">Filter</h5>
            <form className="filter-content" onSubmit={handleSubmit} id="filterForm">
                <div className="form-group">
                    <label>Price</label>
                    <div className="input-group">
                        <input type="text" className="form-control  form-control-sm"
                            placeholder="min"/>
                        <input type="text" className="form-control  form-control-sm"
                            placeholder="max"/>
                    </div>
                </div>
                <div className="form-group border-top pt-2"> 
                    <label>Manufacture</label>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="man-all"/>
                        <label className="form-check-label" for="man-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="MSI" onChange={handleChange} className="form-check-input" id="MSI"/>
                        <label className="form-check-label" for="MSI">MSI</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="Gigabyte" onChange={handleChange} className="form-check-input" id="Gigabyte"/>
                        <label className="form-check-label" for="Gigabyte">Gigabyte</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="Asus" onChange={handleChange} className="form-check-input" id="Asus"/>
                        <label className="form-check-label" for="Asus">Asus</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Chipset</label>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="chipset-all"/>
                        <label className="form-check-label" for="chipset-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="RX 5600 XT" onChange={handleChange} className="form-check-input" id="RX5600XT"/>
                        <label className="form-check-label" for="RX5600XT">RX 5600 XT</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="RTX 3090" onChange={handleChange} className="form-check-input" id="RTX3090"/>
                        <label className="form-check-label" for="RTX3090">RTX 3090</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="RTX 3080" onChange={handleChange} className="form-check-input" id="RTX3080"/>
                        <label className="form-check-label" for="RTX3080">RTX 3080</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="RTX 3070" onChange={handleChange} className="form-check-input" id="RTX3070"/>
                        <label className="form-check-label" for="RTX 3070">RTX3070</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="RTX 3060 Ti" onChange={handleChange} className="form-check-input" id="RTX3060Ti"/>
                        <label className="form-check-label" for="RTX3060Ti">RTX 3060 Ti</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="RTX 2080 Ti" onChange={handleChange} className="form-check-input" id="RTX2080Ti"/>
                        <label className="form-check-label" for="RTX2080Ti">RTX 2080 Ti</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="RTX 2080 SUPER" onChange={handleChange} className="form-check-input" id="RTX2080SUPER"/>
                        <label className="form-check-label" for="RTX2080SUPER">RTX 2080 SUPER</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Rating</label>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default VideocardFilter;