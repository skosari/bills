import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import {faTrashAlt, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import PaymentCalculator from './components/PaymentCalculator';
// import DebtRelief from './components/DebtRelief';
// import ModifyAccount from './components/ModifyAccount';
import AddDebt from './components/AddDebt';
import RecycleBin from './components/RecycleBin';
import Popup from 'reactjs-popup';
import Nav from './components/Nav';
import {DebtProvider} from './components/DebtContext';
import DebtList from './components/DebtList';

function App() {

  return(

    <div className='container border border-secondary rounded secondary' >
      <DebtProvider>
        <Nav />
        <AddDebt />
      
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
                  {/* <th colSpan='4'><AddDebt /></th> */}
                  
                </tr>
              </thead>

              <DebtList />

            </Table>
          
          </div>
        </div>
        
        {/* <RecycleBin /> */}
        
        {/* <Popup
          trigger={<button className="btn btn-lg btn-success"> Add Debt <FontAwesomeIcon icon={faPlusSquare} /></button>}
          modal
          closeOnDocumentClick
        >
          <AddDebt adddebt={this.adddebt}/>
        </Popup> */}
      </DebtProvider>
    </div>

    
  );
}



export default App;