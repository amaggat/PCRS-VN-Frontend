import React, { useEffect, useState } from 'react';
import StarRating from 'react-star-ratings';
import Footer from '../../../../Components/Footer/Footer';
import Header from '../../../../Components/Header/Header';
import { toast } from 'react-toastify';

import img from './cpu-demo.jpeg';

import '../ProductSample.css';

import { Link, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

import CPUService from '../../../../Client/CPUService';

import ImageSlider from '../../../../Components/Page/ImageSlider'
import formatMoney from '../../../../Components/Page/CurrencyFormat';
import { RatingService } from '../../../../Client/RatingService';

function CPUTemplate() {
  const [cpu, setCPU] = useState({});
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    CPUService.getCPUbyID(id).then(response => {
      setCPU(response.data);
      setRating(response.data.cpuRating.rating);
      setAverageRating(response.data.averageRating);
      // console.info(response.data);
    })
      .catch(console.log);
  }, [id])

  const handleChangeRating = async (newRating, name) => {
    const result = await RatingService({
      type: 'cpu',
      productId: id,
      jwt: Cookies.get('jwt'),
      userId: Cookies.get('userId'),
      rating: newRating,
      favorite: true
    });
    if (result.data.success) {
      toast.dark(`Rating updated: ${newRating}/5 stars`);
      setRating(newRating)
    } else {
      toast.error('Error occured. Check console log for more details');
      console.error('RATING ERROR: ', result)
    }
    console.log(result)
  }

  return (
    <div className="product-detail white-back">
      <Header />
      <div className="banner text-center">
        <p className="banner-title">PRODUCT DETAIL</p>
        <p className="banner-name">{cpu.fullname}</p>
      </div>

      <div className="w-container">
        <div className="row">
          <div className="col-lg-4 left">
            {/* <ImageSlider arr={cpu.priceList?.map(element => { return (element) })} img={img} /> */}
            <img src={cpu.image} style={{ maxWidth: '350px' }} />
            <div className="block action form-group row justify-content-md-center">
              <div className="col-lg action-function">
                <button type="button" className="btn btn-primary" onClick={() => CPUService.setCPU2List(cpu)}>Add to your Build</button>
              </div>
            </div>
          </div>
          <div className="col-lg-7 right">
            <div className="block detail-text">
              <div className="detail-title row">Price</div>
              <div className="detail-price row">
                <table className="table table-hover detail-table">
                  <thead>
                    <tr>
                      <th scope="col">Retailer</th>
                      <th scope="col">Base</th>
                      <th scope="col">Promo</th>
                      <th scope="col">Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cpu.priceList?.map(element => {
                        return (
                          <tr>
                            <td className="retailer-img vertical-container">
                              <img className="" src={element.retailer.logo} alt="retailer" />
                            </td>
                            <td className="base vertical-container">
                              <div className="vertical">
                                {formatMoney(+element.price)}
                              </div>
                            </td>
                            <td className="promo vertical-container">
                              <div className="vertical text-center">
                                {element.promo ? element.promo : "-"}
                              </div>
                            </td>
                            <td className="total vertical-container">
                              <div className="vertical">
                                {element.promo ? formatMoney(+(element.promo * element.price)) : formatMoney(+element.price)}
                              </div>
                            </td>
                            <td className="buy-button vertical-container">
                              <a target="_blank" rel="noreferrer" className="btn btn-success vertical" href={element.link}>Buy</a>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="block detail-text">
              <ul>
                <div className="detail-title ">Specifications</div>
              </ul>
              <ul>
                <div className="detail-block border-bottom" id="manufaturer">
                  <p className="title">Manufacturer</p>
                  <p className="body">{cpu.manufacturer}</p>
                </div>
              </ul>
              <ul>
                <div className="detail-block border-bottom" id="serieName">
                  <p className="title">Series</p>
                  <p className="body">{cpu.serieName}</p>
                </div>
              </ul>
              <ul>
                <div className="detail-block border-bottom" id="serieName">
                  <p className="title">Core</p>
                  <p className="body">{cpu.cores}</p>
                </div>
              </ul>
              <ul>
                <div className="detail-block border-bottom" id="serieName">
                  <p className="title">Thread</p>
                  <p className="body">{cpu.threads}</p>
                </div>
              </ul>
              <ul>
                <div className="detail-block border-bottom" id="serieName">
                  <p className="title">Socket</p>
                  <p className="body">{cpu.socket}</p>
                </div>
              </ul>
            </div>
            <div className="block detail-text">
              <ul>
                <div className="detail-title">Ratings</div>
              </ul>
              <ul>
                Your score: &nbsp;
                <StarRating
                  rating={rating} //TODO: Add actual rating from response data
                  changeRating={(rating) => handleChangeRating(rating)}
                  starRatedColor="orange"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="5px"
                />
              </ul>
              <ul>
                Average score: &nbsp;
                <StarRating
                  rating={averageRating} //TODO: Add actual rating from response data
                  starRatedColor="orange"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="5px"
                />
                {` - voted by ${cpu.numberOfRating} users`}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CPUTemplate;