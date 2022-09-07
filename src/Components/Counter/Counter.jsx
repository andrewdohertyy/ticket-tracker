import React from 'react'
import { useState } from "react";


const Counter = () => {

const [counter, setCounter] = useState(0)

console.log(counter);

const add = () => {
  setCounter(counter +1);
}

const take = () => {
  setCounter(counter -1);
}


return (
    <div className="counter">
        <h3 className="counter__header">Counter:</h3>
        <h3 className="counter__display">{counter}</h3>
        <button onClick={add()} className="counter__add">+</button>
        <button onClick={take()} className="counter__minus">-</button>
    </div>
  )
}
export default Counter