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
                    width="100%"
                    height="440px"
                    title=""
                    fontSize="xxx-large"
                    linkTo="/list"
                    backgroundImg={CardBackground}
                    gradientShadow="linear-gradient(90deg, rgba(187,30,30,1) 0%, rgba(15,167,7,1) 50%, rgba(0,69,255,1) 100%);"
                />
            </Container>
        </>
    )
}

export default BuildYourOwnPC;