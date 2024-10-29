import React from 'react';
import footerLogo from '../assets/footer-logo.png';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='font-primary bg-secondary text-white py-10 px-8'>
      {/**top section */}
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-10'>
        {/**to the left - logo & nav */}
        <div className='md:w-1/2 w-full'>
          <img src={footerLogo} alt="Brand Logo" className='mb-5 w-36' />
          <ul className='flex flex-col md:flex-row gap-4'>
            <li><a href="#home" className='hover:text-primary'>Home</a></li>
            <li><a href="#services" className='hover:text-primary'>Services</a></li>
            <li><a href="#about" className='hover:text-primary'>About</a></li>
            <li><a href="#contact" className='hover:text-primary'>Contact</a></li>
          </ul>
        </div>

        {/**to the right - newsletter */}
        <div className='md:w-1/2 w-full'>
          <p className='mb-4'>
            Subscribe to our newsletter to receive the latest updates, news and offers!
          </p>

          <div className='flex gap-4'>
            <input
              type="email"
              placeholder='Enter your email'
              className='w-full px-4 py-2 rounded-lg'
            />

            <button className='bg-primary px-6 py-2 rounded-lg hover:bg-secondary hover:shadow-2xl'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/**bottom section */}
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-500 pt-6'>
        {/**to the left - privacy links */}
        <ul className='flex gap-6 mb-4 md:mb-0'>
          <li><a href="#privacy" className='hover:text-primary'>Privacy Policy</a></li>
          <li><a href="#terms" className='hover:text-primary'>Terms of Service</a></li>
        </ul>

        {/**to the right - socials */}
        <div className='flex gap-6'>
          <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-primary'>
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer' className='hover:text-primary'>
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.twitter.com" target='_blank' rel='noopener noreferrer' className='hover:text-primary'>
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
