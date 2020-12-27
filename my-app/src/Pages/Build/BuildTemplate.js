import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import ProfileService from '../../Client/ProfileService'
import Card from './Card';


export default function BuildTemplate () {
    const {id} = useParams();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        ProfileService.getProfilebyID(id).then(response => {
            setProfile(response.data)
        })
        .catch(console.log);
    },[id])    

    return (
        <div className="build-template white-back">
            <Header />
            <div className="banner text-center">
                <p className="banner-title">BUILD GUIDE</p>
                <p className="banner-name">{profile.name}</p>
            </div>

            <div className="build-container block block-link">
                <div className="row list-link">
                    <i class="fas fa-link"></i>
                    <Link className="list-link-url" url={window.location.href}>{window.location.href}</Link>
                </div>
            </div>

            <div className="build-container description">
                <div className="section-title">Description</div>
                <div className="content">
                    {profile.details}
                    <h4>CPU</h4>
                    <p>
                        Our CPU of choice is the new Ryzen 5 2600. This older CPU was once priced at a higher price. 
                        With time bringing its price down, it's in reach for this build. 
                        It has 6 cores and 12 threads, with a boost clock of 3.9 GHz.
                    </p>

                    <p>
                        The Ryzen 5 2600 includes a stock cooler, so a 3rd-party cooler isn't necessary.
                    </p>

                    <p>
                    If you'd prefer to consider a similar build, but instead using an Intel processor, be sure to check out our Entry Level Intel Gaming Guide.
                    </p>

                    <p>
                        <h4>NOTE (11/23/2020):</h4>
                        <p>This guide originally recommended the Ryzen 3 3100. Its price has since gone up by about 40%, so the CPU has been updated to the Ryzen 5 2600.
                            Motherboard</p>
                    </p>

                    <h4>Motherboard</h4>

                    <p>We are using a parametric selection of motherboards that will be compatible with the Ryzen 5 2600. 
                        They also include 2-4 DIMM slots for up to 64GB of DDR4 RAM. 
                    </p>

                    <p>
                        <h4>NOTE (11/23/2020):</h4>
                        <p>This guide originally recommended a Ryzen 3 3100. Because many B450 motherboards would potentially require a BIOS update to support the 3100, this guide also recommended a specific selection of motherboards that would support the 3100 out of the box (no BIOS update required). The currently-selected Ryzen 5 2600 does not have such limitations with B450, so many more B450 motherboards have been selected. Should you choose the Ryzen 3 3100 intead, you may wish to choose a motherboard that is guaranteed to not need a BIOS update.</p>
                    </p>

                    <h4>Memory</h4>

                    <p>
                        For this build and most machines outside of the top end we opted to go with 16GB of DDR4 memory. The parametric filter finds the best price on 2x8GB kits of memory that are within AMD’s recommended specifications. We've limited it to DDR4-3200 or faster, as modern CPUs scale well with higher frequency memory.
                    </p>

                    <h4>Storage</h4>
                    
                    <p>
                        We're also using a parametric filter to select the best priced SSD available that is at least 480GB. Everyone's storage needs are different, so feel free to change drive capacity or add a drive to fit yours.
                    </p>
                    
                    <h4>GPU</h4>
                    
                    <p>
                        We have set a parametric filter for the best-priced GeForce GTX 1650 SUPER, which will let you play any popular game available today, including Valorant, Fortnite, PUBG, and Apex Legends.
                    </p>

                    <h4>Case</h4>
                    <p>
                        The Cougar MX330 is a windowed ATX mid tower case with 2x USB 2.0 and 2x USB 3.0 Gen 1 front panel ports and fits full-size graphics cards without issue. It provides several cable management holes and a couple patterned magnetic dust filters for easy removal and cleaning. If you so wish, you can also move the I/O panel to up to six different locations on the case.
                    </p>

                    <p>
                        You can spend a little more for a tempered glass version of the case if you'd like.
                    </p>

                    <h4>PSU</h4>
                    <p>
                    We're using a parametric selection of well-reviewed units, all of which are 80+ Bronze certified or above and can provide plenty of power for this build. Note that because there are issues with PSU availability right now, some non-modular PSUs have been added to the build to help you get the parts you need. These are still high quality PSUs.
                    </p>
                </div>
            </div>

            <div className="w-container system-build">
                <div className="warn row">
                    <div className="no-issue">
                        <i class="tick far fa-check-circle"></i>
                        <span className="title">Compatibility: </span>
                        <span className="text">No issues or incompatibilities found.</span> 
                    </div>
                </div>

                <div className="tab-content sb-table w-container block" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-system" role="tabpanel" aria-labelledby="pills-home-tab">
                    <table className="table title">
                        <thead>
                            <tr>
                                <th scope="col">Component</th>
                                <th scope="col">Selection</th>
                                <th scope="col">Base</th>
                                <th scope="col">Promo</th>
                                <th scope="col">Snipping</th>
                                <th scope="col">Tax</th>
                                <th scope="col-2">Price</th>
                                <th scope="col">Where</th>
                            </tr>
                        </thead>
                        {
                            <tbody className="attribute">
                                <Card name="CPU" part={profile.pcProfile?.cpu[0]} />
                                <Card name="Motherboard" part={profile.pcProfile?.main[0]} />
                                <Card name="Memory" part={profile.pcProfile?.ram[0]} />
                                <Card name="Videocard" part={profile.pcProfile?.gpu[0]} />
                                <Card name="SSD" part={profile.pcProfile?.ssd[0]} />
                                <Card name="HDD" part={profile.pcProfile?.hdd[0]} />
                                <Card name="Power supply" part={profile.pcProfile?.psu[0]} />
                            </tbody>
                        }
                    </table>
                    </div>
                </div>
            </div>

            <div className="w-container block">
                <div className="row note-title">Compatibility Notes</div>
                <dir className="note-text">
                    <span className="note-link">
                        <i class="fas fa-sticky-note"></i>
                        <span>Note:</span>
                    </span>
                    <span className="content">Some physical dimension restrictions cannot (yet) be automatically checked, such as cpu cooler / RAM clearance with modules using tall heat spreaders. </span>
                </dir>
            </div>
            <Footer />
        </div>
    )
}