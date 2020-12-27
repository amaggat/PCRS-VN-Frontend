import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

import Case from './img/nav-case.png'
import CPU from './img/nav-cpu.png'
import HDD from './img/nav-hdd.png'
import Memmory from './img/nav-memory.png'
import Motherboard from './img/nav-motherboard.png'
import Storage from './img/nav-ssd.png'
import Power from './img/nav-powersupply.png'
import GPU from './img/nav-videocard.png'

class Dropdown extends Component {
    render() {
        return (
            <div className="dropdown container-fluid">
                <div className="row dropdown-container">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/cpu">
                                    <img className="product-category__item-img" alt="cpu" src={CPU}/>
                                    <span className="product-category__item-title">CPU</span>
                                </Link>
                            </div>
                            <div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/motherboard">
                                    <img className="product-category__item-img" alt="mother-board" src={Motherboard}/>
                                    <span className="product-category__item-title">Mother Board</span>
                                </Link>
                            </div>
                            <div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/hdd">
                                    <img className="product-category__item-img" alt="cc" src={HDD} />
                                    <span className="product-category__item-title">Hard Disk Drive</span>
                                </Link>
                            </div>
                            <div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/memory">
                                    <img className="product-category__item-img" alt="memory" src={Memmory}/>
                                    <span className="product-category__item-title">Memory</span>
                                </Link>
                            </div>
                            
                            <div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/power">
                                    <img className="product-category__item-img" alt="power" src={Power}/>
                                    <span className="product-category__item-title">Power Supply</span>
                                </Link>
                            </div>
                            <div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/ssd">
                                    <img className="product-category__item-img" alt="storage" src={Storage}/>
                                    <span className="product-category__item-title">Solid State Drive</span>
                                </Link>
                            </div>
                            <div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/video-card">
                                    <img className="product-category__item-img" alt="gpu" src={GPU}/>
                                    <span className="product-category__item-title">Video Card</span>
                                </Link>
                            </div>
                            <div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/case">
                                    <img className="product-category__item-img" alt="case" src={Case}/>
                                    <span className="product-category__item-title">Case</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 extra-list">
                        <div className="row">
                            <div className="col-4">
                                <div className="block">
                                    <div className="title">Cooling</div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Case Fans</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Fan Controllers</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Themral Compound</Link>
                                    </div>
                                </div>

                                <div className="block">
                                    <div className="title">Drivers</div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Optical Drivers</Link>
                                    </div>
                                </div>

                                <div className="block">
                                    <div className="title">Expansion</div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Sounds Cards</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Wired Networking</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Wireless Networking</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="block">
                                    <div className="title">Displays</div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Monitors</Link>
                                    </div>
                                </div>

                                <div className="block">
                                    <div className="title">External Storage</div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">External Hard Drives</Link>
                                    </div>
                                </div>

                                <div className="block">
                                    <div className="title">Peripherals</div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Headphones</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Keyboards</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Mice</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Speakers</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Uninterruptible Power Supplies</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Webcams</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="block">
                                    <div className="title">Software</div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Antivirus</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Audio & Video</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Backup</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Design & Illustration</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Internet Security</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Office & Productivity</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Operating Systems</Link>
                                    </div>
                                    <div className="link">
                                        <Link className="extra-link" to="/">Photography</Link>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="title">Other</div>
                                    <div className="link"> 
                                        <Link className="extra-link" to="/">Laptops</Link>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Dropdown;