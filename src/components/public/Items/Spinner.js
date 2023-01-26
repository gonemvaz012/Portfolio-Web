import React, { useState, useEffect } from 'react';

const Spinner = () => {

    const [count, setCount] = useState(0);

    /*setInterval(() => {
        if (count === 100) {
            console.log("hola")
            clearInterval()
        } else {
            setCount(count + 1)
        }
    }, 800)*/
    
    useEffect(() => {
        
    })



    return (
        <div className='circular'>
            <div className='inner'></div>
            <div className='numb' >{count}%</div>
            <div className='circle'>
                <div className='bar left'>
                    <div className='progress'></div>
                </div>
                <div className='bar right'>
                    <div className='progress'></div>
                </div>
            </div>
        </div>
    )
}

export default Spinner
