import React, { useState } from 'react'
import { Animated } from 'react-animated-css';
import './Box.css';

const Box = props => {
  const [visible, setVisible] = useState(true);

  const hideCard = () => {
    setTimeout(() => setVisible(false), 1000);
  }

  // Index is the index of THIS box, selectedBoxes is the index of a box selected
  const {selectedBoxes, index, onBoxClicked, randomGif} = props;
  console.log('randomGif as prop in box', randomGif)
  const onClickedBox = () => {
    onBoxClicked(index);
  }
 
  // If box 5 is selected, that is the selectBoxes index, but not the index
  // If index is box 5, and box 5 is the selectedBoxes index, then THIS box is selected!
  // If index not equal -1, then I know I have a box selected
  const isSelected = selectedBoxes.indexOf(index) !== -1;
  let style;
  if(randomGif === null) {
    style = {visibility :'hidden'}
  } else if(isSelected) {
    style = {backgroundImage: `url('${randomGif}')`};
    console.log('randomGif in box.js', randomGif);
    console.log('backgroundimage',{backgroundImage: `url(${randomGif}`});
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
