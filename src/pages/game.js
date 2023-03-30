import React, {useEffect, useState} from 'react';
import img from '../images/kbh.png'
import { GrNext } from 'react-icons/gr';
import { FaUserFriends } from 'react-icons/fa';



import CountdownTimer from '../components/countdownTimer';




const Game = () =>{
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');



    const [button50visible, setbutton50visible] = useState(true)
    const [buttonexpvisible, setbuttonexpvisible] = useState(true)




    
    const data =[{
        "id": 1,
        "ques": "'जुरासिक पार्क' सिनेमा कुन जनावरमा आधारित छ ?",
        "answer": "डायनोसर",
        "option1": "डल्फिन",
        "option2": "हात्ती",
        "option3": "सर्प",
        "option4": "डायनोसर"
    },
    {
        "id": 2,
        "ques": "Which of the following is the name of a mountain?",
        "answer": "K2",
        "option1": "C2",
        "option2": "K2",
        "option3": "R2",
        "option4": "U2"
    },
    {
        "id": 3,
        "ques": "Which is the shortest month in leap year?",
        "answer": "February",
        "option1": "January",
        "option2": "February",
        "option3": "March",
        "option4": "April"
    },
    {
        "id": 4,
        "ques": "Which Piece of Chess can only move diagonally?",
        "answer": "The Bishop",
        "option1": "The Rook",
        "option2": "The Knight",
        "option3": "The Pawn",
        "option4": "The Bishop"
    },
    {
        "id": 5,
        "ques": "What was Google originally called?",
        "answer": "Backrub",
        "option1": "Backchat",
        "option2": "Backrub",
        "option3": "Duogol",
        "option4": "Gogol"
    },
    {
        "id": 6,
        "ques": "Who is the writer of the world famous novel \"Mother of a Traitor\"?",
        "answer": "Maxim Gorky",
        "option1": "G.B Shaw",
        "option2": "Maxim Gorky",
        "option3": "Victor Hugo",
        "option4": "Vladimir Mobokov"
    },
    {
        "id": 7,
        "ques": "Fathometer is used to measure .............",
        "answer": "Ocean Depth",
        "option1": "Earthquake",
        "option2": "Rainfall",
        "option3": "Sound Intensity",
        "option4": "Ocean Depth"
    },
    {
        "id": 8,
        "ques": "Which mountaineer is known as \"Hiu Chituwa\"?",
        "answer": "Aangnta Sherpa",
        "option1": "Aangnta Sherpa",
        "option2": "Tenzing Norgay Sherpa",
        "option3": "Appa Sherpa",
        "option4": "Babuchhiri Sherpa"
    },
    {
        "id": 9,
        "ques": "First SAARC nation to implement vat system is ........",
        "answer": "Bangladesh",
        "option1": "Bangladesh",
        "option2": "Nepal",
        "option3": "Pakistan",
        "option4": "Srilanka"
    },
    {
        "id": 10,
        "ques": "At what height, Muktinath temple is located?",
        "answer": "3750m",
        "option1": "3600m",
        "option2": "3650m",
        "option3": "3700m",
        "option4": "3750m"
    },
    {
        "id": 11,
        "ques": "During World War II, when did Germany attack France?",
        "answer": "1940",
        "option1": "1938",
        "option2": "1939",
        "option3": "1940",
        "option4": "1941"
    },
    {
        "id": 12,
        "ques": "ब्लु प्लानेट अवार्ड कुन क्षेत्रसँग सम्बन्धित पुरस्कार हो ?",
        "answer": "वातावरण",
        "option1": "वातावरण",
        "option2": "भूगोल",
        "option3": "विज्ञान",
        "option4": "इतिहास"
    }
    ]
    const initialcolor = {
        option1color:'transparent',
        option2color:'transparent',
        option3color:'transparent',
        option4color:'transparent'
    }
    const [gamelevel, setgamelevel] = useState(0)
    const [color, setcolor] = useState(initialcolor)
  


    const THREE_DAYS_IN_MS = 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

   
    const changelevel = () =>{
        setgamelevel(gamelevel+1)
        setcolor(initialcolor)
        setflag(data[gamelevel+1].answer)
        console.log(gamelevel+1)
        setmoneybg(initialbg)
        if (gamelevel +1 === 0){
            setmoneybg({a:'green'})
        }
        else if(gamelevel +1===1){
            setmoneybg({b:'green'})
        }
        else if(gamelevel +1===2){
            setmoneybg({c:'green'})
        }
        else if(gamelevel +1===3){
            setmoneybg({d:'green'})
        }
        else if(gamelevel +1===4){
            setmoneybg({e:'green'})
        }
        else if(gamelevel +1===5){
            setmoneybg({f:'green'})
        }
        else if(gamelevel +1===6){
            setmoneybg({g:'green'})
        }
        else if(gamelevel +1===7){
            setmoneybg({h:'green'})
        }
        else if(gamelevel +1===8){
            setmoneybg({i:'green'})
        }
        else if(gamelevel +1===9){
            setmoneybg({j:'green'})
        }
        else if(gamelevel +1===10){
            setmoneybg({k:'green'})
        }
        else if(gamelevel +1===11){
            setmoneybg({l:'green'})
        }
        else if(gamelevel +1===12){
            setmoneybg({m:'green'})
        }

    }
    const initialbg = {
        'l':'',
        'k':'',
        'j':'',
        'i':'',
        'h':'',
        'g':'',
        'f':'',
        'e':'',
        'd':'',
        'c':'',
        'b':'',
        'a':'green'

    }
    const [timer, settimer] = useState(true)
    const [moneybg, setmoneybg] = useState(initialbg)
    const [flag, setflag] = useState(data[gamelevel].answer)
    return(
        <div className='game'>
            {timer===true &&
                <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            }
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
                <button onClick={()=>{
                changelevel()
                settimer(true)
            }}><h3><GrNext/></h3></button>

            </div>
            <div className='top'>
            <div className='image'>
                    <a href="/"><img src={img} alt='logo' /></a>
                </div>
            </div>
            <div className='level'>
                <div className='column'>
                    <h1 style={{'color':'orange', 'backgroundColor':moneybg.l}}>Rs 5000</h1>
                    <h1 style={{'backgroundColor':moneybg.k}}>Rs 4500</h1>
                    <h1 style={{'backgroundColor':moneybg.j}}>Rs 4000</h1>
                    <h1 style={{'color':'orange','backgroundColor':moneybg.i}}>Rs 3500</h1>
                    <h1 style={{'backgroundColor':moneybg.h}}>Rs 2000</h1>
                    <h1 style={{'backgroundColor':moneybg.g}}>Rs 1500</h1>
                    <h1 style={{'backgroundColor':moneybg.f}}>Rs 1000</h1>
                    <h1 style={{'color':'orange','backgroundColor':moneybg.e}}>Rs 800</h1>
                    <h1 style={{'backgroundColor':moneybg.d}}>Rs 400</h1>
                    <h1 style={{'backgroundColor':moneybg.c}}>Rs 200</h1>
                    <h1 style={{'backgroundColor':moneybg.b}}>Rs 100</h1>
                    <h1 style={{'backgroundColor':moneybg.a}}>Rs 50</h1>

                </div>
            </div>
            <div className='bottom'>
                
                <div className='question'>
                    <h1>{data[gamelevel].ques}</h1>
                </div>
                <div className='options'>
                <div className='optiontop'>
                    <h1 style={{'backgroundColor':color.option1color}} onClick={()=>{
                        settimer(false)
                        if (data[gamelevel].option1===data[gamelevel].answer){
                            setcolor({option1color:'green'})
                            setflag(data[gamelevel].answer)
                
                        }
                        else{
                            if(flag===data[gamelevel].option2){
                                setcolor({option2color:'green',option1color:'red'})
                            }
                            else if(flag===data[gamelevel].option3){
                                setcolor({option3color:'green',option1color:'red'})
                            }
                            else{
                                setcolor({option4color:'green',option1color:'red'})
                            }
                            
                        }
                       
                    }}><span>A: </span>{data[gamelevel].option1}</h1>
                    <h1 onClick={()=>{
                        settimer(false)
                        if (data[gamelevel].option2===data[gamelevel].answer){
                            
                            setcolor({option2color:'green'})
                
                        }
                        else{
                            if(flag===data[gamelevel].option1){
                                setcolor({option1color:'green',option2color:'red'})
                            }
                            else if(flag===data[gamelevel].option3){
                                setcolor({option3color:'green',option2color:'red'})
                            }
                            else{
                                setcolor({option4color:'green',option2color:'red'})
                            }
                            
                        }
                       
                    }} style={{'backgroundColor':color.option2color}}><span>B: </span>{data[gamelevel].option2}</h1>
                </div>
                <div className='optionbottom'>
                    <h1 style={{'backgroundColor':color.option3color}} onClick={()=>{
                        settimer(false)
                        if (data[gamelevel].option3===data[gamelevel].answer){
                            setcolor({option3color:'green'})
                
                        }
                        else{
                            if(flag===data[gamelevel].option1){
                                setcolor({option1color:'green',option3color:'red'})
                            }
                            else if(flag===data[gamelevel].option2){
                                setcolor({option2color:'green',option3color:'red'})
                            }
                            else{
                                setcolor({option4color:'green',option3color:'red'})
                            }
                        }
                       
                    }}><span>C: </span>{data[gamelevel].option3}</h1>
                    <h1 style={{'backgroundColor':color.option4color}} onClick={()=>{
                        settimer(false)
                        if (data[gamelevel].option4===data[gamelevel].answer){
                            setcolor({option4color:'green'})
                
                        }
                        else{
                            if(flag===data[gamelevel].option1){
                                setcolor({option1color:'green',option4color:'red'})
                            }
                            else if(flag===data[gamelevel].option2){
                                setcolor({option2color:'green',option4color:'red'})
                            }
                            else{
                                setcolor({option3color:'green',option4color:'red'})
                            }

                        }
                       
                    }}><span>D: </span>{data[gamelevel].option4}</h1>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Game;