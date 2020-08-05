import React from 'react';
import {faInfo} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

let modalStyle = {
  color: 'black',
}

const DebtRelief = (props) => (
  <Popup
    trigger={<button className="btn btn-lg btn-info"> Debt Relief <FontAwesomeIcon icon={faInfo} /></button>}
    modal
    closeOnDocumentClick
  >
    <span style={modalStyle}> Debt Relief modal {props.balance} {props.paidoffdate} {props.rate}</span>
  </Popup>
);

DebtRelief.propTypes = {
  balance: PropTypes.number.isRequired,
  paidoffdate: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
}


export default DebtRelief;


