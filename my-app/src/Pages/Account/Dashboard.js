import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Dashboard = () => {
  return (
    <div className="build white-back">
      <Header />
      <div className="banner">
        <h1 className="text-center">DASHBOARD</h1>
      </div>
      <Container>
        <div className="row block-title">My Favourites</div>
        <div className="row block-title">My Build Collection</div>
      </Container>
      <Footer />
    </div>
  )
}

export default Dashboard