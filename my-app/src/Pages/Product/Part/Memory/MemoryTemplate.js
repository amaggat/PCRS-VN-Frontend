import React, { useState, useEffect } from 'react';
import StarRating from 'react-star-ratings';
import ScrollableMenu from 'react-horizontal-scrolling-menu';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

import Footer from '../../../../Components/Footer/Footer';
import Header from '../../../../Components/Header/Header';
import img from './memory-demo.jpeg';
import ProductSuggestionCard from '../../../Home/product-suggestion-section/suggestion-block/suggestion-card/suggestion-card';

import '../ProductSample.css';
import ImageSlider from '../../../../Components/Page/ImageSlider';
import { useParams } from 'react-router-dom';
import MemoryService from '../../../../Client/MemoryService';
import formatMoney from '../../../../Components/Page/CurrencyFormat';
import { RatingService } from '../../../../Client/RatingService';
import { getRecommendation } from '../../../../Client/RecommendService';
import LoadingBars from '../../../../Components/Page/LoadingBars';

function MemoryTemplate() {
  const { id } = useParams();
  const [recommendations, setRecommendations] = useState({});
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [memory, setMemory] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const ramResult = await MemoryService.getMemorybyID(id);
        const recommendationResult = await getRecommendation('ram', id);
        if (ramResult.data) {
          setMemory(ramResult.data);
          setRating(ramResult.data.ramRating ? ramResult.data.ramRating.rating : 0);
          setAverageRating(ramResult.data.averageRating || 0);
        }
        if (recommendationResult.data) {
          setRecommendations(recommendationResult.data);
        }
      } catch (error) {
        toast.error(`Error: ${error}`);
      }
      setLoading(false)
    }

    fetch();
  }, [id])

  const handleChangeRating = async (newRating, name) => {
    const result = await RatingService({
      type: 'ram',
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
            {/* <ImageSlider arr={memory.priceList?.map(element => { return (element) })} img={img} /> */}
            <img src={memory.image} style={{ maxWidth: '350px' }} />
          </div>
          <div className="block action form-group row justify-content-md-center">
            <div className="col-lg action-function">
              <button type="button" className="btn btn-primary" onClick={() => MemoryService.setMemory2List(memory)}>Add to your Build</button>
            </div>
          </div>
        </div>
        <div className="col-lg-7 right">
          <div className="block detail-text">
            <div className="detail-title">Price</div>
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
                    memory.priceList?.map(element => {
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

          </div>

          <div className="block detail-text">
            <ul>
              <div className="detail-title ">Specifications</div>
            </ul>
            <ul>
              <div className="detail-block border-bottom" id="manufaturer">
                <p className="title">Manufaturer</p>
                <p className="body">{memory.manufacturer}</p>
              </div>
            </ul>
            <ul>
              <div className="detail-block border-bottom" id="serieName">
                <p className="title">Serie Name</p>
                <p className="body">{memory.serieName}</p>
              </div>
            </ul>
            <ul>
              <div className="detail-block border-bottom" id="serieName">
                <p className="title">Size</p>
                <p className="body">{memory.sizeOfRam}</p>
              </div>
            </ul>
            <ul>
              <div className="detail-block border-bottom" id="serieName">
                <p className="title">Chipset</p>
                <p className="body">{memory.chipset}</p>
              </div>
            </ul>
            <ul>
              <div className="detail-block border-bottom" id="serieName">
                <p className="title">Clock speed</p>
                <p className="body">{memory.clockSpeed}</p>
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
                      link={`/products/cpu/${product.id}`}
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
                    translate="-200"
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
        <p className="banner-name">{memory.fullname}</p>
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

export default MemoryTemplate;