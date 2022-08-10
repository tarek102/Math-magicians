/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */

import { PureComponent } from 'react';

class Calculator extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="display">
            <span>0</span>
          </div>
          <div className="symbols">
            <button className="btn" type="button">AC</button>
            <button className="btn" type="button">+/-</button>
            <button className="btn" type="button">%</button>
            <button className="btn orange" type="button">÷</button>
            <button className="btn" type="button">7</button>
            <button className="btn" type="button">8</button>
            <button className="btn" type="button">9</button>
            <button className="btn orange" type="button">x</button>
            <button className="btn" type="button">4</button>
            <button className="btn" type="button">5</button>
            <button className="btn" type="button">6</button>
            <button className="btn orange" type="button">-</button>
            <button className="btn" type="button">1</button>
            <button className="btn" type="button">2</button>
            <button className="btn" type="button">3</button>
            <button className="btn orange" type="button">+</button>
            <button className="btn zero" type="button">0</button>
            <button className="btn" type="button">.</button>
            <button className="btn orange" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
