import './App.css';
import { useState } from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const diceArray = [];
    while(diceArray.length < 10) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      });
    }
    return diceArray;
  }

  function rollDice() {
    setDice(oldDice => oldDice.map((die) => {
      return die.isHeld ?  
      die :
      {
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
      }
    }));
  }

  function holdDice(id) {
   setDice(oldDice => oldDice.map((die) => {
    return die.id === id ? 
      {...die, isHeld: !die.isHeld} 
      : 
      die
   }))
  }

  
  const diceBlock = dice.map((die) => 
    <Die 
    key={die.id} 
    value={die.value} 
    isHeld={die.isHeld}
    id={die.id}
    holdDice={holdDice}/>
  )

  




  return (
    <main>

      <h1 className='app--title'>Tenzies</h1>
      <p className='app--description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice--container'>
      {diceBlock}
      </div>
      <button 
      className='button'
      onClick={rollDice}>
        Roll
      </button>
      

    </main>
  )
}

export default App