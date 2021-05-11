import React, { Component } from 'react';
import { Container, Form, Row } from 'react-bootstrap';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProfileService from '../../Client/ProfileService';
import BuildTag from './BuildTag';

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
                    {/* <div className="row block section-title">Desktop / Gaming / Streaming</div> */}
                    {/* <Form>
                            <Form.Label>Filter</Form.Label>
                            <Form.Control>
                                <Form.Check
                                    type="checkbox"
                                    label="Gaming"
                                    value="gaming"
                                    id="checkbox-gaming"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Streaming"
                                    value="streaming"
                                    id="checkbox-streaming"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Laptop"
                                    value="laptop"
                                    id="checkbox-laptop"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Low-end gaming"
                                    value="gaming"
                                    id="checkbox-lowend"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Mainstream gaming"
                                    value="mainstream"
                                    id="checkbox-mainstream"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="High-end gaming"
                                    value="highend"
                                    id="checkbox-highend"
                                />
                            </Form.Control>
                    </Form> */}
                    <div className="row block">
                        {
                            posts.map(
                                post =>
                                    <div className="col-lg-3">
                                        <BuildTag post={post} />
                                    </div>
                            )
                        }
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Build;