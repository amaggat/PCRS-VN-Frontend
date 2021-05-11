import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import ScrollMenu from 'react-horizontal-scrolling-menu';
import ProductSuggestionCard from './suggestion-card/suggestion-card';

const cpu_data = [
  {
    name: 'Intel i9-10900KF',
    id: 'intel-i9-10900KF',
    image: 'https://hanoicomputercdn.com/media/product/52358_intel_i9_10900k.jpg',
    price: '12,799,000 VND',
    seller: 'HanoiComputer',
    rating: '2.5'
  },
  {
    name: 'Intel i7-8700K',
    id: 'intel-i7-8700K',
    image: 'https://dgt.net.vn/wp-content/uploads/2018/11/I7-8700K3.jpg',
    price: '9,399,000	VND',
    seller: 'HanoiComputer',
    rating: '4.8'
  },
  {
    name: 'AMD Ryzen 9-5950X',
    id: 'amd-ryzen-9-5950x,',
    image: 'https://anphat.com.vn/media/product/34976_ryzen_9_5950x.jpg',
    price: '20,900,000 VND',
    seller: 'An Phát Computer',
    rating: '3.5'
  },
  {
    name: 'AMD Ryzen 5-5600X',
    id: 'amd-ryzen-5-5600x',
    image: 'https://anphat.com.vn/media/product/34979_ryzen_5_5600x.jpg',
    price: '7,900,000 VND',
    seller: 'Hanoi Computer',
    rating: '1.2'
  }
];

const gpu_data = [
  {
    name: 'MSI RTX 3080 Ventus',
    id: 'msi-geforce-rtx-3080-ventus-3x-oc',
    price: '21,799,000 VND',
    seller: 'HanoiComputer',
    rating: '2.5'
  },
  {
    name: 'Intel i7-8700K',
    id: 'intel-i7-8700K',
    price: '9,399,000	VND',
    seller: 'HanoiComputer',
    rating: '4.8'
  },
  {
    name: 'AMD Ryzen 9-5950X',
    id: 'amd-ryzen-9-5950x,',
    price: '20,900,000 VND',
    seller: 'An Phát Computer',
    rating: '3.5'
  },
  {
    name: 'AMD Ryzen 5-5600X',
    id: 'amd-ryzen-5-5600x',
    price: '7,900,000 VND',
    seller: 'Hanoi Computer',
    rating: '1.2'
  },
  {
    name: 'Intel i5-9400F',
    id: 'intel-i5-9400F',
    price: '3,490,000 VND',
    seller: 'An Phat Computer',
    rating: '5.0'
  }
]

const Arrow = ({ text, className }) => {
  return (
    <div className={className}>{text}</div>
  );
};


const SuggestionBlock = ({ product_type }) => {
  let product_list;
  if (product_type === 'cpu') {
    product_list = cpu_data.map((data, index) => (
      <Col md="2.25">
        <ProductSuggestionCard
          name={data.name}
          price={data.price}
          seller={data.seller}
          img={data.image || 'https://product.hstatic.net/1000026716/product/intel-core-i9-comet-lake-s_bf8d9132386e42e48846d70d2f20fb8e.jpg'}
          rating={data.rating}
          key={data.name + '-' + data.seller}
          link={`products/cpu/${data.id}`}
        />
      </Col>
    ));
  } else {
    product_list = gpu_data.map((data, index) => (
      <Col md="2.25">
        <ProductSuggestionCard
          name={data.name}
          price={data.price}
          seller={data.seller}
          img="https://product.hstatic.net/1000026716/product/intel-core-i9-comet-lake-s_bf8d9132386e42e48846d70d2f20fb8e.jpg"
          rating={data.rating}
          key={data.name + '-' + data.seller}
        />
      </Col>
    ));
  }

  return (
    <div className={`suggestion-block ${product_type}`}>
      {/* <ScrollMenu
        alignCenter={true}
        data={product_list}
        arrowLeft={Arrow({ text: '<', className: 'arrow-left' })}
        arrowRight={Arrow({ text: '>', className: 'arrow-right' })}
      /> */}
      <Row>
        {product_list}
      </Row>
    </div>
  );
}

export default SuggestionBlock;