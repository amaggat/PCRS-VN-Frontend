import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { getUserBuilds } from '../../Client/AccountService';
import LoadingBars from '../../Components/Page/LoadingBars';
import BuildCard from '../Build/build-card';
import BuildImage from '../../Components/Sources/Category-Background-Images/build-card-image.png'

const BuildCollection = () => {
    const [builds, setBuilds] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            const result = await getUserBuilds();
            if (result.data) {
                setBuilds(result.data);
            }
            setLoading(false);
        }

        fetch();
    }, [])

    const componentRender = (
        <Row>
            {
                builds.content
                    ? builds.content.map((build) => (
                        <Col style={{ paddingBottom: '30px', display: 'flex', justifyContent: 'center' }}>
                            <BuildCard
                                name={build.name}
                                pcProfile={build}
                                image={BuildImage}
                                type={''}
                                price={build.price}
                            />
                        </Col>
                    ))
                    : null
            }
        </Row>
    )

    return (
        <>
            {
                loading
                    ? <LoadingBars />
                    : componentRender
            }
        </>
    )
}

export default BuildCollection;