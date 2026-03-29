import React from 'react';
// import img from '../../assets/products/banner.png'
import image from '../../assets/banner.png';
import badge from '../../assets/badge.png';
import { CiPlay1 } from 'react-icons/ci';

const Hero = () => {
    return (
        <div className="hero  min-h-screen mt-7  md:px-25">
            <div className="hero-content flex-col lg:flex-row-reverse text-center md:text-start  gap-5">
                <img
                    src={image} className='h-120'
                />
                <div className='space-y-4'>
                    <div style={{ textIndent: "20px", width: "350px" }} className='mx-auto md:ml-0 bg-[#E1E7FF] rounded-full p-1  '> <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text flex  items-center'><img src={badge} alt="" className='ml-4' /><span className='text-transparent font-medium'>New: AI-Powered Tools Available</span></span></div>

                    <h1 className="text-5xl font-bold ">Supercharge Your Digital Workflow</h1>
                    <p className=" text-[#627382]">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>
                    <div className=" flex gap-4 justify-center md:justify-start">
                        <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold'>Explore Products</button>
                        <button className="btn btn-outline btn-primary rounded-full"><CiPlay1></CiPlay1> Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;