import React, {useState} from 'react';
import {DebtContext} from './DebtContext';

const DebtTable = () => {
  const [payoffstrategy, setPayoffstrategy] = useState('');
  const updatePayoffstrategy = (e) => {
    setPayoffstrategy(e.target.value)
  }
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

    <tbody>
    <tr>
    <td>test1</td>
    <td>test2</td>
    <td>test1</td>
    <td>test2</td>
    <td>test1</td>
    <td>test2</td>
    <td>test1</td>
    <td>test2</td>
    <td>test1</td>
    <td>test2</td>
    </tr>
  </tbody>


  </div>
);
}
export default DebtTable;