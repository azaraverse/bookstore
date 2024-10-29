import React from 'react'
import Hero from './Hero';
import TopSales from './TopSales';
import Recommended from './Recommended';

const Home = () => {
  return (
    <div>
      <Hero />
      <TopSales />
      <Recommended />
    </div>
  )
}

export default Home;
