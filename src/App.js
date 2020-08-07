import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import {faTrashAlt, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PaymentCalculator from './components/PaymentCalculator';
import DebtRelief from './components/DebtRelief';
import ModifyAccount from './components/ModifyAccount';
import AddDebt from './components/AddDebt';
import RecycleBin from './components/RecycleBin';
import Popup from 'reactjs-popup';

class App extends Component {
state = {
  isLoading: false,
  debts: [
    {
      id: 6,
      creditor: 'bank of america',
      balance: 1450.32,
      originalbalance: 1920.25,
      rate: 4.99,
      payment: 87.36,
      goal: 0,
      paidoffdate: '9/9/2022',
      totalinterestpaid: 140.34,
      monthstopayoff: 6,
      payoffstrategy: 'avalanche'
    }
  ],
}
delBtn(id) {
  let updatedDebts = [...this.state.debts].filter(x => x.id !== id);
  this.setState({ debts: updatedDebts }); //Logic to delete the item
}

render() {
  const isLoading = this.state.isLoading;
  
  if(isLoading){return <div>Loading...</div>}; 

  const allDebts = this.state.debts;
  let debtLineItems = allDebts.map(x => 
    <tr key={x.id}>
      <td>{x.creditor}</td>
      <td>{x.balance}</td>
      <td>{x.originalbalance}</td>
      <td>{x.rate}</td>
      <td>{x.payment} </td>
      <td>{x.goal}</td>
      <td>{x.paidoffdate}</td>
      <td>{x.totalinterestpaid}</td>
      <td>{x.monthstopayoff}</td>
      <td>{x.payoffstrategy}</td>
      <td><ModifyAccount /></td>
      <td><DebtRelief balance={x.balance} rate={x.rate} paidoffdate={x.paidoffdate}/></td>
      <td><PaymentCalculator balance={x.balance}/></td>
      <td>
        <Button className="btn btn-lg btn-danger" onClick={()=>{ if (window.confirm('Are you sure you wish to delete this item?')) this.delBtn(x.id) } }>Delete <FontAwesomeIcon icon={faTrashAlt} /></Button>
      </td>
    </tr>
  );

  return(

    <div className='container border border-secondary rounded secondary' >
      
      <h1>Credit Debt Reduction app built using React</h1>
      
      <div className='row'>
        <div className='col-12'>
          <h4>Credit Debt Reduction Assistant</h4>
        </div>
      </div>

      <div className='row'>
        <div className='.col-xs-small center text-center'>
          
          <Table dark responsive bordered hover>
            <thead>
              <tr>
                <th>Creditor</th>
                <th>Balance</th>
                <th>Original Balance</th>
                <th>Interest Rate</th>
                <th>Monthly Payment</th>
                <th>Goal</th>
                <th>Pay Off Date</th>
                <th>Total Interest Paid</th>
                <th>Months to Pay Off</th>
                <th>Strategy</th>
                <th colSpan='4'><AddDebt /></th>
                
              </tr>
            </thead>

            <tbody>
              {this.state.debts.length === 0 ? <tr><td colSpan='9'>All Caught Up</td></tr> : debtLineItems}
            </tbody>

          </Table>
        
        </div>
      </div>
      
      <RecycleBin />
      
      <Popup
        trigger={<button className="btn btn-lg btn-success"> Add Debt <FontAwesomeIcon icon={faPlusSquare} /></button>}
        modal
        closeOnDocumentClick
      >
        <AddDebt />
      </Popup>
    
    </div>

    
  );
}
}


export default App;