import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import {faCalculator, faInfo, faTrashAlt, faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class App extends Component {
state = {
  isLoading: false,
  invoices: [
    {
      'id': '1',
      'vendor': 'Hancock',
      'amount': '100',
      'invoice': '1',
      'date': '8/6/1980'
    },
    {
      'id': '2',
      'vendor': 'Warren',
      'amount': '200',
      'invoice': '2',
      'date': '8/6/1982'
    },
    {
      'id': '3',
      'vendor': 'Hancock3',
      'amount': '300',
      'invoice': '3',
      'date': '8/6/1983'
    },
    {
      'id': '4',
      'vendor': 'Smith',
      'amount': '400',
      'invoice': '4',
      'date': '8/6/1984'
    },
  ],
}
delBtn(id) {
  let updatedInvoices = [...this.state.invoices].filter(x => x.id !== id);
  this.setState({ invoices: updatedInvoices })
}
/*
addInvoice = (e) => {
  this.setState({
    invoices : [...this.state.invoices, e.target.value]
  })
}
paid = (e) => {

}
info = (e) => {

}
image = (e) => {

}
reconsiled = (e) => {

}*/
render() {
  const isLoading = this.state.isLoading;
  
  if(isLoading){return <div>Loading...</div>};
  
  const allInvoices = this.state.invoices;
  let invoiceControls = allInvoices.map(x => 
    <tr key={x.id}>
      <td>{x.vendor}</td>
      <td>{x.amount}</td>
      <td>{x.invoice}</td>
      <td>{x.date}</td>
      
      <td><Button className="btn btn-lg btn-danger" onClick={()=>this.delBtn(x.id)}>Delete <FontAwesomeIcon icon={faTrashAlt}/></Button></td>
      <td><Button className="btn btn-lg btn-success" onClick={()=>this.delBtn(x.id)}>Enter <FontAwesomeIcon icon={faCheckSquare}/></Button></td>
      <td><Button className="btn btn-lg btn-info" onClick={()=>this.delBtn(x.id)}>Information <FontAwesomeIcon icon={faInfo} /></Button></td>
      <td><Button className="btn btn-lg btn-warning" onClick={()=>this.delBtn(x.id)}>Reconcile <FontAwesomeIcon  icon={faCalculator}  /></Button></td>
      
    </tr>
  );

  return(

    <div className='container border border-secondary rounded secondary' >
      
      <h1>This is a bills app being built using React</h1>
      
      <div className='row'>
        <div className='col-12'>
          <h4>Pending bills - KosariCo</h4>
        </div>
      </div>

      <div className='row'>
        <div className='.col-xs-small center text-center'>
          <Table dark responsive bordered hover>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Amount</th>
                <th>Invoice</th>
                <th>Date</th>
                <th colSpan='4'>Actions</th>
                <th>image</th>
              </tr>
            </thead>
            <tbody>
              
              {this.state.invoices.length === 0 ? <tr><td colSpan='9'>All Caught Up</td></tr> : invoiceControls}
              
            </tbody>
          </Table>
        </div>
      </div>

    </div>

    
  );
}
}


export default App;