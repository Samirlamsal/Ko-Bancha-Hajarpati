import React, {useState} from 'react';
import img from '../images/kbh.png'


const Game = () =>{
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

    ]
    const [gamelevel, setgamelevel] = useState(0)
    const [color, setcolor] = useState(
        {
            option1color:'transparent',
            option2color:'transparent',
            option3color:'transparent',
            option4color:'transparent'
        }
    )

    const [flag, setflag] = useState(data.answer)
    return(
        <div className='game'>
            <div className='next' onClick={(()=>{
                setgamelevel(gamelevel+1)
            })}>
                <button>next</button>

            </div>
            <div className='top'>
            <div className='image'>
                    <img src={img} alt='logo' />
                </div>
            </div>
            <div className='bottom'>
                
                <div className='question'>
                    <h1>{data[gamelevel].question}</h1>
                </div>
                <div className='options'>
                <div className='optiontop'>
                    <h1 style={{'backgroundColor':color.option1color}} onClick={()=>{
                        if (data[gamelevel].option1===data[gamelevel].answer){
                            setcolor({option1color:'green'})
                            setflag(data[gamelevel].answer)
                
                        }
                        else{
                            console.log(flag)
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


export default Game;