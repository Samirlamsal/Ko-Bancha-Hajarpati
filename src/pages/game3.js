import React, {useEffect, useState} from 'react';
import img from '../images/kbh.png'
import { GrNext } from 'react-icons/gr';


const Game3 = () =>{
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
        "id": 6,
        "ques": "सर्पमा तलका मध्य कुन अंग हुन्छ?",
        "answer": "जिब्रो",
        "option1": "कान",
        "option2": "परेला",
        "option3": "खुट्टा",
        "option4": "जिब्रो"
    },
    {
        "id": 4,
        "ques": "Which of the following is not a social networking site?",
        "answer": "Wikipedia",
        "option1": "Instagram",
        "option2": "Twitter",
        "option3": "Facebook",
        "option4": "Wikipedia"
    },
    {
        "id": 4,
        "ques": "How many types of rhododendron are found in Nepal?",
        "answer": "32",
        "option1": "30",
        "option2": "32",
        "option3": "34",
        "option4": "36"
    },
    {
        "id": 3,
        "ques": "Which is the oldest highway in Nepal?",
        "answer": "Tribhuvan Highway",
        "option1": "Tribhuvan Highway",
        "option2": "Mahendra Highway",
        "option3": "Siddhartha Highway",
        "option4": "Prithivi Highway"
    },
    {
        "id": 3,
        "ques": "Which is the oldest University of the world?",
        "answer": "University of Bologna",
        "option1": "Paris University",
        "option2": "University of Bologna",
        "option3": "Oxford University",
        "option4": "Al-Azhar University"
    },
    {
        "id": 4,
        "ques": "The headquarter of Rukum is",
        "answer": "Musikot",
        "option1": "Simikot",
        "option2": "Gaindakot",
        "option3": "Musikot",
        "option4": "Benfikot"
    },
    {
        "id": 3,
        "ques": "What is the rarest type of blood in human body?",
        "answer": "AB-",
        "option1": "AB-",
        "option2": "O+",
        "option3": "B-",
        "option4": "A+"
    },
    {
        "id": 3,
        "ques": "Who built the Ranimahal?",
        "answer": "Khadak Shamser",
        "option1": "Khadak Shamser",
        "option2": "Chandra shamser",
        "option3": "Pratap malla",
        "option4": "Jayaprakash Malla"
    },
    {
        "id": 3,
        "ques": "नेपालको संविधान २०७२ अनुसार धारा ३९ मा कुन मौलिक हकलाई राखिएको छ?",
        "answer": "बालबालिकाको हक",
        "option1": "सूचना तथा गोपीयताको हक",
        "option2": "स्वतन्त्रताको हक",
        "option3": "महिलाको हक",
        "option4": "बालबालिकाको हक"
    },
    {
        "id": 3,
        "ques": "Entomology is the science that studies...",
        "answer": "Insects",
        "option1": "Insects",
        "option2": "The formation of rocks",
        "option3": "Birds",
        "option4": "Behaviour of human beings"
    },
    {
        "id": 3,
        "ques": "शान्तिश्री नामले चिनिने राजा को हुन् ?",
        "answer": "प्रचण्डदेव",
        "option1": "प्रताप मल्ल",
        "option2": "प्रचण्डदेव",
        "option3": "अंशुवर्मा",
        "option4": "जयस्थिति मल्ल"
    },
    {
        "id": 3,
        "ques": "वर्षमा दुई पटक बजेट पेस गर्ने रास्ट्र फ्रान्स हो भने दुई प्रकारको बजेट प्रस्तुत गर्ने रास्ट्र कुन हो ?",
        "answer": "भारत",
        "option1": "भारत",
        "option2": "क्यानडा",
        "option3": "पेरू",
        "option4": "डेनमार्क"
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


export default Game3;