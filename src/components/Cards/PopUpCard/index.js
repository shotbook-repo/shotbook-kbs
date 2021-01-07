import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Equipmentform from './EquipmenForm';
import MediumButton from '../../Buttons/MediumButton'
import MyForm from './EquipmenForm';
 
const Modal = ({text}) => (
    <Popup trigger={<button className="button"> {text} </button>} modal>
      <MyForm/>
      <div>
      <input type="submit" value="Submit"></input>
      <MediumButton
      text='submit'
       />
      </div>
    </Popup>
  );
  export default Modal;