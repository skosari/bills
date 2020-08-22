import React, {useState, useContext} from 'react';
import {DebtContext} from './DebtContext';
//import propTypes from 'prop-types';

const AddDebt = () => {

  const [debt, setDebt] = useContext(DebtContext);
  const [creditor, setCreditor] = useState('');
  const [balance, setbalance] = useState('');
  const [originalbalance, setBalance] = useState('');
  const [rate, setRate] = useState('');
  const [payment, setPayment] = useState('');
  const [goal, setGoal] = useState('');
  const [paidoffdate, setPaidoffdate] = useState('');
  const [totalinterestpaid, setTotalinterestpaid] = useState('');
  const [monthstopayoff, setMonthstopayoff] = useState('');
  const [payoffstrategy, setPayoffstrategy] = useState('');

  const addDebt = (e) => {
    e.preventDefault();
    setDebt(x => [...x, {
      id: x.length + 1,
      creditor: creditor,
      balance: balance,
      originalbalance: originalbalance,
      rate: rate,
      payment: payment,
      goal: goal,
      paidoffdate: paidoffdate,
      totalinterestpaid: totalinterestpaid,
      monthstopayoff: monthstopayoff,
      payoffstrategy: payoffstrategy
    }]);
    setCreditor('');
  }

  const updateCreditor = (e) => {
    setCreditor(e.target.value)
  }

  return (
    <form name={addDebt} name='add'>
      <input type='text' name='creditor' value={creditor} onChange={updateCreditor} required placeholder='Creditor' />
      <button>Submit</button>
    </form>
  );
}

export default AddDebt;
