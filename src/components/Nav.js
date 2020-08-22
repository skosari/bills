import React, {useContext} from 'react';
import './Nav.css';
import {DebtContext} from './DebtContext';

const Nav = () => {
  const [debt, setDebt] = useContext(DebtContext);
  return (
    <div>
      <h1>Navigation Bar</h1>
  <p style = {{color:'green'}}>Debts {debt.length}</p>
    </div>
  );
}

export default Nav;