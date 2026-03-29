import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-center py-15 px-4'>
            <h1 className=' text-2xl md:text-3xl text-white font-bold '>Ready to Transform Your Workflow?</h1>
            <p className='text-[#ffffff90] mt-4'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>

            <div className="mt-10 max-w-70 mx-auto space-x-3">
                <button className='btn bg-white text-[#4F39F6] font-semibold rounded-full'>Explore Products</button>

                <button className='btn bg-transparent text-[#ffffff90] font-semibold rounded-full'>View Pricing</button>
            </div>
            <p className='text-[#ffffff90] mt-4'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;