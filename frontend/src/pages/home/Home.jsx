import React from 'react'
import Hero from './Hero';
import TopSales from './TopSales';
import Recommended from './Recommended';
import News from './News';

const Home = () => {
  return (
    <div>
      <Hero />
      <TopSales />
      <Recommended />
      <News />
    </div>
  )
}

export default Home;
