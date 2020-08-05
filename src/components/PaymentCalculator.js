import React from 'react';
import {faCalculator} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

let modalStyle = {
  color: 'black',
}

const PaymentCalculator = (props) => (
  <Popup
    trigger={<button className="btn btn-lg btn-warning"> Payment Calculator <FontAwesomeIcon icon={faCalculator} /></button>}
    modal
    closeOnDocumentClick
  >
    <span style={modalStyle}> If I modify it here it will be called in the parent component {props.balance}</span>
    
  </Popup>
);
PaymentCalculator.propTypes = {balance: PropTypes.number.isRequired};
export default PaymentCalculator;