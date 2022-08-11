import { PureComponent } from 'react';
import calculate from './logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      operation: null,
      total: null,
    };
  }

  btnClick = (e) => {
    this.setState((prev) => calculate(prev, e.target.innerText));
  };

  render() {
    const { total, next, operation } = this.state;
    let result;
    if (next === null && operation === null && total === null) {
      result = 0;
    }

    if (next === null && operation !== null && total === null) {
      this.setState({ total: 0 });
      result = operation + total;
    }

    if (next !== null && operation === null && total === null) {
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
            <button className="btn" type="button" onClick={this.btnClick}>AC</button>
            <button className="btn" type="button" onClick={this.btnClick}>+/-</button>
            <button className="btn" type="button" onClick={this.btnClick}>%</button>
            <button className="btn orange" type="button" onClick={this.btnClick}>÷</button>
            <button className="btn" type="button" onClick={this.btnClick}>7</button>
            <button className="btn" type="button" onClick={this.btnClick}>8</button>
            <button className="btn" type="button" onClick={this.btnClick}>9</button>
            <button className="btn orange" type="button" onClick={this.btnClick}>x</button>
            <button className="btn" type="button" onClick={this.btnClick}>4</button>
            <button className="btn" type="button" onClick={this.btnClick}>5</button>
            <button className="btn" type="button" onClick={this.btnClick}>6</button>
            <button className="btn orange" type="button" onClick={this.btnClick}>-</button>
            <button className="btn" type="button" onClick={this.btnClick}>1</button>
            <button className="btn" type="button" onClick={this.btnClick}>2</button>
            <button className="btn" type="button" onClick={this.btnClick}>3</button>
            <button className="btn orange" type="button" onClick={this.btnClick}>+</button>
            <button className="btn zero" type="button" onClick={this.btnClick}>0</button>
            <button className="btn" type="button" onClick={this.btnClick}>.</button>
            <button className="btn orange" type="button" onClick={this.btnClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
