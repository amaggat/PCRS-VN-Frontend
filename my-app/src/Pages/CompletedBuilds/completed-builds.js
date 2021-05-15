import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const CompletedBuilds = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        
    })

    return (
        <div className="build white-back">
            <Header />
            <div className="banner">
                <h1 className="text-center">BUILD COLLECTION</h1>
            </div>
            {

            }
            <Footer />
        </div>
    )
}

export default CompletedBuilds