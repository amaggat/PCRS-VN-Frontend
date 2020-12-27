import React, { useEffect  } from 'react';
import { useMergeState } from '../../../../Hook'
import '../../Product.css'

function MemoryFilter ({search}) {
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
                        <input type="radio" name="manufacturer" value="Kingston" onChange={handleChange} className="form-check-input" id="Kingston"/>
                        <label className="form-check-label" for="Kingston">Kingston</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="G.Skill" onChange={handleChange} className="form-check-input" id="G.Skill"/>
                        <label className="form-check-label" for="G.Skill">G.Skill</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2"> 
                    <label>Size</label>
                    <div className="form-check">
                        <input type="radio" name="sizeOfRam" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="size-all"/>
                        <label className="form-check-label" for="size-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sizeOfRam" value="2x8GB" onChange={handleChange} className="form-check-input" id="2x8GB"/>
                        <label className="form-check-label" for="2x8GB">2x8GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sizeOfRam" value="4x8GB" onChange={handleChange} className="form-check-input" id="4x8GB"/>
                        <label className="form-check-label" for="4x8GB">4x8GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sizeOfRam" value="1x16GB" onChange={handleChange} className="form-check-input" id="1x16GB"/>
                        <label className="form-check-label" for="1x16GB">1x16GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sizeOfRam" value="2x16GB" onChange={handleChange} className="form-check-input" id="2x16GB"/>
                        <label className="form-check-label" for="2x16GB">2x16GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sizeOfRam" value="2x32GB" onChange={handleChange} className="form-check-input" id="2x32GB"/>
                        <label className="form-check-label" for="2x32GB">2x32GB</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Chipset</label>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="chipset-all"/>
                        <label className="form-check-label" for="chipset-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="DDR4" onChange={handleChange} className="form-check-input" id="DDR4"/>
                        <label className="form-check-label" for="DDR4">DDR4</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Clock Speed</label>
                    <div className="form-check">
                        <input type="radio" name="clockSpeed" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="clockspeed-all"/>
                        <label className="form-check-label" for="clockspeed-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="clockSpeed" value="2666" onChange={handleChange} className="form-check-input" id="2666"/>
                        <label className="form-check-label" for="2666">2666</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="clockSpeed" value="3000" onChange={handleChange} className="form-check-input" id="3000"/>
                        <label className="form-check-label" for="3000">3000</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="clockSpeed" value="3200" onChange={handleChange} className="form-check-input" id="3200"/>
                        <label className="form-check-label" for="3200">3200</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="clockSpeed" value="3600" onChange={handleChange} className="form-check-input" id="3600"/>
                        <label className="form-check-label" for="3600">3600</label>
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

export default MemoryFilter;