import React from 'react';

const Tabs = ({tab, setTab,card}) => {
    return (
        <div className='pt-12 pb-5 text-center'>
            <h1 className='font-bold text-3xl'>Premium Digital Tools</h1>
            <p className='text-[#627382] pt-5 pb-2 max-w-[600px] mx-auto'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box bg-transparent justify-center gap-3 w-56 mx-auto border border-[#F6F6F6] rounded-full mt-3">
                <input onClick={()=> setTab(true)} type="radio" name="my_tabs_1" className={`tab w-25 rounded-full ${tab&& 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} font-bold`} aria-label="Products" defaultChecked/>
                
                <input onClick={()=> setTab(false)} type="radio" name="my_tabs_1" className={`tab w-25 rounded-full ${tab || 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} `} aria-label={`Cart (${card.length})`}  />
                
            </div>

        </div>
    );
};

export default Tabs;