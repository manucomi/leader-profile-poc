import React from 'react';

import logo from '../assets/HBR_logo_black.svg';

const NavBar = () => {
  return (
    <nav className='bg-white'>
      <div className='mx-auto max-w-6xl px-4'>
        <div className='flex justify-between'>
          <div className='flex items-center space-x-7'>
            <a href='#' className='flex items-center py-4 px-2'>
              <svg
                className='h-8 w-6'
                alt='Navigation Menu'
                aria-labelledby='title'
                viewBox='0 0 24 24'
              >
                <title>Navigation Menu</title>

                <g>
                  <path d='M24,3.5H0V4.6H3.37V21H20.62V4.6H24ZM19.53,19.9H4.47v-15H19.53Z'></path>
                  <rect x='7.5' y='8.07' width='9' height='1.1'></rect>
                  <rect x='7.5' y='15.57' width='9' height='1.1'></rect>
                  <rect x='7.5' y='11.82' width='9' height='1.1'></rect>
                </g>
              </svg>
            </a>
            <div className='h-8 border-l-2 border-gray-400 px-3'>
              <a href='' className='flex items-center justify-end'>
                <img src={logo} alt='Logo' className='-pt-1 ml-4 h-8' />
              </a>
            </div>

            <div className='hidden items-center space-x-1 md:flex'>
              {/* Menu items */}
            </div>
          </div>

          <div className='flex items-center'>
            <a href='' className='py-2 px-2 text-sm font-medium text-gray-900'>
              Sign In
            </a>
          </div>
        </div>
      </div>

      <div className='mobile-menu hidden'>
        <ul className=''>
          <li className='active'>
            <a
              href='index.html'
              className='bg-green-500 block px-2 py-4 text-sm font-semibold text-white'
            >
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
