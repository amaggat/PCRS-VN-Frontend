import React, { useEffect  } from 'react';
import { useMergeState } from '../../../../Hook'
import '../../Product.css'

function SSDFilter ({search}) {
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
                <div className="form-group pt-2"> 
                    <label>Manufacturer</label>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="man-all"/>
                        <label className="form-check-label" for="man-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="Samsung" onChange={handleChange} className="form-check-input" id="Western-Digital"/>
                        <label className="form-check-label" for="Western-Digital">Samsung</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="Kingston" onChange={handleChange} className="form-check-input" id="Kingston"/>
                        <label className="form-check-label" for="Kingston">Kingston</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="ADATA" onChange={handleChange} className="form-check-input" id="ADATA"/>
                        <label className="form-check-label" for="ADATA">ADATA</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2"> 
                    <label>Storage</label>
                    <div className="form-check">
                        <input type="radio" name="storage" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="storage-all"/>
                        <label className="form-check-label" for="storage-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="8 TB" onChange={handleChange} className="form-check-input" id="8 TB"/>
                        <label className="form-check-label" for="8 TB">8 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="4 TB" onChange={handleChange} className="form-check-input" id="4 TB"/>
                        <label className="form-check-label" for="4 TB">4 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="2 TB" onChange={handleChange} className="form-check-input" id="2 TB"/>
                        <label className="form-check-label" for="2 TB">2 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="1 TB" onChange={handleChange} className="form-check-input" id="1 TB"/>
                        <label className="form-check-label" for="1 TB">1 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="960 GB" onChange={handleChange} className="form-check-input" id="960 GB"/>
                        <label className="form-check-label" for="960 GB">960 GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="512 GB" onChange={handleChange} className="form-check-input" id="512 GB"/>
                        <label className="form-check-label" for="512 GB">512 GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="500 GB" onChange={handleChange} className="form-check-input" id="500 GB"/>
                        <label className="form-check-label" for="500 GB">500 GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="480 GB" onChange={handleChange} className="form-check-input" id="480 GB"/>
                        <label className="form-check-label" for="480 GB">480 GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="256 GB" onChange={handleChange} className="form-check-input" id="256 GB"/>
                        <label className="form-check-label" for="256 GB">256 GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="250 GB" onChange={handleChange} className="form-check-input" id="250 GB"/>
                        <label className="form-check-label" for="250 GB">250 GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="240 GB" onChange={handleChange} className="form-check-input" id="240 GB"/>
                        <label className="form-check-label" for="240 GB">240 GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="128 GB" onChange={handleChange} className="form-check-input" id="128 GB"/>
                        <label className="form-check-label" for="128 GB">128 GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="120 GB" onChange={handleChange} className="form-check-input" id="120 GB"/>
                        <label className="form-check-label" for="120 GB">120 GB</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Chipset</label>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="chipset-all"/>
                        <label className="form-check-label" for="chipset-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="M2 SATA" onChange={handleChange} className="form-check-input" id="M2 SATA"/>
                        <label className="form-check-label" for="M2 SATA">M2 SATA</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="M2 NVMe" onChange={handleChange} className="form-check-input" id="M2 NVMe"/>
                        <label className="form-check-label" for="M2 NVMe">M2 NVMe</label>
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

export default SSDFilter;