import React, { useEffect, useState } from 'react';

import ProfileService from '../../Client/ProfileService';

import './Home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import BuildTag from '../Build/BuildTag';

import ProductSuggestionSection from './product-suggestion-section/product-suggestion-section';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        ProfileService.getProfiles({}).then((response) => {
            let temp = [];
            for (let i = 0; i < 2; ++i) {
                temp.push(response.data.content[i]);
            }
            setPosts(temp);
        }).catch(err => {
            console.log(err);
        });
    }, [])

    console.log(posts);


    return (
        <div className="home">
            <Header />
            <div className="grey-back build-home">
                <div className="row w-container block">
                    <div className="col text-content">
                        <div className="text-banner-wrap vertical-center">
                            <div className="text banner-title">Build Guides</div>
                            <div className="text banner-content">Building your own PC and need ideas on where to get started?
                            Explore our build guides which cover systems for a variety of use-cases and budgets.</div>
                            <div className="button"><a type="button" href="/list" className="btn btn-primary btn-lg">View the Build Guilde</a></div>
                        </div>
                    </div>
                    {
                        posts?.map(e =>
                            <div className="col">
                                <BuildTag post={e} />
                            </div>
                        )
                    }
                </div>
            </div>
            <ProductSuggestionSection />
            <Footer />
        </div>
    );
}

export default Home;