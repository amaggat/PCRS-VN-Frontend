import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import RetailerInformationCard from './retailer-information-card/retailer-information-card';
import { RetailerService } from '../../Client/RetailerService';

const sample_data = [
  {
    name: 'HanoiComputer',
    logo: 'http://theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=19423',
    description: 'HANOICOMPUTER, thành lập tháng 09 năm 2001, là một trong những doanh nghiệp tiên phong trong lĩnh vực Công nghệ thông tin tại Hà Nội.',
    rating: 4.5,
    link: 'https://hanoicomputer.com'
  },
  {
    name: 'HanoiComputer',
    logo: 'https://hanoicomputercdn.com/media/lib/logo-trang.png',
    description: 'HANOICOMPUTER, thành lập tháng 09 năm 2001, là một trong những doanh nghiệp tiên phong trong lĩnh vực Công nghệ thông tin tại Hà Nội.',
    rating: 4.5,
    link: 'https://hanoicomputer.com'
  },
  {
    name: 'HanoiComputer',
    logo: 'https://hanoicomputercdn.com/media/lib/logo-trang.png',
    description: 'HANOICOMPUTER, thành lập tháng 09 năm 2001, là một trong những doanh nghiệp tiên phong trong lĩnh vực Công nghệ thông tin tại Hà Nội.',
    rating: 4.5,
    link: 'https://hanoicomputer.com'
  },
  {
    name: 'HanoiComputer',
    logo: 'https://hanoicomputercdn.com/media/lib/logo-trang.png',
    description: 'HANOICOMPUTER, thành lập tháng 09 năm 2001, là một trong những doanh nghiệp tiên phong trong lĩnh vực Công nghệ thông tin tại Hà Nội.',
    rating: 4.5,
    link: 'https://hanoicomputer.com'
  },
  {
    name: 'HanoiComputer',
    logo: 'https://hanoicomputercdn.com/media/lib/logo-trang.png',
    description: 'HANOICOMPUTER, thành lập tháng 09 năm 2001, là một trong những doanh nghiệp tiên phong trong lĩnh vực Công nghệ thông tin tại Hà Nội.',
    rating: 4.5,
    link: 'https://hanoicomputer.com'
  },
  {
    name: 'HanoiComputer',
    logo: 'https://hanoicomputercdn.com/media/lib/logo-trang.png',
    description: 'HANOICOMPUTER, thành lập tháng 09 năm 2001, là một trong những doanh nghiệp tiên phong trong lĩnh vực Công nghệ thông tin tại Hà Nội.',
    rating: 4.5,
    link: 'https://hanoicomputer.com'
  },
  {
    name: 'HanoiComputer',
    logo: 'https://hanoicomputercdn.com/media/lib/logo-trang.png',
    description: 'HANOICOMPUTER, thành lập tháng 09 năm 2001, là một trong những doanh nghiệp tiên phong trong lĩnh vực Công nghệ thông tin tại Hà Nội.',
    rating: 4.5,
    link: 'https://hanoicomputer.com'
  },
  {
    name: 'HanoiComputer',
    logo: 'https://hanoicomputercdn.com/media/lib/logo-trang.png',
    description: 'HANOICOMPUTER, thành lập tháng 09 năm 2001, là một trong những doanh nghiệp tiên phong trong lĩnh vực Công nghệ thông tin tại Hà Nội.',
    rating: 4.5,
    link: 'https://hanoicomputer.com'
  },
  {
    name: 'HanoiComputer',
    logo: 'https://hanoicomputercdn.com/media/lib/logo-trang.png',
    description: 'HANOICOMPUTER, thành lập tháng 09 năm 2001, là một trong những doanh nghiệp tiên phong trong lĩnh vực Công nghệ thông tin tại Hà Nội.',
    rating: 4.5,
    link: 'https://hanoicomputer.com'
  },
  {
    name: 'HanoiComputer',
    logo: 'https://hanoicomputercdn.com/media/lib/logo-trang.png',
    description: 'HANOICOMPUTER, thành lập tháng 09 năm 2001, là một trong những doanh nghiệp tiên phong trong lĩnh vực Công nghệ thông tin tại Hà Nội.',
    rating: 4.5,
    link: 'https://hanoicomputer.com'
  }
]

const RetailersPage = () => {
  const [retailers, setRetailers] = useState([]);

  useEffect(() => {
    const fetchRetailers = async () => {
      const result = await RetailerService();
      setRetailers(result.data.content)
    }

    fetchRetailers();
  }, [])

  return (
    <div className="retailers white-back">
      <Header />
      <div className="banner" style={{ background: "#B18C5A" }}>
        <h1 className="text-center">RETAILERS</h1>
      </div>
      <br />
      <Container style={{ height: '500px' }}>
        <Row>
          {
            retailers.map((retailer) => (
              <Col md="4" style={{ display: 'flex', justifyContent: 'center' }}>
                <RetailerInformationCard
                  name={retailer.name}
                  description={retailer.description}
                  link={retailer.shop}
                  facebook={retailer.facebook}
                  logo={retailer.logo}
                  rating={retailer.avgRetailerRating || 4.3}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
      <br />
      <Footer />
    </div>
  )
}

export default RetailersPage;