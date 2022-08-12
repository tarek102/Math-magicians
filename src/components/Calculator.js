import React, { useState } from 'react';
import calculate from './logic/calculate';

function Calculator() {
  const [prev, setState] = useState({
    next: null,
    operation: null,
    total: null,
  });

  const btnClick = (e) => {
    const click = () => calculate(prev, e.target.innerHTML);
    setState(click);
  };

  let result;

  const { next, operation, total } = prev;

  if (next === null && operation === null && total === null) {
    result = 0;
  }

  if (next !== null && total === null) {
    result = next;
  }

  if (next === null && operation === null && total !== null) {
    result = total;
  }

  if (next === null && operation !== null && total !== null) {
    result = total + operation;
  }

  if (next !== null && operation !== null && total !== null) {
    result = total + operation + next;
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="display">
          <span>{result}</span>
        </div>
        <div className="symbols">
          <button className="btn" type="button" onClick={btnClick}>AC</button>
          <button className="btn" type="button" onClick={btnClick}>+/-</button>
          <button className="btn" type="button" onClick={btnClick}>%</button>
          <button className="btn orange" type="button" onClick={btnClick}>÷</button>
          <button className="btn" type="button" onClick={btnClick}>7</button>
          <button className="btn" type="button" onClick={btnClick}>8</button>
          <button className="btn" type="button" onClick={btnClick}>9</button>
          <button className="btn orange" type="button" onClick={btnClick}>x</button>
          <button className="btn" type="button" onClick={btnClick}>4</button>
          <button className="btn" type="button" onClick={btnClick}>5</button>
          <button className="btn" type="button" onClick={btnClick}>6</button>
          <button className="btn orange" type="button" onClick={btnClick}>-</button>
          <button className="btn" type="button" onClick={btnClick}>1</button>
          <button className="btn" type="button" onClick={btnClick}>2</button>
          <button className="btn" type="button" onClick={btnClick}>3</button>
          <button className="btn orange" type="button" onClick={btnClick}>+</button>
          <button className="btn zero" type="button" onClick={btnClick}>0</button>
          <button className="btn" type="button" onClick={btnClick}>.</button>
          <button className="btn orange" type="button" onClick={btnClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
