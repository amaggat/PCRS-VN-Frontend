import React, { useEffect  } from 'react';
import { useMergeState } from '../../../../Hook'
import '../../Product.css'

function PowerFilter ({search}) {
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
        // console.log(filters);
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
                        <input type="radio" name="manufacturer" value="XIGMATEK" onChange={handleChange} className="form-check-input" id="XIGMATEK"/>
                        <label className="form-check-label" for="XIGMATEK">XIGMATEK</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="Silverstone" onChange={handleChange} className="form-check-input" id="Silverstone"/>
                        <label className="form-check-label" for="Silverstone">Silverstone</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="Seasonic" onChange={handleChange} className="form-check-input" id="Seasonic"/>
                        <label className="form-check-label" for="Seasonic">Seasonic</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="Corsair" onChange={handleChange} className="form-check-input" id="Corsair"/>
                        <label className="form-check-label" for="Corsair">Corsair</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2"> 
                    <label>Efficiency Rank</label>
                    <div className="form-check">
                        <input type="radio" name="standard_80" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="man-all"/>
                        <label className="form-check-label" for="man-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="standard_80" value="platinum" onChange={handleChange} className="form-check-input" id="plantinum"/>
                        <label className="form-check-label" for="platinum">Platinum</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="standard_80" value="gold" onChange={handleChange} className="form-check-input" id="gold"/>
                        <label className="form-check-label" for="gold">Gold</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="standard_80" value="silver" onChange={handleChange} className="form-check-input" id="silver"/>
                        <label className="form-check-label" for="silver">Silver</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="standard_80" value="bronze" onChange={handleChange} className="form-check-input" id="bronze"/>
                        <label className="form-check-label" for="bronze">Bronze</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="standard_80" value="white" onChange={handleChange} className="form-check-input" id="white"/>
                        <label className="form-check-label" for="white">Standard</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Chipset</label>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="chipset-all"/>
                        <label className="form-check-label" for="chipset-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="SFX" onChange={handleChange} className="form-check-input" id="SFX"/>
                        <label className="form-check-label" for="SFX">SFX</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="ATX" onChange={handleChange} className="form-check-input" id="ATX"/>
                        <label className="form-check-label" for="ATX">ATX</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Power</label>
                    <div className="form-check">
                        <input type="radio" name="power" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="power-all"/>
                        <label className="form-check-label" for="core-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="power" value="400" onChange={handleChange} className="form-check-input" id="power-400"/>
                        <label className="form-check-label" for="power-400">400W</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="power" value="450" onChange={handleChange} className="form-check-input" id="power-450"/>
                        <label className="form-check-label" for="power-450">450W</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="power" value="500" onChange={handleChange} className="form-check-input" id="power-500"/>
                        <label className="form-check-label" for="power-500">500W</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="power" value="600" onChange={handleChange} className="form-check-input" id="power-600"/>
                        <label className="form-check-label" for="power-600">600W</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="power" value="620" onChange={handleChange} className="form-check-input" id="power-620"/>
                        <label className="form-check-label" for="power-620">620W</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="power" value="650" onChange={handleChange} className="form-check-input" id="power-650"/>
                        <label className="form-check-label" for="power-650">650W</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="power" value="750" onChange={handleChange} className="form-check-input" id="power-750"/>
                        <label className="form-check-label" for="power-750">750W</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="power" value="1000" onChange={handleChange} className="form-check-input" id="power-1000"/>
                        <label className="form-check-label" for="power-1000">1000W</label>
                    </div><div className="form-check">
                        <input type="radio" name="power" value="1300" onChange={handleChange} className="form-check-input" id="power-1300"/>
                        <label className="form-check-label" for="power-1300">1300W</label>
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

export default PowerFilter;