import React, {useState, useContext} from 'react';
import {DebtContext} from './DebtContext';

const AddDebt = () => {

  const [debt, setDebt] = useContext(DebtContext);
  const [creditor, setCreditor] = useState('');
  const [balance, setBalance] = useState('');
  const [originalbalance, setOriginalbalance] = useState('');
  const [rate, setRate] = useState('');
  const [goal, setGoal] = useState('');
  const [paidoffdate, setPaidoffdate] = useState('');
  const [totalinterestpaid, setTotalinterestpaid] = useState('');
  const [monthstopayoff, setMonthstopayoff] = useState('');
  

  const addDebt = (e) => {
    e.preventDefault();
    setDebt(x => [...x, {
      id: x.length + 1,
      creditor: creditor,
      balance: '$' + balance,
      originalbalance: '$' + balance,
      rate: rate + '%',
      monthlyinterest: '$' + Math.round(((rate*.01) * balance) / 12), //add monthly interest to state and tables
      payment: '$' + Math.round((((rate*.01) * balance) / 12) + (balance/36)), //figure out formula to calculate monthly minimum payment
      goal: goal,
      paidoffdate: paidoffdate,
      totalinterestpaid: '$' + totalinterestpaid,
      monthstopayoff: monthstopayoff,
      
    }]);
    setCreditor('');
    setBalance('');
    setRate('');
    setGoal('');
    setPaidoffdate('');
    setTotalinterestpaid('');
    setMonthstopayoff('');
    
  }

  const updateCreditor = (e) => {
    setCreditor(e.target.value)
  }
  const updateBalance = (e) => {
    setBalance(e.target.value)
  }
  const updateRate = (e) => {
    setRate(e.target.value)
  }
  const updateGoal = (e) => {
    setGoal(e.target.value)
  }
  

  return (
    
    <form onSubmit={addDebt} name='add'>
      
      {/* <input type='text' name='creditor' value={creditor} onChange={updateCreditor} placeholder='Creditor' /> */}
      <label >Account</label>
        <select name='creditor' value={creditor} onChange={updateCreditor}>
          <option></option>
          <option value='Wells Fargo'>Wells Fargo</option>
          <option value='Bank Of America'>Bank Of America</option>
          <option value='Chase'>Chase</option>
          <option value='Best Buy'>Best Buy</option>
        </select>

      <label >Whats Your Goal</label>
        <select name='goal' value={goal} onChange={updateGoal}>
          <option></option>
          <option value='Paid Off'>Paid Off</option>
          <option value='Credit Safe'>Building Credit</option>
          <option value='Dont Drown'>Head Above Water</option>
        </select>

      <input type='text' name='balance' value={balance} onChange={updateBalance} placeholder='Current Balance' />
      
      <input type='text' name='rate' value={rate} onChange={updateRate} placeholder='Interest Rate' />

      <button >Submit</button> 
    </form>
    
  );
}

export default AddDebt;
