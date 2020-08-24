import React, {useState, useContext} from 'react';
import {DebtContext} from './DebtContext';

const DebtTable = () => {
  const [debt, setDebt] = useContext(DebtContext);
return (
  <div>




  <label for='payoffstrategy'>Payoff Strategy</label>
  <select for='payoffstrategy' value={payoffstrategy} onChange={updatePayoffstrategy}>
    <option value='Avalanche'>Avalanche: Highest Interest First</option>
    <option value='Snowball'>Snowball: Lowest Balance First</option>
    <option value='Order'>Order Entered In Table</option>
    <option value='Biggest First'>Biggest Balance First</option>
    <option value='High Interest'>Highest Interest First</option>
    <option value='Lowest Interest'>Lowest Interst First: Best for Promotional Balances</option>
  </select> 

  </div>
);
}
export default DebtTable;