import React, { useEffect, useState } from 'react';
import StarRating from 'react-star-ratings';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

import Footer from '../../../../Components/Footer/Footer';
import Header from '../../../../Components/Header/Header';
import img from './hdd-demo.jpeg';
import { RatingService } from '../../../../Client/RatingService';
import { getRecommendation } from '../../../../Client/RecommendService';
import ScrollableMenu from 'react-horizontal-scrolling-menu';
import ProductSuggestionCard from '../../../Home/product-suggestion-section/suggestion-block/suggestion-card/suggestion-card';

import '../ProductSample.css';

import HDDService from '../../../../Client/HDDService';

import ImageSlider from '../../../../Components/Page/ImageSlider'
import formatMoney from '../../../../Components/Page/CurrencyFormat';
import LoadingBars from '../../../../Components/Page/LoadingBars';

function SSDTemplate() {
  const { id } = useParams();
  const [hdd, setHDD] = useState({});
  const [recommendations, setRecommendations] = useState({});
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const hddResult = await HDDService.getHDDbyID(id);
        const recommendationResult = await getRecommendation('hdd', id);
        if (hddResult.data) {
          setHDD(hddResult.data);
          setRating(hddResult.data.hddRating ? hddResult.data.hddRating.rating : 0);
          setAverageRating(hddResult.data.averageRating || 0);
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
      type: 'hdd',
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
            {/* <ImageSlider arr={hdd.priceList?.map(element => { return (element) })} img={img} /> */}
            <img src={hdd.image} style={{ maxWidth: '350px' }} />
          </div>
          <div className="block action form-group row justify-content-md-center">
            <div className="col-lg action-function">
              <button type="button" className="btn btn-primary" onClick={() => HDDService.setHDD2List(hdd)}>Add to your Build</button>
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
                  hdd.priceList?.map(element => {
                    return (
                      <tr>
                        <td className="retailer-img vertical-container">
                          <img className="" src={element.retailer.logo} alt="retailer" />
                        </td>
                        <td className="base vertical-container">
                          <div className="vertical">
                            {formatMoney(+element.price)}VND
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
                <p className="body">{hdd.manufacturer}</p>
              </div>
            </ul>
            <ul>
              <div className="detail-block border-bottom">
                <p className="title">Size</p>
                <p className="body">{hdd.size}</p>
              </div>
            </ul>
            <ul>
              <div className="detail-block border-bottom" id="serieName">
                <p className="title">Serie Name</p>
                <p className="body">{hdd.serieName}</p>
              </div>
            </ul>
            <ul>
              <div className="detail-block border-bottom" id="serieName">
                <p className="title">Chipset</p>
                <p className="body">{hdd.chipset}</p>
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
                      link={`/products/hdd/${product.id}`}
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
        <p className="banner-name">{hdd.fullname}</p>
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


export default SSDTemplate;