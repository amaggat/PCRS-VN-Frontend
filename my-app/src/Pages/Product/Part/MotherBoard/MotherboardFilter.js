import React, { useEffect, useState  } from 'react';
import { useMergeState } from '../../../../Hook'
import '../../Product.css'

function MotherboardFilter ({search}) {
    const [filters, setFilters] = useMergeState({});
    const socket = JSON.parse(localStorage.getItem('socket'));
    console.log("SOCKET: ", socket);
    const [disable, setDisable] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        if (socket !== null && e.target.value.toUpperCase() !== socket.toUpperCase()) {
            return
        }

        setFilters({
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (socket !== null) {
            setDisable({
                disable: false
            });
        }
        search(filters)
    }, [filters, search, socket])

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
                        <input type="radio" name="manufacturer" value="MSI" onChange={handleChange} className="form-check-input" id="MSI"/>
                        <label className="form-check-label" for="MSI">MSI</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="Asus" onChange={handleChange} className="form-check-input" id="Asus"/>
                        <label className="form-check-label" for="Asus">Asus</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="ASRock" onChange={handleChange} className="form-check-input" id="ASRock"/>
                        <label className="form-check-label" for="ASRock">ASRock</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" value="Gigabyte" onChange={handleChange} className="form-check-input" id="Gigabyte"/>
                        <label className="form-check-label" for="Gigabyte">Gigabyte</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2"> 
                    <label>Form Factor</label>
                    <div className="form-check">
                        <input type="radio" name="formfactor" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="size-all"/>
                        <label className="form-check-label" for="size-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="formfactor" value="ATX" onChange={handleChange} className="form-check-input" id="atx"/>
                        <label className="form-check-label" for="atx">ATX</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="formfactor" value="EATX" onChange={handleChange} className="form-check-input" id="eatx"/>
                        <label className="form-check-label" for="eatx">EATX</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="formfactor" value="MICRO ATX" onChange={handleChange} className="form-check-input" id="micro ATX"/>
                        <label className="form-check-label" for="micro ATX">MICRO ATX</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="formfactor" value="Mini ITX" onChange={handleChange} className="form-check-input" id="miniitx"/>
                        <label className="form-check-label" for="miniitx">Mini ITX</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2"> 
                    <label>Memory max</label>
                    <div className="form-check">
                        <input type="radio" name="sizeofram" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="size-all"/>
                        <label className="form-check-label" for="size-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sizeofram" value="64" onChange={handleChange} className="form-check-input" id="64GB"/>
                        <label className="form-check-label" for="64GB">64 GB</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sizeofram" value="128" onChange={handleChange} className="form-check-input" id="128GB"/>
                        <label className="form-check-label" for="128GB">128 GB</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Chipset</label>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="chipset-all"/>
                        <label className="form-check-label" for="chipset-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="A320" onChange={handleChange} className="form-check-input" id="A320"/>
                        <label className="form-check-label" for="A320">A320</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="A520" onChange={handleChange} className="form-check-input" id="A520"/>
                        <label className="form-check-label" for="A520">A520</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="H310" onChange={handleChange} className="form-check-input" id="H310"/>
                        <label className="form-check-label" for="H310">H310</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="H410" onChange={handleChange} className="form-check-input" id="H410"/>
                        <label className="form-check-label" for="H410">H410</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="B450" onChange={handleChange} className="form-check-input" id="B450"/>
                        <label className="form-check-label" for="B450">B450</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="B550" onChange={handleChange} className="form-check-input" id="B550"/>
                        <label className="form-check-label" for="B550">B550</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="B365" onChange={handleChange} className="form-check-input" id="B365"/>
                        <label className="form-check-label" for="B365">B365</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="B360" onChange={handleChange} className="form-check-input" id="B360"/>
                        <label className="form-check-label" for="B360">B360</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="B460" onChange={handleChange} className="form-check-input" id="B460"/>
                        <label className="form-check-label" for="B460">B460</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="X570" onChange={handleChange} className="form-check-input" id="X570"/>
                        <label className="form-check-label" for="X570">X570</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="Z370" onChange={handleChange} className="form-check-input" id="Z370"/>
                        <label className="form-check-label" for="Z370">Z370</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="Z390" onChange={handleChange} className="form-check-input" id="Z390"/>
                        <label className="form-check-label" for="Z390">Z390</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="Z470" onChange={handleChange} className="form-check-input" id="Z470"/>
                        <label className="form-check-label" for="Z470">Z470</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="chipset" value="Z490" onChange={handleChange} className="form-check-input" id="Z490"/>
                        <label className="form-check-label" for="Z490">Z490</label>
                    </div>
                    
                </div>
                <div className="form-group border-top pt-2">
                    <label>Socket</label>
                    <div className="form-check">
                        <input type="radio" name="socket" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="socket-all"/>
                        <label className="form-check-label" for="socket-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="socket" value="LGA1200" onChange={handleChange} disabled={disable} className="form-check-input" id="LGA1200"/>
                        <label className="form-check-label" for="LGA1200">LGA1200</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="socket" value="AM4" onChange={handleChange} disabled={disable} className="form-check-input" id="AM4"/>
                        <label className="form-check-label" for="AM4">AM4</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="socket" value="LGA1151" onChange={handleChange} disabled={disable} className="form-check-input" id="LGA1151"/>
                        <label className="form-check-label" for="LGA1151">LGA1151</label>
                    </div>
                </div>

                <div className="form-group border-top pt-2">
                    <label>Slot</label>
                    <div className="form-check">
                        <input type="radio" name="memory_slot" value="" defaultChecked={true} onChange={handleChange} className="form-check-input" id="memory_slot-all"/>
                        <label className="form-check-label" for="memory_slot-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="memory_slot" value="2" onChange={handleChange} className="form-check-input" id="2"/>
                        <label className="form-check-label" for="2">2</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="memory_slot" value="4" onChange={handleChange} className="form-check-input" id="4"/>
                        <label className="form-check-label" for="4">4</label>
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

export default MotherboardFilter;