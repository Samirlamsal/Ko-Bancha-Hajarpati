import React, {useEffect, useState} from 'react';
import img from '../images/kbh.png'
import { GrNext } from 'react-icons/gr';
import { FaUserFriends } from 'react-icons/fa';

import CountdownTimer from '../components/countdownTimer';


const Homepage = () =>{
    const THREE_DAYS_IN_MS = 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    const [modal, setmodal] = useState(false)
    const togglemodal = () =>{
        setmodal(!modal)
    }

    const [button50visible, setbutton50visible] = useState(true)
    const [buttonexpvisible, setbuttonexpvisible] = useState(true)
    return(
        <div className='game'>
            <div className="lifeline">
            {button50visible===true &&
                    <div className="fifty" onClick={()=>setbutton50visible(false)}>
                            <h2>50-50</h2>
                    </div>
                    }
                    {button50visible===false &&
                    <div className="fifty" onClick={()=>setbutton50visible(false)} style={{'opacity':0.5, 'cursor':'cursor', 'backgroundColor':'red'}}>
                            <h2>50-50</h2>
                    </div>
                    }
                        {buttonexpvisible===true &&
                        <div className="expert" onClick={()=>setbuttonexpvisible(false)} >
                            <FaUserFriends/>
                        </div>
                    }
                        {buttonexpvisible===false &&
                        <div className="expert" onClick={()=>setbuttonexpvisible(false)} style={{'opacity':0.5, 'cursor':'cursor', 'backgroundColor':'red'}}>
                            <FaUserFriends/>
                        </div>
                    }

                </div>
            
            <div className='next'>

            </div>
            <div className='top'>
            <div className='image'>
                    <img src={img} alt='logo' />
                </div>
            </div>
            <div className='level'>
                <div className='column'>
                    <h1 style={{'color':'orange'}}>Rs 50000</h1>
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
                <h2 className='play' onClick={()=>togglemodal()}>Play</h2>
            { modal===true &&
                <div className='modal'>
                    <a href="game1" style={{'textDecoration':'none'}}><h2 className='game1' onClick={()=>togglemodal()}>Game1</h2></a>
                    <a href="game2" style={{'textDecoration':'none'}}><h2 className='game1' onClick={()=>togglemodal()}>Game2</h2></a>
                    <a href="game3" style={{'textDecoration':'none'}}><h2 className='game1' onClick={()=>togglemodal()}>Game3</h2></a>
                    <a href="game4" style={{'textDecoration':'none'}}><h2 className='game1' onClick={()=>togglemodal()}>Game4</h2></a>
                    <a href="game5" style={{'textDecoration':'none'}}><h2 className='game1' onClick={()=>togglemodal()}>Game5</h2></a>
                    <a href="game6" style={{'textDecoration':'none'}}><h2 className='game1' onClick={()=>togglemodal()}>Game6</h2></a>
                    <a href="game7" style={{'textDecoration':'none'}}><h2 className='game1' onClick={()=>togglemodal()}>Game7</h2></a>
                </div>
            }

            </div>
        </div>
    )
}


export default Homepage;