import React from 'react';
import Popup from 'reactjs-popup';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import AddDebt from './AddDebt';

const AddDebtModal = () => {
  return (
    <Popup
    trigger={<button className="btn btn-lg btn-success"> Add Debt <FontAwesomeIcon icon={faPlusSquare} /></button>}
    modal
    closeOnDocumentClick
  >
    
     <AddDebt /> 
    
    </Popup>
  );
}


export default AddDebtModal;
