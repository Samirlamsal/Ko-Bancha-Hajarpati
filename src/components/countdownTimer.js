import React from 'react';
import { useCountdown } from './countdown';
import DateTimeDisplay from './dateTimeDisplay';
import useSound from 'use-sound';
// import boopSfx from '../../sounds/boop.mp3';


const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter">
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    );
  };
  

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
//   const [play] = useSound(boopSfx);


  if (days + hours + minutes + seconds <= 0) {
    return <h1 className='expired'>0</h1>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};


export default CountdownTimer;