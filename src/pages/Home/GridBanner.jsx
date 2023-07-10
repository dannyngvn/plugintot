import React from 'react';
import './GridBanner.css';

const GridBanner = ({ bannerUrl }) => {
  return (
    <div className="parent">
      <div className="div1">
        <img src={bannerUrl.url.banner1} alt="Banner1" />
      </div>
      <div className="div2">
        <img src={bannerUrl.url.banner2} alt="Banner2" />
      </div>
      <div className="div3">
        <img src={bannerUrl.url.banner3} alt="Banner3" />
      </div>
    </div>
  );
};

export default GridBanner;
