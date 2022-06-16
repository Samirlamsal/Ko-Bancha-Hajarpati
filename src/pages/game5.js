import React, {useEffect, useState} from 'react';
import img from '../images/kbh.png'
import { GrNext } from 'react-icons/gr';


const Game5 = () =>{
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


 


    
    const data =[{
        "id": 8,
        "ques": "झुम्का भन्नाले के बुझिन्छ?",
        "answer": "कानको गहना",
        "option1": "कानको गहना",
        "option2": "नाच",
        "option3": "जँड्याहा",
        "option4": "हात्तीको चाल"
    },
    {
        "id": 6,
        "ques": "Which god is worshiped in the festival of Chhath?",
        "answer": "Surya",
        "option1": "Indra",
        "option2": "Chandrama",
        "option3": "Yama",
        "option4": "Surya"
    },
    {
        "id": 6,
        "ques": "Which language is spoken more after Nepali language in Nepal?",
        "answer": "Maithili",
        "option1": "Newari",
        "option2": "Tamang",
        "option3": "Magar",
        "option4": "Maithili"
    },
    {
        "id": 5,
        "ques": "टाउकोको एक भागमा मात्र असर पार्ने खालको टाउको दुखाइलाई के भनिन्छ?",
        "answer": "माइग्रेन",
        "option1": "एम्नेसिया",
        "option2": "डिप्रेसन",
        "option3": "माइग्रेन",
        "option4": "पिनास"
    },
    {
        "id": 5,
        "ques": "Which of these awards is not named after a person?",
        "answer": "Grammy Awards",
        "option1": "Grammy Awards",
        "option2": "Magsaysay Awards",
        "option3": "Nobel Prize",
        "option4": "Pulitzer Prize"
    },
    {
        "id": 6,
        "ques": "Dudhkunda is located in",
        "answer": "Solukhumbu",
        "option1": "Ramachaap",
        "option2": "Makwanpur",
        "option3": "Solukhumbu",
        "option4": "Nuwakot"
    },
    {
        "id": 5,
        "ques": "Which fruit is known as the king of fruit?",
        "answer": "Mango",
        "option1": "Grapes",
        "option2": "Guava",
        "option3": "Apple",
        "option4": "Mango"
    },
    {
        "id": 5,
        "ques": "How many trade points have been opened between Nepal and India?",
        "answer": "27",
        "option1": "25",
        "option2": "26",
        "option3": "27",
        "option4": "28"
    },
    {
        "id": 5,
        "ques": "अलैँची खेतीका लागी उपयुक्त तापक्रम कति हो ?",
        "answer": "८ देखि २० डि.से",
        "option1": "८ देखि १० डि.से",
        "option2": "८ देखि ३० डि.से",
        "option3": "८ देखि ४० डि.से",
        "option4": "८ देखि २० डि.से"
    },
    {
        "id": 5,
        "ques": "तोरीको लागि प्रसिद्ध ठाउँ कुन हो?",
        "answer": "चितवन",
        "option1": "झापा",
        "option2": "चितवन",
        "option3": "दैलेख",
        "option4": "डोटी"
    },
    {
        "id": 5,
        "ques": "पुरुषभन्दा महिला बढी साक्षर भएको देश कुन हो ?",
        "answer": "हंगेरी",
        "option1": "पानामा",
        "option2": "हंगेरी",
        "option3": "अर्जेन्टिना",
        "option4": "चिली"
    },
    {
        "id": 5,
        "ques": "नेपाल सरकारले कुन दिनलाई राष्ट्रिय पत्रकारिता दिवसको रूपमा मनाउने निर्णय गरेको छ?",
        "answer": "बैँशाख २४",
        "option1": "जेठ २४",
        "option2": "पुस २४",
        "option3": "माघ २४",
        "option4": "बैँशाख २४"
    }
    ]
    const [level1, setlevel1] = useState([])
    const [level2, setlevel2] = useState([])
    const [level3, setlevel3] = useState([])
    const [level4, setlevel4] = useState([])
    const [level5, setlevel5] = useState([])
    const [level6, setlevel6] = useState([])
    const [level7, setlevel7] = useState([])
    const [level8, setlevel8] = useState([])
    const [level9, setlevel9] = useState([])
    const [level10, setlevel10] = useState([])
    const [level11, setlevel11] = useState([])
    const [level12, setlevel12] = useState([])

    const [datas, setdatas] = useState([])
    

    useEffect(() => {
        fetch('http://127.0.0.1:8000/level1/')
            .then(response => response.json())
            .then(data => {
                setlevel1(data)
                
            }
            )

            fetch('http://127.0.0.1:8000/level2/')
            .then(response => response.json())
            .then(data => {
                setlevel2(data)
            }
            )
            fetch('http://127.0.0.1:8000/level3/')
            .then(response => response.json())
            .then(data => {
                setlevel3(data)
            }
            )
            fetch('http://127.0.0.1:8000/level4/')
            .then(response => response.json())
            .then(data => {
                setlevel4(data)
            }
            )
            fetch('http://127.0.0.1:8000/level5/')
            .then(response => response.json())
            .then(data => {
                setlevel5(data)
            }
            )
            fetch('http://127.0.0.1:8000/level6/')
            .then(response => response.json())
            .then(data => {
                setlevel6(data)
            }
            )
            fetch('http://127.0.0.1:8000/level7/')
            .then(response => response.json())
            .then(data => {
                setlevel7(data)
            }
            )
            fetch('http://127.0.0.1:8000/level8/')
            .then(response => response.json())
            .then(data => {
                setlevel8(data)
            }
            )
            fetch('http://127.0.0.1:8000/level9/')
            .then(response => response.json())
            .then(data => {
                setlevel9(data)
            }
            )
            fetch('http://127.0.0.1:8000/level10/')
            .then(response => response.json())
            .then(data => {
                setlevel10(data)
            }
            )
            fetch('http://127.0.0.1:8000/level11/')
            .then(response => response.json())
            .then(data => {
                setlevel11(data)
            } 
            )
            fetch('http://127.0.0.1:8000/level12/')
            .then(response => response.json())
            .then(data => {
                setlevel12(data)
            }
            )
            
        
    }, []);
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
    const [moneybg, setmoneybg] = useState(initialbg)
    const [flag, setflag] = useState(data[gamelevel].answer)
    return(
        <div className='game'>
            <div className='next' onClick={()=>{
                changelevel()
            }}>
                <button><h3><GrNext/></h3></button>

            </div>
            <div className='top'>
            <div className='image'>
                    <img src={img} alt='logo' />
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


export default Game5;