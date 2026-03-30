import React from 'react';
import ColleCard from './ColleCard';
import { toast } from 'react-toastify';
import { ImFilesEmpty } from 'react-icons/im';

const Collection = ({ card, setCard }) => {
    // console.log(card, setCard)
    const toatal = card.reduce((sum, i) => sum + i.price, 0)
    console.log(toatal)
    return (
        <div className=" md:px-25 m-5">
            <div className='card border-2 border-[#F2F2F2] p-5 '>
                <h1 className='font-bold text-2xl'>Your Cart</h1>

                {
                    card.length === 0 && <div className="">
                        <ImFilesEmpty className='text-center text-5xl mx-auto my-7' />
                        <p className='text-center'>Your Card is Empty</p>
                    </div>
                }
                {
                    card.length > 0 && <div className="">
                        {
                            card.map(data => <ColleCard key={data.id} data={data} card={card} setCard={setCard} />)
                        }
                        <div className='flex justify-between items-center'>
                            <h1 className='text-[#627382]'>Total</h1>
                            <h1 className='font-bold text-2xl'>${toatal}</h1>
                        </div>
                        <button onClickCapture={() => {
                            if (card.length > 0) {

                                toast.warning('All card clear')
                            }
                        }} className='btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white font-bold mt-3 w-full' onClick={() => setCard([])}>Proceed to Checkout</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Collection;