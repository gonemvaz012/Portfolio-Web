import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import '../Css/spinner.css'
const Spinner = () => {

    const [count, setCount] = useState(0);

    const cargarP = ()=>{
        setInterval(() => {
            if (count === 100) {
                console.log("hola")
                clearInterval()
            } else {
                setCount(count + 1)
            }
        }, 3000)
    }
   
    
    return (
        <div className='circular'>
            <div className='inner'></div>
            <motion.div className='numb' 
            whileInView={cargarP}
            >
                {count}%
            </motion.div>
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
