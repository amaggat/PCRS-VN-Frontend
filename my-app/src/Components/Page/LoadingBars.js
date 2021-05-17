import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingBars = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Loader
      type="Bars"
      color="#191B2B"
      height={80}
      width={80}
    />
  </div>
)

export default LoadingBars;