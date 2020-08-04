import React from 'react';
import {faInfo} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Popup from 'reactjs-popup';

let modalStyle = {
  color: 'black',
}

const DebtRelief = () => (
  <Popup
    trigger={<button className="btn btn-lg btn-info"> Debt Relief <FontAwesomeIcon icon={faInfo} /></button>}
    modal
    closeOnDocumentClick
  >
    <span style={modalStyle}> Debt Relief modal </span>
  </Popup>
);

export default DebtRelief;