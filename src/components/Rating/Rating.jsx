import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 md:px-20 flex gap-5 md:gap-20 justify-center my-10'>
            <div className="border-r-2 pr-15 border-r-[#975cfa]">
                <h1 className='text-5xl text-white font-bold'>50K+</h1>
                <p className='text-[rgba(255,255,255,0.56)] mt-1'>Active Users</p>
            </div>
            <div className="border-r-2 pr-15 border-r-[#975cfa]">
                <h1 className='text-5xl text-white font-bold'>200+</h1>
                <p className='text-[#FFFFFF90] mt-1'>Premium Tools</p>
            </div>
            <div className="">
                <h1 className='text-5xl text-white font-bold'>4.9</h1>
                <p className='text-[#FFFFFF90] mt-1'>Rating</p>
            </div>
        </div>
    );
};

export default Rating;