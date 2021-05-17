import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { getRecommendation } from '../../../../Client/RecommendService';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import ProductSuggestionCard from './suggestion-card/suggestion-card';
import LoadingBars from '../../../../Components/Page/LoadingBars';

const Arrow = (text) => (
  <div style={{ cursor: 'pointer' }}>
    {text}
  </div>
)

const SuggestionBlock = ({ product_type }) => {
  const [recommendations, setRecommendations] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const recommendationResult = await getRecommendation(product_type, '');
      if (recommendationResult.data) {
        setRecommendations(recommendationResult.data)
      }
      setLoading(false);
    }

    fetch();
  }, [product_type])

  const handleSeeMoreClick = () => {
    let temp_product_type = product_type
    switch (product_type) {
      case 'mainboard':
        temp_product_type = 'motherboard'
        break;
      case 'gpu':
        temp_product_type = 'video-card'
        break;
      case 'psu':
        temp_product_type = 'power'
        break;
      case 'ram':
        temp_product_type = 'memory'
        break;
      default:
        break;
    }
    history.push(`/products/${temp_product_type}`);
    window.scrollTo(0, 0)
  }

  const componentRender = (
    <div className={`suggestion-block ${product_type}`}>
      {
        (() => {
          if (recommendations.content) {
            const recommendationRender = [];
            recommendations.content.forEach((product) => {
              recommendationRender.push(
                <ProductSuggestionCard
                  key={product.id}
                  name={product.fullname}
                  link={`/products/${product_type}/${product.id}`}
                  img={product.image}
                  price={product.minPrice}
                />
              )
            })
            return (
              <>
                <ScrollMenu
                  wheel={false}
                  data={recommendationRender}
                  arrowLeft={Arrow('<')}
                  arrowRight={Arrow('>')}
                  translate="-250"
                />
                <br />
                <Button color="primary" onClick={() => handleSeeMoreClick()} block>See more</Button>
                <br />
              </>
            )
          } else return null;
        })()
      }
    </div>
  )

  return (
    <>
      {
        loading
          ? <LoadingBars />
          : componentRender
      }
    </>
  );
}

export default SuggestionBlock;