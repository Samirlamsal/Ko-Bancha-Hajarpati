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
        'question':'Bahubali festival is related to',
        'answer':'Buddhism',
        'option1':'Islam',
        'option2':'Hinduism',
        'option3':'Buddhism',
        'option4':'Jainism',
    },
    {
        'question':'Which day is observed as the World Standards Day?',
        'answer':'Oct 14',
        'option1':'June 26',
        'option2':'Oct 14',
        'option3':'Nov 15',
        'option4':'Dec 2',
    },
    {
        'question':'The International Literacy Day is observed on',
        'answer':'Sep 8',
        'option1':'Sep 8',
        'option2':'Nov 28',
        'option3':'May 2',
        'option4':'Sep 22',
    },
    {
        'question':'September 27 is celebrated every year as',
        'answer':'World Tourism Day',
        'option1':'Teachers` Day',
        'option2':'National Integration Day',
        'option3':'World Tourism Day',
        'option4':'International Literacy Day',
    },
    {
        'question':'Bahubali festival is related to',
        'answer':'Buddhism',
        'option1':'Islam',
        'option2':'Hinduism',
        'option3':'Buddhism',
        'option4':'Jainism',
    },
    {
        'question':'Which day is observed as the World Standards Day?',
        'answer':'Oct 14',
        'option1':'June 26',
        'option2':'Oct 14',
        'option3':'Nov 15',
        'option4':'Dec 2',
    },
    {
        'question':'The International Literacy Day is observed on',
        'answer':'Sep 8',
        'option1':'Sep 8',
        'option2':'Nov 28',
        'option3':'May 2',
        'option4':'Sep 22',
    },
    {
        'question':'September 27 is celebrated every year as',
        'answer':'World Tourism Day',
        'option1':'Teachers` Day',
        'option2':'National Integration Day',
        'option3':'World Tourism Day',
        'option4':'International Literacy Day',
    },
    {
        'question':'Bahubali festival is related to',
        'answer':'Buddhism',
        'option1':'Islam',
        'option2':'Hinduism',
        'option3':'Buddhism',
        'option4':'Jainism',
    },
    {
        'question':'Which day is observed as the World Standards Day?',
        'answer':'Oct 14',
        'option1':'June 26',
        'option2':'Oct 14',
        'option3':'Nov 15',
        'option4':'Dec 2',
    },
    {
        'question':'The International Literacy Day is observed on',
        'answer':'Sep 8',
        'option1':'Sep 8',
        'option2':'Nov 28',
        'option3':'May 2',
        'option4':'Sep 22',
    },
    {
        'question':'September 27 is celebrated every year as',
        'answer':'World Tourism Day',
        'option1':'Teachers` Day',
        'option2':'National Integration Day',
        'option3':'World Tourism Day',
        'option4':'International Literacy Day',
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