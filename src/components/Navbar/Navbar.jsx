import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ card }) => {
    return (
        <div className="navbar bg-base-100  md:px-25 fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <h1 className='text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text'><span className='text-transparent'>DigTools</span></h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-[#101727] flex gap-5">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>


                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <div className="relative boder">
                    {
                        card.length > 0 &&
                        <div className='absolute -top-3 -right-4 bg-red-500 font-bold w-6 rounded-full flex justify-center items-center h-6 text-white'>{card.length}</div>


                    }
                    <FiShoppingCart className='text-2xl'></FiShoppingCart>
                </div>
                <p className='text-[#101727]'>Login</p>
                <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white font-semibold">Get Started</a>

            </div>
        </div>
    );
};

export default Navbar;