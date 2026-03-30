import React from 'react';
import check from '../../assets/Check.png'

const Pricing = () => {
    return (
        <div className='py-10 px-3 '>
            <h1 className='text-3xl font-bold text-center'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382] text-center mt-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>


            <div className=" md:px-25 grid md:grid-cols-3 gap-5 mt-10 pb-10">
                <div className="card bg-[#F2F2F2] border border-[#F2F2F2] shadow-sm">
                    <div className="card-body">
                        

                        <h2 className="text-3xl font-bold">Starter</h2>
                        <p className='text-[#627382] my-3'>Perfect for getting started</p>
                        <span className="text-xl text-[#627382]"><span className='font-bold text-3xl text-black'>$0</span>/Month</span>

                        <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382] font-medium">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>

                        </ul>
                        <div className="mt-10">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full text-white font-bold">Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm text-white relative">
                    <div className="card-body">
                        <span className="badge badge-xs bg-[#FEF3C6] absolute -top-2 left-1/2 -translate-x-1/2 w-25 h-6 rounded-full mx-auto text-[#BB4D00] font-bold">Most Popular</span>

                        <h2 className="text-3xl font-bold">Pro</h2>
                        <p className=' my-3 text-base font-thin'>Best for professionals</p>
                        <span className="text-xl text-white]"><span className='font-bold text-3xl '>$29</span>/Month</span>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li className='flex items-center gap-2'><img src={check} alt="" />Access to all premium tools</li>
                            <li className='flex items-center gap-2'><img src={check} alt="" />Unlimited templates</li>
                            <li className='flex items-center gap-2'><img src={check} alt="" />Priority support</li>
                            <li className='flex items-center gap-2'><img src={check} alt="" />Unlimited projects</li>
                            <li className='flex items-center gap-2'><img src={check} alt="" />Cloud sync</li>
                            <li className='flex items-center gap-2'><img src={check} alt="" />Advanced analytics</li>

                        </ul>
                        <div className="mt-10">
                            <button className="btn bg-white btn-block rounded-full text-white font-bold"><span className='text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text'>Start Pro Trial</span></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#F2F2F2] border border-[#F2F2F2] shadow-sm">
                    <div className="card-body">
                    

                        <h2 className="text-3xl font-bold">Enterprise</h2>
                        <p className='text-[#627382] my-3'>For teams and businesses</p>
                        <span className="text-xl text-[#627382]"><span className='font-bold text-3xl text-black'>$99</span>/Month</span>

                        <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382] font-medium">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>

                        </ul>
                        <div className="mt-10">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full text-white font-bold">Get Started Free</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;