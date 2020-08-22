import React, {useState, createContext} from 'react';

export const DebtContext = createContext();

export const DebtProvider= (props) => {
    const [debt, setDebt] = useState ([
        {
            id: 0,
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
      ]);
    return (
        <DebtContext.Provider value = {[debt,setDebt]} >
            {props.children}
        </DebtContext.Provider>
    );
}