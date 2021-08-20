import React from 'react'
import './Modal.css';

const Modal = ({ openModal, toggleModal, children }) => {
  if(!openModal) return null;

  return (
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-body">
            <iframe
              src="https://giphy.com/embed/3oEjHOyNwE2iz1z6bC"
              title="giphy-cat"
              width="300"
              height="300"
              frameBorder="0"
              className="giphy-embed">
            </iframe>
            <p><a href="https://giphy.com/gifs/originals-animation-kitten-logo-3oEjHOyNwE2iz1z6bC">via GIPHY</a></p>
            <div className="modal-title">
              <div>How to play:</div>
            </div>
            <div className="instructions">
              <p> 1. Enter a search term and find your favorite GIFs</p>
              <p> 2. Find the matching pairs of GIFs</p>
              <p> 3. Goal is to find all pairs in the lowest amount of clicks</p>
              <p> 3. Your best score will be saved!</p>
            </div>
            <div className="button-container">
              <button className="close-modal-button" onClick={toggleModal}>
                Close and Play
              </button>
            </div>
         </div>
        </div>
      </div>
  )
}

export default Modal;
