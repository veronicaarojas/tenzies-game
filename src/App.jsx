import React from 'react'
import './App.css';
import Die from './Die';

function App() {

  function allNewDice() {
    const diceArray = [];
    const min = Math.ceil(1);
    const max = Math.floor(6);
    while(diceArray.length < 10) {
      const number = Math.floor(Math.random() * (max - min + 1) + min);
      diceArray.push(number);
    }
    return diceArray;
  }

  




  return (
    <main>

      <h1 className='app--title'>Tenzies</h1>
      <p className='app--description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice--container'>

      <Die value={1}/>
      <Die value={1}/>
      <Die value={1}/>
      <Die value={1}/>
      <Die value={1}/>
      <Die value={1}/>
      <Die value={1}/>
      <Die value={1}/>
      <Die value={1}/>
      <Die value={1}/>

      </div>
      

    </main>
  )
}

export default App