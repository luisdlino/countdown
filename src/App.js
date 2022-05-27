import React from 'react';
import { useState } from 'react';
import Countdown from './components/Countdown';
import Confetti from './components/Confetti';
import Balloons  from './components/Ballons/Balloons';
import Presents from './components/Presents';
import './App.css';
import logo from './assets/left_field_logo.png';

export default function App() {

  const [parentCounter, setParentCounter] = useState('');

  return (
    <div className="App">
        <div className={"content " + parentCounter}>
            <img className='logo' src={logo} alt='logo_left_field_labs' />
            <Countdown date='2022-05-24T00:00:00' setParentCounter={setParentCounter}/>
            <Presents />
            <Balloons number={5} />
            {parentCounter === 'today' && (
                <Confetti />
            )}
        </div>
    </div>
  );
}
