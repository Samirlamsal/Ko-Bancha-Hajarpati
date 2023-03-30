import React, {useEffect, useState} from 'react';
import img from '../images/kbh.png'
import { GrNext } from 'react-icons/gr';
import CountdownTimer from '../components/countdownTimer';
import { FaUserFriends } from 'react-icons/fa';


const Game6 = () =>{
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


 


    
    const data =[    {
        
        "ques": "तल दिइएका मध्य कुन चाँहि स्टेशनरी सामान हो ?",
        "answer": "कलम",
        "option1": "आइसक्रिम",
        "option2": "मोबाइल",
        "option3": "कलम",
        "option4": "टेबल"}
    ,
    {
        
        "ques": "नेपालको हाल वर्तमान शिक्षामन्त्री को हुनुहुन्छ?",
        "answer": "देवेन्द्र पौडेल",
        "option1": "गिरराजमणी पोख्रेल",
        "option2": "गोपालमान श्रेष्ठ",
        "option3": "देवेन्द्र पौडेल",
        "option4": "जनार्दन शर्मा"
    },
    {
        
        "ques": "Which country has the biggest constitution in the world?",
        "answer": "India",
        "option1": "India",
        "option2": "England",
        "option3": "USA",
        "option4": "China"
    },
    {
        
        "ques": "Which game was first played in space?",
        "answer": "Chess",
        "option1": "Golf",
        "option2": "Chess",
        "option3": "Baseball",
        "option4": "Hockey"
    },
    {
        
        "ques": "Where is the central headquarter of Asian Development Bank (ADB)?",
        "answer": "Manila, Philipenes",
        "option1": "Manila, Philipenes",
        "option2": "Tokyo, Japan",
        "option3": "Seoul, Korea",
        "option4": "Beijing China"
    },
    {
        
        "ques": "Which is the national game of USA?",
        "answer": "Baseball",
        "option1": "American Soccer",
        "option2": "Baseball",
        "option3": "Boxing",
        "option4": "Hockey"
    },
   {
        
        "ques": "Which country won the first fotball world cup?",
        "answer": "Uruguay",
        "option1": "Brazil",
        "option2": "Uruguay",
        "option3": "Argentina",
        "option4": "France"
    },
   {
        
        "ques": "How old must be a person to become president?",
        "answer": "55",
        "option1": "45",
        "option2": "55",
        "option3": "65",
        "option4": "70"
    },
    {
        
        "ques": "\"City of enjoy\" भनेर कुन सहरलाई चिनिन्छ?",
        "answer": "कोलकता",
        "option1": "पेरिस",
        "option2": "लन्डन",
        "option3": "कोलकता",
        "option4": "सिडनी"
    },
    {
        
        "ques": "भुवन केसीको पहिलो चलचित्र कुन हो ?",
        "answer": "जुनी",
        "option1": "जुनी",
        "option2": "कुसुमे रुमाल",
        "option3": "साइनो",
        "option4": "दक्षिणा"
    },
    {
        
        "ques": "Headquarters of UNO are situated at",
        "answer": "New York, USA",
        "option1": "Paris",
        "option2": "Geneva",
        "option3": "London",
        "option4": "New York, USA"
    },
    {
        
        "ques": "भारतीय क्रिकटर महेन्द्र सिंह धोनीले अन्तराष्ट्रिय क्रिकेट टेष्ट म्याचबाट सन्यास घोषणा कहिले गरे?",
        "answer": "December 30,2014",
        "option1": "December 30,2015",
        "option2": "December 30,2013",
        "option3": "December 30,2014",
        "option4": "December 30,2016"
    }
    ]
    // const [level1, setlevel1] = useState([])
    // const [level2, setlevel2] = useState([])
    // const [level3, setlevel3] = useState([])
    // const [level4, setlevel4] = useState([])
    // const [level5, setlevel5] = useState([])
    // const [level6, setlevel6] = useState([])
    // const [level7, setlevel7] = useState([])
    // const [level8, setlevel8] = useState([])
    // const [level9, setlevel9] = useState([])
    // const [level10, setlevel10] = useState([])
    // const [level11, setlevel11] = useState([])
    // const [level12, setlevel12] = useState([])

    // const [datas, setdatas] = useState([])
    

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/level1/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel1(data)
                
    //         }
    //         )

    //         fetch('http://127.0.0.1:8000/level2/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel2(data)
    //         }
    //         )
    //         fetch('http://127.0.0.1:8000/level3/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel3(data)
    //         }
    //         )
    //         fetch('http://127.0.0.1:8000/level4/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel4(data)
    //         }
    //         )
    //         fetch('http://127.0.0.1:8000/level5/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel5(data)
    //         }
    //         )
    //         fetch('http://127.0.0.1:8000/level6/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel6(data)
    //         }
    //         )
    //         fetch('http://127.0.0.1:8000/level7/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel7(data)
    //         }
    //         )
    //         fetch('http://127.0.0.1:8000/level8/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel8(data)
    //         }
    //         )
    //         fetch('http://127.0.0.1:8000/level9/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel9(data)
    //         }
    //         )
    //         fetch('http://127.0.0.1:8000/level10/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel10(data)
    //         }
    //         )
    //         fetch('http://127.0.0.1:8000/level11/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel11(data)
    //         } 
    //         )
    //         fetch('http://127.0.0.1:8000/level12/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setlevel12(data)
    //         }
    //         )
            
        
    // }, []);
    // console.log(level1[0])
    // console.log(level2[0])
    // console.log(level3[0])
    // console.log(level4[0])
    // console.log(level5[0])
    // console.log(level6[0])
    // console.log(level7[0])
    // console.log(level8[0])
    // console.log(level9[0])
    // console.log(level10[0])
    // console.log(level11[0])
    // console.log(level12[0])

    
    // setdatas([level1[0], level2[0], level3[0],level4[0], level5[0],level6[0], level7[0], level8[0],level9[0], level10[0], level11[0], level12[0]])

   
   

    const initialcolor = {
        option1color:'transparent',
        option2color:'transparent',
        option3color:'transparent',
        option4color:'transparent'
    }
    const [gamelevel, setgamelevel] = useState(0)
    const [color, setcolor] = useState(initialcolor)
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

    const [button50visible, setbutton50visible] = useState(true)
    const [buttonexpvisible, setbuttonexpvisible] = useState(true)
    const THREE_DAYS_IN_MS = 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
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


export default Game6;