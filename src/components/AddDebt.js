import React, {useState, useContext} from 'react';
import {DebtContext} from './DebtContext';

const AddDebt = () => {

  const [debt, setDebt] = useContext(DebtContext);
  const [creditor, setCreditor] = useState('');
  const [balance, setBalance] = useState('');
  const [originalbalance, setOriginalbalance] = useState('');
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
    setBalance('');
    setOriginalbalance('');
    setRate('');
    setPayment('');
    setGoal('');
    setPaidoffdate('');
    setTotalinterestpaid('');
    setMonthstopayoff('');
    setPayoffstrategy('');
  }

  const updateCreditor = (e) => {
    setCreditor(e.target.value)
  }
  const updateBalance = (e) => {
    setBalance(e.target.value)
  }
  const updateOriginalbalance = (e) => {
    setOriginalbalance(e.target.value)
  }
  const updateRate = (e) => {
    setRate(e.target.value)
  }
  const updatePayment = (e) => {
    setPayment(e.target.value)
  }
  const updateGoal = (e) => {
    setGoal(e.target.value)
  }
  const updatePaidoffdate = (e) => {
    setPaidoffdate(e.target.value)
  }
  const updateTotalinterestpaid = (e) => {
    setTotalinterestpaid(e.target.value)
  }
  const updateMonthstopayoff = (e) => {
    setMonthstopayoff(e.target.value)
  }
  const updatePayoffstrategy = (e) => {
    setPayoffstrategy(e.target.value)
  }

  return (
    <form onSubmit={addDebt} name='add'>
      <input type='text' name='creditor' value={creditor} onChange={updateCreditor} required placeholder='Creditor' />
      <input type='text' name='balance' value={balance} onChange={updateBalance} required placeholder='Current Balance' />
      <input type='text' name='originalbalance' value={originalbalance} onChange={updateOriginalbalance} required placeholder='Starting balance' />
      <input type='text' name='rate' value={rate} onChange={updateRate} required placeholder='Interest Rate' />
      <input type='text' name='payment' value={payment} onChange={updatePayment} required placeholder='Monthly Payment' />
      <input type='text' name='goal' value={goal} onChange={updateGoal} required placeholder='Goal' />
      <input type='text' name='paidoffdate' value={paidoffdate} onChange={updatePaidoffdate} required placeholder='Pay Off Date' />
      <input type='text' name='totalinterestpaid' value={totalinterestpaid} onChange={updateTotalinterestpaid} required placeholder='Total Interest Paid' />
      <input type='text' name='monthstopayoff' value={monthstopayoff}  onChange={updateMonthstopayoff} required placeholder='Months to Pay Off' />
      <input type='text' name='payoffstrategy' value={payoffstrategy} onChange={updatePayoffstrategy} required placeholder='Pay off Strategy' />

      <button>Submit</button> 
    </form>
  );
}

export default AddDebt;
