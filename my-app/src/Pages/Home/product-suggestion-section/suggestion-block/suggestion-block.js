import React from 'react';

const SuggestionBlock = ({ product_type }) => {
  return (
    <div className={`suggestion-block ${product_type}`}>
      {product_type}
    </div>
  );
}

export default SuggestionBlock;