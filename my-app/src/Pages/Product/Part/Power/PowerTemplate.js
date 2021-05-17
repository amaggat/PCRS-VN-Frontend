import React, { useEffect, useState } from 'react';
import StarRating from 'react-star-ratings';
import ScrollableMenu from 'react-horizontal-scrolling-menu';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'

import Footer from '../../../../Components/Footer/Footer';
import Header from '../../../../Components/Header/Header';
import img from './power-demo.jpeg';

import '../ProductSample.css';

import { useParams } from 'react-router-dom';
import PowerService from '../../../../Client/PowerService';
import LoadingBars from '../../../../Components/Page/LoadingBars';

import ImageSlider from '../../../../Components/Page/ImageSlider'
import formatMoney from '../../../../Components/Page/CurrencyFormat';
import ProductSuggestionCard from '../../../Home/product-suggestion-section/suggestion-block/suggestion-card/suggestion-card';
import { RatingService } from '../../../../Client/RatingService';
import { getRecommendation } from '../../../../Client/RecommendService';
import Loader from 'react-loader-spinner';

function PowerTemplate() {
  const { id } = useParams();
  const [recommendations, setRecommendations] = useState({});
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [power, setPower] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const psuResult = await PowerService.getPowerbyID(id);
        const recommendationResult = await getRecommendation('psu', id);
        if (psuResult.data) {
          setPower(psuResult.data);
          setRating(psuResult.data.psuRating ? psuResult.data.psuRating.rating : 0);
          setAverageRating(psuResult.data.averageRating || 0);
        }
        if (recommendationResult.data) {
          setRecommendations(recommendationResult.data);
        }
      } catch (error) {
        toast.error(`Error: ${error}`);
      }
      setLoading(false);
    }

    fetch();
  }, [id])

  const handleChangeRating = async (newRating, name) => {
    const result = await RatingService({
      type: 'psu',
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
      console.error('RATING ERROR: ', result);
    }
    console.log(result);
  }

  const Arrow = (text) => (
    <div style={{ cursor: 'pointer' }}>
      {text}
    </div>
  )

  const componentRender = (
    <>
      <div className="row">
        <div className="col-lg-4 left">
          <div className="block img">
            {/* <ImageSlider arr={power.priceList?.map(element => { return (element) })} img={img} /> */}
            <img src={power.image} style={{ maxWidth: '350px' }} />
          </div>
          <div className="block action form-group row justify-content-md-center">
            <div className="col-lg action-function">
              <button type="button" className="btn btn-primary" onClick={() => PowerService.setPower2List(power)}>Add to your Build</button>
            </div>
          </div>
        </div>
        <div className="col-lg-7 right">
          <div className="block detail-text">
            <div className="detail-title row">Price</div>
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
                  power.priceList?.map(element => {
                    return (
                      <tr>
                        <td className="retailer-img vertical-container">
                          <img className="" src={element.retailer.logo} alt="retailer" />
                        </td>
                        <td className="base vertical-container">
                          <div className="vertical">
                            {formatMoney(+element.price)} VND
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

          <div className="block detail-text">
            <ul>
              <div className="detail-title ">Specifications</div>
            </ul>
            <ul>
              <div className="detail-block border-bottom">
                <p className="title">Manufacturer</p>
                <p className="body">{power.manufacturer}</p>
              </div>
            </ul>
            <ul>
              <div className="detail-block border-bottom">
                <p className="title">Efficiency Rating</p>
                <p className="body">{power.standard_80}</p>
              </div>
            </ul>
            <ul>
              <div className="detail-block border-bottom" id="serieName">
                <p className="title">Serie Name</p>
                <p className="body">{power.serieName}</p>
              </div>
            </ul>
            <ul>
              <div className="detail-block border-bottom" id="serieName">
                <p className="title">Chipset</p>
                <p className="body">{power.chipset}</p>
              </div>
            </ul>
            <ul>
              <div className="detail-block border-bottom" id="serieName">
                <p className="title">Wattage</p>
                <p className="body">{power.power}</p>
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
                rating={rating}
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
                rating={averageRating}
                starRatedColor="orange"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="5px"
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="block detail-text">
        <ul>
          <div className="detail-title">You may also like...</div>
        </ul>
        <ul>
          {
            (() => {
              if (recommendations.content) {
                const recommendationRender = [];
                recommendations.content.forEach((product) => {
                  recommendationRender.push(
                    <ProductSuggestionCard
                      key={product.id}
                      name={product.fullname}
                      link={`/products/Power/${product.id}`}
                      img={product.image}
                      price={product.minPrice}
                    />
                  )
                })
                return (
                  <ScrollableMenu
                    wheel={false}
                    data={recommendationRender}
                    arrowLeft={Arrow('<')}
                    arrowRight={Arrow('>')}
                  />
                )
              } else return null;
            })()
          }
        </ul>
      </div>
    </>
  )

  return (
    <div className="product-detail white-back">
      <Header />
      <div className="banner text-center">
        <p className="banner-title">PRODUCT DETAIL</p>
        <p className="banner-name">{power.fullname}</p>
      </div>

      <div className="w-container">
        {
          loading
            ? <LoadingBars />
            : componentRender
        }
      </div>
      <Footer />
    </div>
  )
}


export default PowerTemplate;