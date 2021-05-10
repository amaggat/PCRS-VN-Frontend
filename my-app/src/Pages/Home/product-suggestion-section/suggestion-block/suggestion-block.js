import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import ProductSuggestionCard from './suggestion-card/suggestion-card';

const sample_data = [
  {
    name: 'Intel Ryzen 6900',
    price: '20.000.000 VND',
    seller: 'Phong Vũ',
    rating: '2.5'
  },
  {
    name: 'AMD i9 - 69000K',
    price: '9.000.000 VND',
    seller: 'HanoiComputer',
    rating: '4.8'
  },
  {
    name: 'NOVIDEO NV1 ARM CPU',
    price: '5.000.000 VND',
    seller: 'An Phát Computer',
    rating: '3.5'
  },
  {
    name: 'Shintel Athlon 6000G',
    price: '1.000.000 VND',
    seller: 'Fuzeless Computer',
    rating: '1.2'
  },
  {
    name: 'AMD Celeron 60K1',
    price: '500.000 VND',
    seller: 'Phong Vũ',
    rating: '5.0'
  },
  {
    name: 'Apple M4X',
    price: '5.900.000 VND',
    seller: 'Phong Vũ',
    rating: '4.5'
  },
  {
    name: 'Shintel EPYC 6700X',
    price: '40.000.000 VND',
    seller: 'GearsVN',
    rating: '4.0'
  }
];

const Arrow = ({ text, className }) => {
  return (
    <div className={className}>{text}</div>
  );
};


const SuggestionBlock = ({ product_type }) => {
  const product_list = sample_data.map((data, index) => (
    <ProductSuggestionCard
      name={data.name}
      price={data.price}
      seller={data.seller}
      img="https://product.hstatic.net/1000026716/product/intel-core-i9-comet-lake-s_bf8d9132386e42e48846d70d2f20fb8e.jpg"
      rating={data.rating}
      key={data.name + '-' + data.seller}
    />
  ));

  return (
    <div className={`suggestion-block ${product_type}`}>
      <ScrollMenu
        alignCenter={true}
        data={product_list}
        arrowLeft={Arrow({ text: '<', className: 'arrow-left' })}
        arrowRight={Arrow({ text: '>', className: 'arrow-right' })}
      />
    </div>
  );
}

export default SuggestionBlock;