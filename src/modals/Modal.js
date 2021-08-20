import React from 'react'
import './Modal.css';

const Modal = ({ openModal, toggleModal }) => {
  if(!openModal) return null;

  return (
      <div className="modal-container" onClick={toggleModal}>
        <div className="modal-content" >
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
              <div>HOW TO PLAY</div>
            </div>
            <div className="instructions">
              <p>Search for your favorite GIFS and click to find the
                matching pairs.</p>
              <p>Try to match all pairs in the lowest amount of clicks.</p>
              <p>Your best score will be saved!</p>
            </div>
            <div className="button-container">
              <button className="close-modal-button" onClick={toggleModal}>
                CLOSE AND PLAY
              </button>
            </div>
         </div>
        </div>
      </div>
  )
}

export default Modal;
