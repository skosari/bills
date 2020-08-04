import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PaymentCalculator from './components/PaymentCalculator';
import DebtRelief from './components/DebtRelief';
import ModifyModal from './components/ModifyModal';

class App extends Component {
state = {
  isLoading: false,
  debts: [

    {
      'id': '5',
      'creditor': 'wells fargo',
      'balance': '1450.32',
      'originalbalance': '1920.25',
      'rate': '4.99',
      'payment': '87.36',
      'goal': '0',
      'paidoffdate': '9/9/2022',
      'totalinterestpaid': '140.34',
      'monthstopayoff': '6',
      'payoffstrategy': 'snowball'
    },
    {
      'id': '6',
      'creditor': 'bank of america',
      'balance': '1450.32',
      'originalbalance': '1920.25',
      'rate': '4.99',
      'payment': '87.36',
      'goal': '0',
      'paidoffdate': '9/9/2022',
      'totalinterestpaid': '140.34',
      'monthstopayoff': '6',
      'payoffstrategy': 'avalanche'
    },
    {
      'id': '7',
      'creditor': 'discover',
      'balance': '1450.32',
      'originalbalance': '1920.25',
      'rate': '4.99',
      'payment': '87.36',
      'goal': '0',
      'paidoffdate': '9/9/2022',
      'totalinterestpaid': '140.34',
      'monthstopayoff': '6',
      'payoffstrategy': 'tableorder'
    },
    {
      'id': '8',
      'creditor': 'synchrony',
      'balance': '1450.32',
      'originalbalance': '1920.25',
      'rate': '4.99',
      'payment': '87.36',
      'goal': '0',
      'paidoffdate': '9/9/2022',
      'totalinterestpaid': '140.34',
      'monthstopayoff': '6',
      'payoffstrategy': 'nosnowball'
    },
    {
      'id': '10',
      'creditor': 'us bank',
      'balance': '1450.32',
      'originalbalance': '1920.25',
      'rate': '4.99',
      'payment': '87.36',
      'goal': '0',
      'paidoffdate': '9/9/2022',
      'totalinterestpaid': '140.34',
      'monthstopayoff': '6',
      'payoffstrategy': 'lowestfirst'
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
  let invoiceControls = allDebts.map(x => 
    <tr key={x.id}>
      <td>{x.creditor}</td>
      <td>{x.balance}</td>
      <td>{x.payment} </td>
      <td>{x.rate}</td>
      <td>{x.monthstopayoff}</td>
      <td>{x.originalbalance}</td>
      <td>{x.paidoffdate}</td>
      <td>{x.totalinterestpaid}</td>
      <td><ModifyModal /></td>
      <td><DebtRelief /></td>
      <td><PaymentCalculator /></td>
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
                <th>Monthly Payment</th>
                <th>Interest Rate</th>
                <th>Months to Pay Off</th>
                <th>Original Balance</th>
                <th>Pay Off Date</th>
                <th>Total Interest Paid</th>
                <th colSpan='4'>Actions</th>
                
              </tr>
            </thead>
            <tbody>
              
              {this.state.debts.length === 0 ? <tr><td colSpan='9'>All Caught Up</td></tr> : invoiceControls}
              
            </tbody>
          </Table>
        </div>
      </div>

    </div>

    
  );
}
}


export default App;