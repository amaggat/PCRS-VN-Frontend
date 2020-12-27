import React, { useEffect  } from 'react';
import { useMergeState } from '../../../../Hook'
import '../../Product.css'

function HDDFilter ({search}) {
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
                    <label>Manufacture</label>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="man-all"/>
                        <label className="form-check-label" for="man-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="Western Digital" onChange={handleChange} className="form-check-input" id="Western-Digital"/>
                        <label className="form-check-label" for="Western-Digital">Western Digital</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="Seagate" onChange={handleChange} className="form-check-input" id="Seagate"/>
                        <label className="form-check-label" for="Seagate">Seagate</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2"> 
                    <label>Chipset</label>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="chipset-all"/>
                        <label className="form-check-label" for="chipset-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="2.5 SATA" onChange={handleChange} className="form-check-input" id="2.5SATA"/>
                        <label className="form-check-label" for="2.5SATA">2.5 SATA</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="3.5 SATA" onChange={handleChange} className="form-check-input" id="3.5SATA"/>
                        <label className="form-check-label" for="3.5SATA">3.5 SATA</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Storage</label>
                    <div className="form-check">
                        <input type="radio" name="storage" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="storage-all"/>
                        <label className="form-check-label" for="storage-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="500 GB" onChange={handleChange} className="form-check-input" id="500GB"/>
                        <label className="form-check-label" for="500GB">500 GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="1 TB" onChange={handleChange} className="form-check-input" id="1TB"/>
                        <label className="form-check-label" for="1TB">1 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="2 TB" onChange={handleChange} className="form-check-input" id="2TB"/>
                        <label className="form-check-label" for="2TB">2 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="3 TB" onChange={handleChange} className="form-check-input" id="3TB"/>
                        <label className="form-check-label" for="3TB">3 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="4 TB" onChange={handleChange} className="form-check-input" id="4TB"/>
                        <label className="form-check-label" for="4TB">4 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="6 TB" onChange={handleChange} className="form-check-input" id="6TB"/>
                        <label className="form-check-label" for="6TB">6 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="8 TB" onChange={handleChange} className="form-check-input" id="8TB"/>
                        <label className="form-check-label" for="8TB">8 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="10 TB" onChange={handleChange} className="form-check-input" id="10TB"/>
                        <label className="form-check-label" for="10TB">10 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="12 TB" onChange={handleChange} className="form-check-input" id="12TB"/>
                        <label className="form-check-label" for="12TB">12 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="14 TB" onChange={handleChange} className="form-check-input" id="14TB"/>
                        <label className="form-check-label" for="14TB">14 TB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="storage" value="16 TB" onChange={handleChange} className="form-check-input" id="16TB"/>
                        <label className="form-check-label" for="16TB">16 TB</label>
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

export default HDDFilter;