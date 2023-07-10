import React from 'react';
import GridBanner from './GridBanner';

const Home = ({ bannerUrl }) => {
  return (
    <div>
      <GridBanner bannerUrl={bannerUrl} />
    </div>
  );
};

export default Home;
