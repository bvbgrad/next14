import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true)
  }
  
  function closeModalHander() {
    setModalIsOpen(false)
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHander} onConfirm={closeModalHander} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHander} />}
    </div>
  );
}

export default Todo;
