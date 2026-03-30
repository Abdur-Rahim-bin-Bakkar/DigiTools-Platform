import React from 'react';
import { toast } from 'react-toastify';

const ColleCard = ({ data, card, setCard }) => {
    // console.log(card, setCard)
    const filterData = ()=>{
        const newData = card.filter(d=> d.id !== data.id)
        console.log(newData)
        setCard([...newData])
        toast.warning(`Deleted: ${data.name}`)
    }
    return (
        <div className='card bg-[#F9FAFC] flex justify-between flex-row items-center p-2 my-4 '>
            <div className="flex gap-3 ">
                <h1 className='border border-[#F2F2F2] w-13 h-13 rounded-full flex justify-center items-center text-2xl bg-white'>{data.icon}</h1>
                <div className="">
                    <h2 className='font-bold text-lg'>{data.name}</h2>
                    <p className='text-[#627382]'>{data.price}/{data.period}</p>
                </div>
            </div>
            <h1 className='text-[#FF3980] font-bold ' onClick={filterData}>Remove</h1>
        </div>
    );
};

export default ColleCard;