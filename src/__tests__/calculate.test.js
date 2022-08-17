import React from 'react';
import calculate from "../components/logic/calculate";


describe('Calculate', () => {

  const equal = '=';

  it('Adds 8 + 2 expecting 10', () => {
    
    const res = {
      total: '8',
      next: '2',
      operation: '+',
    };

    const newRes = calculate(res, equal);

    expect(newRes.total).toBe('10');
  });

  it('Substracts 100 - 40 expecting 60', () => {
    const res = {
      total: '100',
      next: '40',
      operation: '-',
    };

    const newRes = calculate(res, equal);
    
    expect(newRes.total).toEqual('60')
  });

  it('Multiply 1000 * 5 expecting 5000', () => {
    const res = {
      total: '1000',
      next: '5',
      operation: 'x',
    };

    const newRes = calculate(res, equal);

    expect(newRes.total).toBe('5000')
  });

  it('modulus 12 % 4 expecting 0', () => {
    const res = {
      total: '12',
      next: '4',
      operation: '%',
    };

    const newRes = calculate(res, equal);

    expect(newRes.total).toBe('0')
  });

  it('Divide 80 / 4 expecting 20', () => {
    const res = {
      total: '80',
      next: '4',
      operation: '÷',
    };

    const newRes = calculate(res, equal);

    expect(newRes.total).toEqual('20')
  });
})