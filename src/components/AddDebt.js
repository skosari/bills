import React, {useState, useContext} from 'react';
import {DebtContext} from './DebtContext';
//import propTypes from 'prop-types';

const AddDebt = () => {

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


}

export default AddDebt;
