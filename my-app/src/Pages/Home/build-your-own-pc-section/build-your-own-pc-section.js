import React from 'react';
import { Container } from 'react-bootstrap';
import CategoryCard from '../category-card/category-card';
import CardBackground from '../../../Components/Sources/Category-Background-Images/BYOP.jpg'

const BuildYourOwnPC = () => {
    return (
        <>
            {/* Space on top */}
            <br />
            <Container className="build-guide">
                <div className="block-title">Build your own PC</div>
                <CategoryCard
                    isCategoryCard
                    width="100%"
                    height="440px"
                    title=""
                    fontSize="xxx-large"
                    linkTo="/list"
                    backgroundImg={CardBackground}
                    gradientShadow="linear-gradient(90deg, rgba(131,0,0,1) 0%, rgba(3,130,0,1) 50%, rgba(5,0,102,1) 100%);"
                />
            </Container>
        </>
    )
}

export default BuildYourOwnPC;