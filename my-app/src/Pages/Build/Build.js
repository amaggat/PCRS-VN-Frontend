import React, { Component, useEffect, useState } from 'react';
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
import LoadingBars from '../../Components/Page/LoadingBars';
import PCImage from '../../Components/Sources/Category-Background-Images/build-card-image.png';
import { toast } from 'react-toastify';

const Build = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const type = new URLSearchParams(window.location.search);

    useEffect(() => {
        const fetch = async () => {
            await getPosts(type.get('type'));
        }

        fetch();
    }, [])

    const getPosts = async (type) => {
        setLoading(true);
        try {
            const result = await ProfileService.getProfiles(type);
            if (result.data) {
                setPosts(result.data.content);
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
        setLoading(false);
    }

    const componentRender = (
        <>
            <div className="block-title">Builds</div>
            <Row>
                {
                    posts.map((post) => (
                        <Col style={{ paddingBottom: '30px', display: 'flex', justifyContent: 'center' }}>
                            <BuildCard
                                name={post.details}
                                pcProfile={post.pcProfile}
                                image={PCImage}
                                type={post.type}
                                price={post.price}
                            />
                        </Col>
                    ))
                }
            </Row>
        </>
    );

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
                            <div onClick={() => getPosts('gaming')}>
                                <CategoryCard
                                    width="150px"
                                    title="Gaming PC"
                                    backgroundImg={GamingPCImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(87,90,84,0.5) 0%, rgba(183,0,38,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(87,90,84,1) 0%, rgba(183,0,38,1) 100%)"
                                />
                            </div>
                        </Col>
                        <Col md="2" className="build-category-column">
                            <div onClick={() => getPosts('streaming')}>
                                <CategoryCard
                                    width="150px"
                                    title="Streaming PC"
                                    backgroundImg={StreamingPCImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(226,164,111,0.5) 0%, rgba(122,226,138,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(226,164,111,1) 0%, rgba(122,226,138,1) 100%)"
                                />
                            </div>
                        </Col>
                        <Col md="2" className="build-category-column">
                            <div onClick={() => getPosts('workstation')}>
                                <CategoryCard
                                    width="150px"
                                    title="Workstation PC"
                                    backgroundImg={WorkstationBackgroundImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(157,114,64,0.5) 0%, rgba(115,111,103,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(157,114,64,1) 0%, rgba(115,111,103,1) 100%)"
                                />
                            </div>
                        </Col>
                        <Col md="2" className="build-category-column">
                            <div onClick={() => getPosts('office')}>
                                <CategoryCard
                                    width="150px"
                                    title="Office PC"
                                    backgroundImg={OfficeBackgroundImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(82,76,67,0.5) 0%, rgba(158,120,79,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(82,76,67,1) 0%, rgba(158,120,79,1) 100%)"
                                />
                            </div>
                        </Col>
                        <Col md="2" className="build-category-column">
                            <div onClick={() => getPosts('laptop')}>
                                <CategoryCard
                                    width="150px"
                                    title="Laptop"
                                    backgroundImg={LaptopBackgroundImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(28,88,119,0.5) 0%, rgba(166,130,101,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(28,88,119,1) 0%, rgba(166,130,101,1) 100%)"
                                />
                            </div>
                        </Col>
                        <Col md="2" className="build-category-column">
                            <div onClick={() => getPosts('mini')}>
                                <CategoryCard
                                    width="150px"
                                    title="Mini PC"
                                    backgroundImg={MiniPCImage}
                                    gradientOverlay="linear-gradient(90deg, rgba(49,131,1,0.5) 0%, rgba(72,50,46,0.5) 100%)"
                                    gradientShadow="linear-gradient(90deg, rgba(49,131,1,1) 0%, rgba(72,50,46,1) 100%)"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                {
                    loading
                        ? <LoadingBars />
                        : componentRender
                }

            </Container>
            <Footer />
        </div>
    )
}

export default Build;