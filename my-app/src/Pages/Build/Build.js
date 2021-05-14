import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProfileService from '../../Client/ProfileService';
import BuildTag from './BuildTag';
import CategoryCard from '../Home/category-card/category-card';

import GamingPCImage from '../../Components/Sources/Category-Background-Images/entry-level-gaming.jpg'
import StreamingPCImage from '../../Components/Sources/Category-Background-Images/mainstream-gaming.jpg'
import OfficeBackgroundImage from '../../Components/Sources/Category-Background-Images/office.jpg'
import WorkstationBackgroundImage from '../../Components/Sources/Category-Background-Images/workstation.jpg'
import LaptopBackgroundImage from '../../Components/Sources/Category-Background-Images/laptop.jpg'
import MiniPCImage from '../../Components/Sources/Category-Background-Images/mini-pc.jpg'
import BuildCard from './build-card';

const sample_data = {
    cpu: 'Intel i9 - 10900K',
    gpu: 'NVIDIA RTX 3080',
    ram: 'Gskill 16GB 3200MHz RGB',
    motherboard: 'MSI Z490',
    storage: '1TB HDD + 512GB SSD',
    psu: 'Cooler Master 1000W'
}
class Build extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        ProfileService.getProfiles({}).then((response) => {
            this.setState({
                posts: response.data.content,
            })
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        const { posts } = this.state;
        console.log('Posts: ', posts);

        return (
            <div className="build white-back">
                <Header />
                <div className="banner">
                    <h1 className="text-center">BUILD GUIDE</h1>
                </div>
                <Container>
                    <div className="block-title">Filter</div>
                    <div className="build-filter">
                        <Row style={{ marginBottom: '50px' }}>
                            <Col md="2" className="build-category-column">
                                <CategoryCard
                                    width="150px"
                                    isCategoryCard={true}
                                    title="Gaming PC"
                                    backgroundImg={GamingPCImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(87,90,84,0.5) 0%, rgba(183,0,38,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(87,90,84,1) 0%, rgba(183,0,38,1) 100%)"
                                />
                            </Col>
                            <Col md="2" className="build-category-column">
                                <CategoryCard
                                    width="150px"
                                    isCategoryCard={true}
                                    title="Streaming PC"
                                    backgroundImg={StreamingPCImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(226,164,111,0.5) 0%, rgba(122,226,138,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(226,164,111,1) 0%, rgba(122,226,138,1) 100%)"
                                />
                            </Col>
                            <Col md="2" className="build-category-column">
                                <CategoryCard
                                    width="150px"
                                    isCategoryCard={true}
                                    title="Workstation PC"
                                    backgroundImg={WorkstationBackgroundImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(157,114,64,0.5) 0%, rgba(115,111,103,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(157,114,64,1) 0%, rgba(115,111,103,1) 100%)"
                                />
                            </Col>
                            <Col md="2" className="build-category-column">
                                <CategoryCard
                                    width="150px"
                                    isCategoryCard={true}
                                    title="Office PC"
                                    backgroundImg={OfficeBackgroundImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(82,76,67,0.5) 0%, rgba(158,120,79,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(82,76,67,1) 0%, rgba(158,120,79,1) 100%)"
                                />
                            </Col>
                            <Col md="2" className="build-category-column">
                                <CategoryCard
                                    width="150px"
                                    isCategoryCard={true}
                                    title="Laptop"
                                    backgroundImg={LaptopBackgroundImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(28,88,119,0.5) 0%, rgba(166,130,101,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(28,88,119,1) 0%, rgba(166,130,101,1) 100%)"
                                />
                            </Col>
                            <Col md="2" className="build-category-column">
                                <CategoryCard
                                    width="150px"
                                    isCategoryCard={true}
                                    title="Mini PC"
                                    backgroundImg={MiniPCImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(49,131,1,0.5) 0%, rgba(72,50,46,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(49,131,1,1) 0%, rgba(72,50,46,1) 100%)"
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="block-title">Builds</div>
                    {/* <div className="row block">
                        {
                            posts.map(
                                post =>
                                    <div className="col-lg-3">
                                        <BuildTag post={post} />
                                    </div>
                            )
                        }
                    </div> */}
                    <Row>
                        <Col style={{paddingBottom: '30px', display: 'flex', justifyContent: 'center'}}>
                            <BuildCard
                                name="High-end Intel PC"
                                pcProfile={sample_data}
                                image="https://www.nzxt.com/images/experimental-homepage/bld-pod.png"
                                price="49.990.000 VND"
                            />
                        </Col>
                        <Col style={{paddingBottom: '30px', display: 'flex', justifyContent: 'center'}}>
                            <BuildCard
                                name="High-end Intel PC"
                                pcProfile={sample_data}
                                image="https://www.nzxt.com/images/experimental-homepage/bld-pod.png"
                                price="49.990.000 VND"
                            />
                        </Col>
                        <Col style={{paddingBottom: '30px', display: 'flex', justifyContent: 'center'}}>
                            <BuildCard
                                name="High-end Intel PC"
                                pcProfile={sample_data}
                                image="https://www.nzxt.com/images/experimental-homepage/bld-pod.png"
                                price="49.990.000 VND"
                            />
                        </Col>
                        <Col style={{paddingBottom: '30px', display: 'flex', justifyContent: 'center'}}>
                            <BuildCard
                                name="High-end Intel PC"
                                pcProfile={sample_data}
                                image="https://www.nzxt.com/images/experimental-homepage/bld-pod.png"
                                price="49.990.000 VND"
                            />
                        </Col>
                        <Col style={{paddingBottom: '30px', display: 'flex', justifyContent: 'center'}}>
                            <BuildCard
                                name="High-end Intel PC"
                                pcProfile={sample_data}
                                image="https://www.nzxt.com/images/experimental-homepage/bld-pod.png"
                                price="49.990.000 VND"
                            />
                        </Col>
                        <Col style={{paddingBottom: '30px', display: 'flex', justifyContent: 'center'}}>
                            <BuildCard
                                name="High-end Intel PC"
                                pcProfile={sample_data}
                                image="https://www.nzxt.com/images/experimental-homepage/bld-pod.png"
                                price="49.990.000 VND"
                            />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Build;