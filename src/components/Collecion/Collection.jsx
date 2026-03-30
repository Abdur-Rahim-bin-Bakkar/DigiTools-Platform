import React from 'react';
import ColleCard from './ColleCard';

const Collection = ({ card, setCard }) => {
    // console.log(card, setCard)
    return (
        <div className=" md:px-25 m-5">
            <div className='card border-2 border-[#F2F2F2] p-5 '>
                <h1 className='font-bold text-2xl'>Your Cart</h1>
                {
                    card.map(data=> <ColleCard data={data} card={card} setCard={setCard} />)
                }
            </div>
        </div>
    );
};

export default Collection;