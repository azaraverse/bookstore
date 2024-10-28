import React from 'react';
import { Link } from 'react-router-dom';
import { GiWhiteBook } from "react-icons/gi";
import { RiSearch2Line } from "react-icons/ri";
import { PiUserFill } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { FaOpencart } from "react-icons/fa";
import avatarIcon from "../assets/avatar.png";

const Navbar = () => {
  let currentUser = true;

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        {/** left section */}
        <div className='flex items-center md:gap-16 gap-4'>
          {/** bookstore logo */}
          <Link to='/'>
            <GiWhiteBook className='size-8' />
          </Link>

          {/** search bar */}
          <div className='relative sm:w-72 w-40 space-x-1'>
            <RiSearch2Line className='absolute inline-block left-3 right-3 inset-y-2' />
            <input type="text" name="Search input" id="_search" placeholder='Search for specific books...' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
          </div>
        </div>

        {/** right section */}
        <div className='relative flex items-center md:space-x-3 space-x-2'>
          <div>
            {
              currentUser ? (
              <button>
                <img
                  src={avatarIcon}
                  alt="User Avatar"
                  className='w-7 h-7 rounded-full ring-2 ring-blue-500 ring-offset-2 ring-offset-white'
                />
              </button>
              ) : (
              <Link to='/login'>
                <PiUserFill className='size-6'/>
              </Link>
              )
            }
          </div>
          <button className='hidden sm:block'>
            <GoHeart className='size-6' />
          </button>

          <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md'>
            <FaOpencart className='' />
            <span className='text-sm font-semibold sm:ml-1'>0</span>
          </Link>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;
