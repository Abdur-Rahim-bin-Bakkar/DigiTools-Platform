import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ data, card, setCard }) => {
    const [add, setAdd] = useState(false)
    const added = () => {
        const findData = card.find(ca => ca.id === data.id)
        if (findData) {
            toast.error("Already Added the item");
            return;
        }
        if (!findData) {

            setAdd(true)
            toast.success(`successfully added: ${data.name}`)
            setCard([...card, data])
        }

    }
    return (
        <div className='card p-5 m-4 border-2 border-[#F2F2F2] relative'>
            <div className={`absolute top-1  right-1 badge badge-soft ${data.tag === "New" && 'badge-success'} ${data.tag==="Best Seller" && 'badge-warning '} ${data.tag==="Popular" && "badge-primary"} font-bold`}>{data.tag}</div>
            <div className="flex-1">
                <h1 className='border border-[#F2F2F2] w-13 h-13 rounded-full flex justify-center items-center text-2xl'>{data.icon}</h1>
                <h1 className='text-2xl font-bold'>{data.name}</h1>
                <p className='my-4 text-[#627382]'>{data.description}</p>
                <h3 className='text-[#627382]'><span className='text-2xl font-bold text-black'>${data.price}</span>/{data.period}</h3>
                <ul className='my-3 space-y-2'>
                    {
                        data.features.map((fet, i) => {
                            return (
                                <li key={i} className='flex items-center gap-2'><FaCheck className='text-success' /> {fet}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <button onClick={added} className={`${add ? "bg-success" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} h-13 rounded-full text-white font-bold my-4`}>{`${add ? "Added to Card" : "Buy Now"} `}</button>
        </div>
    );
};

export default Card;