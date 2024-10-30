import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiWhiteBook } from "react-icons/gi";
import { RiSearch2Line } from "react-icons/ri";
import { PiUserFill } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import avatarIcon from "../assets/avatar.png";
import { useSelector } from 'react-redux';

const navigation = [
  {
    name: "Dashboard", href: "/dashboard"
  },
  {
    name: "Orders", href: "/orders"
  },
  {
    name: "Cart", href: "/cart"
  },
  {
    name: "Checkout", href: "/checkout"
  },
]

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const currentUser = true;
  const cartItems = useSelector((state) => state.cart.cartItems);

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
              currentUser ? <>
              <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                <img
                  src={avatarIcon}
                  alt="User Avatar"
                  className='size-7 rounded-full ring-2 ring-blue-500'
                />
              </button>
              {/** display dropdown */}
              {
                isDropDownOpen && (
                  <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                    <ul className='py-2'>
                      {
                        navigation.map((item) => (
                          <li key={item.name} onClick={() => setIsDropDownOpen(false)}>
                            <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                              {item.name}
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )
              }
              </> : (
              <Link to='/login'>
                <PiUserFill className='size-6'/>
              </Link>
              )
            }
          </div>
          <button className='hidden sm:block'>
            <GoHeart className='size-6' />
          </button>

          <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md space-x-2 font-primary'>
            <HiMiniShoppingBag className='' />
            {
              cartItems.length > 0 ? <span className='text-sm font-semibold'>{ cartItems.length }</span> : <span className='text-sm font-semibold'>0</span>
            }
          </Link>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;
