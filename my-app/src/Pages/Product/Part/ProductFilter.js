import React, { useEffect  } from 'react';
import { useMergeState } from '../../../Hook'
import '../Product.css'

function ProductFilter ({searchCPU}) {
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
        searchCPU(filters)
        // console.log(filters);
    }, [filters, searchCPU])

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
                        <input type="radio" name="manufacturer" value="AMD" onChange={handleChange} className="form-check-input" id="AMD"/>
                        <label className="form-check-label" for="AMD">AMD</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="intel" onChange={handleChange} className="form-check-input" id="intel"/>
                        <label className="form-check-label" for="intel">Intel</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Chipset</label>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="chipset-all"/>
                        <label className="form-check-label" for="chipset-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="ryzen 3" onChange={handleChange} className="form-check-input" id="ryzen-3"/>
                        <label className="form-check-label" for="ryzen-3">Ryzen 3</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="ryzen 5" onChange={handleChange} className="form-check-input" id="ryzen-5"/>
                        <label className="form-check-label" for="ryzen-5">Ryzen 5</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="ryzen 7" onChange={handleChange} className="form-check-input" id="ryzen-7"/>
                        <label className="form-check-label" for="ryzen-7">Ryzen 7</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="ryzen 9" onChange={handleChange} className="form-check-input" id="ryzen-9"/>
                        <label className="form-check-label" for="ryzen-9">Ryzen 9</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="i3" onChange={handleChange} className="form-check-input" id="i3"/>
                        <label className="form-check-label" for="i3">Core i3</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="i5" onChange={handleChange} className="form-check-input" id="i5"/>
                        <label className="form-check-label" for="i5">Core i5</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="i7" onChange={handleChange} className="form-check-input" id="i7"/>
                        <label className="form-check-label" for="i7">Core i7</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="i9" onChange={handleChange} className="form-check-input" id="i9"/>
                        <label className="form-check-label" for="i9">Core i9</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Core</label>
                    <div className="form-check">
                        <input type="radio" name="core" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="core-all"/>
                        <label className="form-check-label" for="core-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="core" value="4" onChange={handleChange} className="form-check-input" id="core-4"/>
                        <label className="form-check-label" for="core-4">4</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="core" value="6" onChange={handleChange} className="form-check-input" id="core-6"/>
                        <label className="form-check-label" for="core-6">6</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="core" value="12" onChange={handleChange} className="form-check-input" id="core-12"/>
                        <label className="form-check-label" for="core-12">12</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="core" value="16" onChange={handleChange} className="form-check-input" id="core-16"/>
                        <label className="form-check-label" for="core-16">16</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    {/* CPUService.getCPUbySocket(socket) */}
                    <label>Socket</label>
                    <div className="form-check">
                        <input type="radio" name="socket" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="socket-all"/>
                        <label className="form-check-label" for="socket-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="socket" value="am4" onChange={handleChange} className="form-check-input" id="socket-am4"/>
                        <label className="form-check-label" for="socket-am4">Socket AM4</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="socket" value="lga1200" onChange={handleChange} className="form-check-input" id="socket-lga1200"/>
                        <label className="form-check-label" for="lga1200">LGA1200</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="socket" value="lga1151" onChange={handleChange} className="form-check-input" id="socket-lga1151"/>
                        <label className="form-check-label" for="lga1151">LGA1151</label>
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

export default ProductFilter;