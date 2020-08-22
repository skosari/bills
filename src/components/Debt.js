import React from 'react';

const Debt = ({creditor,balance,originalbalance,rate,payment,goal,paidoffdate,totalinterestpaid,monthstopayoff,payoffstrategy}) => {

  return(
    <tbody>
      <th>{creditor}</th>
      <th>{balance}</th>
      <th>{originalbalance}</th>
      <th>{rate}</th>
      <th>{payment}</th>
      <th>{goal}</th>
      <th>{paidoffdate}</th>
      <th>{totalinterestpaid}</th>
      <th>{monthstopayoff}</th>
      <th>{payoffstrategy}</th>
    </tbody>
  )
}

export default Debt;