import React from 'react';
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={heroImg} alt="Hero Image" />
      </div>

      <div className='md:w-1/2 w-full'>
        <h1 className='font-primary md:text-5xl text-2xl font-bold mb-7'>This Week's Editions</h1>
        <p className='font-secondary mb-10'>Refresh your reading list with the latest must-reads from the literary world!
          This week's new releases span heart-pounding thrillers to mesmerizing memoirs, promising something unforgettable for every reader.
        </p>

        <button className='btn-primary'>Subscribe</button>
      </div>
    </div>
  )
}

export default Hero;
