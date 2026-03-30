import React, { use } from 'react';
import Card from './Card';

const Main = ({fetchData,card,setCard}) => {
    const data = use(fetchData)
    // console.log(data)
    return (
        <div className='grid md:grid-cols-3 gap-5  md:px-25 '>
            {
                data.map(da=> <Card key={da.id} data={da} card={card}  setCard={setCard} />)
            }
        </div>
    );
};

export default Main;