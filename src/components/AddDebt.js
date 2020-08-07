import React from 'react';
//import propTypes from 'prop-types';

class AddDebt extends React.Component {
  state = {
    creditor: '',
    balance : '',
    originalbalance: '',
    rate : '',
    payment: '',
    goal: '',
    paidoffdate: '',
    totalinterestpaid: '',
    monthstopayoff: '',
    payoffstrategy: ''
  }
onSubmit = (e) => {
  e.preventDefault();
  this.props.addDebt(this.state.debts);
  this.setState({
    creditor: '',
    balance : '',
    originalbalance: '',
    rate : '',
    payment: '',
    goal: '',
    paidoffdate: '',
    totalinterestpaid: '',
    monthstopayoff: '',
    payoffstrategy: ''
  })
}
onChange = (e) => this.setState({[e.target.name]: e.target.value})
render () {

  

  let debtInputForm = (
    <div className='input-container'>
      <form onSubmit={this.onSubmit}>
        <input 
          type='text'
          name='creditor'
          placeholder="Wells Fargo, BofA, etc..."
          value={this.state.creditor}
          onChange={this.onChange}
        />   
        <input
          type='number'
          name='balance'
          placeholder="Remaing Balance"
          value={this.state.balance}
          onChange={this.onChange}
        />
        <input
          type='number'
          name='originalbalance'
          placeholder="Starting Balance"
          value={this.state.originalbalance}
          onChange={this.onChange}
        />
        <input
          type='number'
          name='rate'
          placeholder="Interest Rate"
          value={this.state.rate}
          onChange={this.onChange}
        />
        <input
          type='number'
          name='payment'
          placeholder="Monthly Payments"
          value={this.state.payment}
          onChange={this.onChange}
        />
        <input
          type='number'
          name='goal'
          placeholder="Goal"
          value={this.state.goal}
          onChange={this.onChange}
        />
        <input
          type='text'
          name='paidoffdate'
          placeholder="Your Pay Off Date"
          value={this.state.paidoffdate}
          onChange={this.onChange}
        />
        <input
          type='number'
          name='totalinterestpaid'
          placeholder="Total Interest Paid"
          value={this.state.totalinterestpaid}
          onChange={this.onChange}
        />
        <input
          type='number'
          name='monthstopayoff'
          placeholder="Months Remaining to Pay Off"
          value={this.state.monthstopayoff}
          onChange={this.onChange}
        />
        <input
          type='text'
          name='payoffstrategy'
          placeholder="Pay Off Strategy"
          value={this.state.payoffstrategy}
          onChange={this.onChange}
        />
      </form>
    </div>
  );

  return (
    <React.Fragment>
      {debtInputForm}
    </React.Fragment>
  );

  // let debtInputTable = (
  //   <tr>
  //     <th>
  //       <input 
  //           type='text'
  //           name='creditor'
  //           placeholder="Wells Fargo, BofA, etc..."
  //           value={this.state.creditor}
  //           onChange={this.onChange}
  //       />
  //     </th>  
  //     <th>
  //       <input
  //         type='text'
  //         name='balance'
  //         placeholder="Remaing Balance"
  //         value={this.state.balance}
  //         onChange={this.onChange}
  //       />
  //     </th>
  //     <th>
  //       <input
  //         type='text'
  //         name='originalbalance'
  //         placeholder="Starting Balance"
  //         value={this.state.originalbalance}
  //         onChange={this.onChange}
  //       />
  //     </th>
  //     <th>
  //       <input
  //         type='text'
  //         name='rate'
  //         placeholder="Interest Rate"
  //         value={this.state.rate}
  //         onChange={this.onChange}
  //       />
  //     </th>
  //     <th>
  //       <input
  //         type='text'
  //         name='payment'
  //         placeholder="Monthly Payments"
  //         value={this.state.payment}
  //         onChange={this.onChange}
  //       />
  //     </th>
  //     <th>
  //       <input
  //         type='text'
  //         name='goal'
  //         placeholder="Goal"
  //         value={this.state.goal}
  //         onChange={this.onChange}
  //       />
  //     </th>
  //     <th>
  //       <input
  //         type='text'
  //         name='paidoffdate'
  //         placeholder="Your Pay Off Date"
  //         value={this.state.paidoffdate}
  //         onChange={this.onChange}
  //       />
  //     </th>
  //     <th>
  //       <input
  //         type='text'
  //         name='totalinterestpaid'
  //         placeholder="Total Interest Paid"
  //         value={this.state.totalinterestpaid}
  //         onChange={this.onChange}
  //       />
  //     </th>
  //     <th>
  //       <input
  //         type='text'
  //         name='monthstopayoff'
  //         placeholder="Months Remaining to Pay Off"
  //         value={this.state.monthstopayoff}
  //         onChange={this.onChange}
  //       />
  //     </th>
  //     <th>
  //       <input
  //         type='text'
  //         name='payoffstrategy'
  //         placeholder="Pay Off Strategy"
  //         value={this.state.payoffstrategy}
  //         onChange={this.onChange}
  //       />
  //     </th>
  //   </tr>
  // );
}
}

export default AddDebt;
