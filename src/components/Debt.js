import React from 'react';

const Debt = ({creditor,balance,originalbalance,rate,monthlyinterest,payment,goal,paidoffdate,totalinterestpaid,monthstopayoff}) => {

  return(
    <tbody>
      <tr>
      <td>{creditor}</td>
      <td>{balance}</td>
      <td>{originalbalance}</td>
      <td>{rate}</td>
      <td>{monthlyinterest}</td>
      <td>{payment}</td>
      <td>{goal}</td>
      <td>{paidoffdate}</td>
      <td>{totalinterestpaid}</td>
      <td>{monthstopayoff}</td>
      </tr>
    </tbody>
  )
}

export default Debt;