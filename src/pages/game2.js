import React, {useEffect, useState} from 'react';
import img from '../images/kbh.png'
import { GrNext } from 'react-icons/gr';
import CountdownTimer from '../components/countdownTimer';
import { FaUserFriends } from 'react-icons/fa';




const Game2 = () =>{
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


    const THREE_DAYS_IN_MS = 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    const [button50visible, setbutton50visible] = useState(true)
    const [buttonexpvisible, setbuttonexpvisible] = useState(true)
    
    const data =[{
        "id": 1,
        "ques": "प्रसिद्ध नेपाली गीत \"सुन सहिली\" मा कति काटेपछि रमाउने कुरा गरिएको छ?",
        "answer": "४०",
        "option1": "३५",
        "option2": "४०",
        "option3": "४५",
        "option4": "५०"
    },
    {
        "id": 2,
        "ques": "रामायणमा रावणको कतिओटा टाउको थिए?",
        "answer": "१०",
        "option1": "८",
        "option2": "१०",
        "option3": "१२",
        "option4": "१४"
    },
    {
        "id": 3,
        "ques": "Ecology deals with",
        "answer": "Relation between organisms and their environment",
        "option1": "Birds",
        "option2": "Cell formation",
        "option3": "Relation between organisms and their environment",
        "option4": "Tissue's"
    },
    {
        "id": 4,
        "ques": "Who named the highest peak Mt.Everest as the third pole?",
        "answer": "Michael Karg",
        "option1": "Sir Edmund  Hillary",
        "option2": "Baburam Acharya",
        "option3": "George Everest",
        "option4": "Michael Karg"
    },
    {
        "id": 5,
        "ques": "How many districts are there in Madhesh Pradesh?",
        "answer": "8",
        "option1": "6",
        "option2": "7",
        "option3": "8",
        "option4": "9"
    },
    {
        "id": 6,
        "ques": "Who is the father of Geometry?",
        "answer": "Euclid",
        "option1": "Aristotle",
        "option2": "Pythagoros",
        "option3": "Euclid",
        "option4": "Kepler"
    },
    {
        "id": 7,
        "ques": "Madhan Puraskar Winning Book \"अन्तर्मनको यात्रा\" was written by?",
        "answer": "Jagdesh Ghimire",
        "option1": "Haribansa Acharya",
        "option2": "Jagdesh Ghimire",
        "option3": "Nayan Raj Pandey",
        "option4": "Amar Neupane"
    },
    {
        "id": 8,
        "ques": "The iconic character James Bond is related with the number .........?",
        "answer": "007",
        "option1": "303",
        "option2": "007",
        "option3": "420",
        "option4": "646"
    },
    {
        "id": 9,
        "ques": "नेपालको सबैभन्दा अग्लो स्थानमा रहेको तिलिचो तालसमुन्द्र सतहदेखि कति मि. उचाईमा अवस्थित छ?",
        "answer": "४९१९ मि",
        "option1": "४९१९ मि",
        "option2": "४९१२ मि",
        "option3": "४९१५ मि",
        "option4": "४९२०मि"
    },
    {
        "id": 10,
        "ques": "When did Nirmala Panta carnage happened in Kanchanpur?",
        "answer": "2075, Shrawan 10",
        "option1": "2075, Ashad 10",
        "option2": "2075, Shrawan 10",
        "option3": "2075, Bhadra 10",
        "option4": "2075, Ashoj 10"
    },
    {
        "id": 11,
        "ques": "फिफा विश्वकपमा सुन प्रयोग गर्दा कति क्यारेटको गरिन्छ?",
        "answer": "१८ क्यारेट",
        "option1": "१६ क्यारेट",
        "option2": "१८ क्यारेट",
        "option3": "२० क्यारेट",
        "option4": "२२ क्यारेट"
    },
    {
        "id": 12,
        "ques": "धनुषबाण खेलको सुरुवात कुन देशबाट भएको हो ?",
        "answer": "स्पेन",
        "option1": "फ्रान्स",
        "option2": "भारत",
        "option3": "इटली",
        "option4": "स्पेन"
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
    //     console.log("sjdfhbhj")
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
    // console.log(level1[0])
    // const finalarray = [level1[0], level2[0], level3[0],level4[0], level5[0],level6[0], level7[0], level8[0],level9[0], level10[0], level11[0], level12[0]]
    // console.log(finalarray)

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
            }}><h3 ><GrNext/></h3></button>

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


export default Game2;