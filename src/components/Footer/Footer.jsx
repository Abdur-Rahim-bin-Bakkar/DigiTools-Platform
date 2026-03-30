import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-15 text-white md:px-25 px-4'>
            <div className="grid md:grid-cols-7 gap-5 space-y-3 pb-15 mt-5 text-center md:text-start">
                <div className=" col-span-2">
                    <h1 className='font-bold text-3xl'>DigiTools</h1>
                    <p className='text-[#ffffff80] mt-5'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className="col-span-1">
                    <h1 className='font-bold text-lg'>Product</h1>
                    <ul className='mt-3 space-y-3'>
                        <li className='text-[#ffffff80]'>Features</li>
                        <li className='text-[#ffffff80]'>Pricing</li>
                        <li className='text-[#ffffff80]'>Templates</li>
                        <li className='text-[#ffffff80]'>Integrations</li>
                    </ul>
                </div>
                <div className="col-span-1"> 
                    <h1 className='font-bold text-lg'>Company</h1>
                    <ul className='mt-3 space-y-3'>
                        <li className='text-[#ffffff80]'>About</li>
                        <li className='text-[#ffffff80]'>Blog</li>
                        <li className='text-[#ffffff80]'>Careers</li>
                        <li className='text-[#ffffff80]'>Press</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h1 className='font-bold text-lg'>Resources</h1>
                    <ul className='mt-3 space-y-3'>
                        <li className='text-[#ffffff80]'>Documentation</li>
                        <li className='text-[#ffffff80]'>Help Center</li>
                        <li className='text-[#ffffff80]'>Community</li>
                        <li className='text-[#ffffff80]'>Contact</li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <h1 className='font-bold text-lg'>Social Links</h1>
                    <div className="flex gap-5 mt-3 justify-center md:justify-start">
                        <div className='hover:scale-110 duration-700 cursor-pointer flex justify-center items-center rounded-full text-2xl h-10 w-10 bg-white text-[#101727]'>
                            <AiFillInstagram />
                        </div>
                        <div className='hover:scale-110 duration-700 cursor-pointer flex justify-center items-center rounded-full text-2xl h-10 w-10 bg-white text-[#101727]'>
                            <FaFacebookSquare/>
                        </div>
                        <div className='hover:scale-110 duration-700 cursor-pointer flex justify-center items-center rounded-full text-2xl h-10 w-10 bg-white text-[#101727]'>
                            <FaXTwitter></FaXTwitter>
                        </div>
                    </div>
                </div>
            </div>
            <hr className=' bg-[#E5E7EB]'></hr>
            <div className="text-center md:text-start md:flex justify-between py-5">
                <p className='text-[#FAFAFA50] text-base '>© 2026 Digitools. All rights reserved.</p>
                <ul className='flex gap-3 text-[#FAFAFA50] justify-center mt-2 md:justify-start'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;