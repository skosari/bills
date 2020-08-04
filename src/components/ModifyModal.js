import React from 'react';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Popup from 'reactjs-popup';

let modalStyle = {
  color: 'black',
}

const ModifyModal = () => (
  <Popup
    trigger={<button className="btn btn-lg btn-success"> Modify <FontAwesomeIcon icon={faCheckSquare} /></button>}
    modal
    closeOnDocumentClick
  >
    <span style={modalStyle}> Modify Debt details Modal Content </span>
  </Popup>
);

export default ModifyModal;