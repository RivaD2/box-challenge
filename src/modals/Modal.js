import React from 'react'
import './Modal.css';

const Modal = ({ openModal, toggleModal, children }) => {
  if(!openModal) return null;

  return (
      <div className="modal-container">
        <div className="modal-content">
          <iframe
            src="https://giphy.com/embed/3oEjHOyNwE2iz1z6bC"
            title="giphy-cat"
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen>
          </iframe>
          <p><a href="https://giphy.com/gifs/originals-animation-kitten-logo-3oEjHOyNwE2iz1z6bC">via GIPHY</a></p>
          <div className="modal-title">
            <div>How to play:</div>
          </div>
          <div className="instructions">
            <p> 1. Enter a search term and find your favorite GIFs</p>
            <p> 2. Test your memory skills by trying to find the matching pairs</p>
            <p> 3. Find the matching pairs in shortest amount of clicks</p>
          </div>
          <div className="button-container">
            <button className="close-modal-button" onClick={toggleModal}>
              Close and Play
            </button>
          </div>
        </div>
      </div>
  )
}

export default Modal;
