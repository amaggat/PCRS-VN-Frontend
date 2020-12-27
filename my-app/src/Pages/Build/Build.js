import React, { Component } from 'react';
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

    render () {
        console.log(this.state.posts)
        return (
            <div className="build white-back">
                <Header />
                <div className="banner">
                    <h1 className="text-center">BUILD GUIDE</h1>
                </div>
                <div className="tab-pane w-container" id="pills-completed" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="row block section-title">Desktop / Gaming / Streaming</div>
                    <div className="row block">
                        {
                            this.state.posts.map(
                                post => 
                                <BuildTag post={post} />
                            )
                        }
                    </div>
                    
                    <div className="row block section-title">Desktop / Gaming</div>
                    
                    <div className="row block">
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Build;