import React, { Component } from 'react';
import completed1 from './img/completed_build1.png';
import completed2 from './img/completed_build2.png';

import './Home.css';

class BuildGuild extends Component {
    render() {
        return (
            <div className="card-group container-md buildGuild">
                <div className="col-sm card align-self-center card guildInfo">
                    <h1 className="BGMainTitle">Build Guides</h1>
                    <h6 className="text-wrap BGMainDescription">Building your own PC and need ideas on where to get started? 
                        Explore our build guides which cover systems for a variety of use-cases and budgets.</h6>
                    <button type="button" className="btn btn-primary btn-lg">View the Build Guilde</button>
                </div>
                <div className="col-sm card card">
                    <div className="card-body guildGroup">
                        <h5 className="card-title text-wrap BGtitle BGpaddingfull">Entry Level AMD Gaming Build</h5>
                        <p className="card-text text-wrap BGpadding2d BGdetail">AMD Ryzen 3 3100</p>
                        <p className="card-text text-wrap BGpadding2d BGdetail ">Parametric Video Card (Chipset: GeForce GTX 1650 SUPER)</p>
                        <p className="card-text text-wrap BGpadding2d BGdetail">Cougar MX330 ATX MIid Tower</p>
                            <p className="card-title BGprice BGpaddingfull">$565.93</p>
                        <img src={completed1} className="card-img-top BGpaddingfull" alt="completed-build" />
                    </div>
                </div>

                <div className="col-sm card card ">
                    <div className="card-body guildGroup">
                        <h5 className="card-title text-wrap BGtitle BGpaddingfull">Entry Level AMD Gaming Build</h5>
                        <p className="card-text text-wrap BGpadding2d BGdetail">AMD Ryzen 3 3100</p>
                        <p className="card-text text-wrap BGpadding2d BGdetail">Parametric Video Card (Chipset: GeForce GTX 1650 SUPER)</p>
                        <p className="card-text text-wrap BGpadding2d BGdetail">Cougar MX330 ATX MIid Tower</p>
                            <p className="card-title text-wrap BGprice BGpaddingfull">$565.93</p>
                        <img src={completed2} className="card-img-top BGpaddingfull" alt="completed-build" />
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildGuild;