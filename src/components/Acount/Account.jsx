import React from 'react';
import user from '../../assets/user.png'
import rocket from '../../assets/rocket.png'
import pack from '../../assets/package.png'

const Account = () => {
    return (
        <div className='bg-[#F9FAFC] py-15 md:px-5 text-center'>
            <h1 className='text-2xl font-bold'>Get Started in 3 Steps</h1>
            <p className='text-[#627382] py-5'>Start using premium digital tools in minutes, not hours.</p>
            <div className="grid md:grid-cols-3 p-4 gap-5">
                <div className="card bg-white relative shadow">
                    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full text-white font-bold flex justify-center items-center absolute top-3 right-3">1</div>
                    <div className="bg-[#f3e8fe] w-20 mx-auto mt-15 flex items-center justify-center p-2 rounded-full">
                        <img src={user} alt="" className='' />
                    </div>
                    <div className="card-body">
                        <h1 className='font-bold text-2xl'>Create Account</h1>
                        <p className='text-[#627382] py-5'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="card bg-white relative shadow">
                    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full text-white font-bold flex justify-center items-center absolute top-3 right-3">2</div>
                    <div className="bg-[#f3e8fe] w-20 mx-auto mt-15 flex items-center justify-center p-2 rounded-full">
                        <img src={pack} alt="" className='' />
                    </div>
                    <div className="card-body">
                        <h1 className='font-bold text-2xl'>Create Account</h1>
                        <p className='text-[#627382] py-5'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="card bg-white relative shadow">
                    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full text-white font-bold flex justify-center items-center absolute top-3 right-3">3</div>
                    <div className="bg-[#f3e8fe] w-20 mx-auto mt-15 flex items-center justify-center p-2 rounded-full">
                        <img src={rocket} alt="" className='' />
                    </div>
                    <div className="card-body">
                        <h1 className='font-bold text-2xl'>Create Account</h1>
                        <p className='text-[#627382] py-5'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;