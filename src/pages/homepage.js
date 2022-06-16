import React, {useEffect, useState} from 'react';
import img from '../images/kbh.png'
import { GrNext } from 'react-icons/gr';


const Homepage = () =>{
   

 
    return(
        <div className='game'>
            <div className='next'>
                <a href="/game"><button><h3><GrNext/></h3></button></a>

            </div>
            <div className='top'>
            <div className='image'>
                    <img src={img} alt='logo' />
                </div>
            </div>
            <div className='level'>
                <div className='column'>
                    <h1 style={{'color':'orange'}}>Rs 5000</h1>
                    <h1>Rs 4500</h1>
                    <h1>Rs 4000</h1>
                    <h1 style={{'color':'orange'}}>Rs 3500</h1>
                    <h1>Rs 2000</h1>
                    <h1>Rs 1500</h1>
                    <h1>Rs 1000</h1>
                    <h1 style={{'color':'orange'}}>Rs 800</h1>
                    <h1>Rs 400</h1>
                    <h1>Rs 200</h1>
                    <h1>Rs 100</h1>
                    <h1>Rs 50</h1>

                </div>
            </div>
            <div className='bottom'>
                
                
            </div>
        </div>
    )
}


export default Homepage;