import React from 'react'
import { Animated } from 'react-animated-css';
import './Box.css';

const Box = props => {
  // Index is the index of THIS box, selectedBoxes is the index of a box selected
  const {selectedBoxes, index, onBoxClicked, randomGif} = props;

  const onClickedBox = () => {
    onBoxClicked(index);
  };

  // If box 5 is selected, that is the selectBoxes index, but not the index
  // If index is box 5, and box 5 is the selectedBoxes index, then THIS box is selected!
  // If index not equal -1, then I know I have a box selected
  const isSelected = selectedBoxes.indexOf(index) !== -1;
  let style;
  let visible = true;
  if (randomGif === null) {
    style = {};
    visible = false;
  } else if(isSelected) {
    style = {backgroundImage: `url('${randomGif}')`};
  } else {
    style = {};
  }

  return (
    <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={visible}>
      <div className="box" style={style}></div>
      <div className='box-container' onClick={onClickedBox} style={style}>
        <div className="box"></div>
      </div>
    </Animated>
  )
}

export default Box;
