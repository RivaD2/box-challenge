import React, {useState, useEffect} from 'react'
import Box from './Box';
import './GridOfBoxes.css';

const GridOfBoxes = props => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [randomBackgroundColor, setRandomBackgroundColor] = useState([]);
  const [count, setCount] = useState(0);
 
  const onBoxClicked = (index, randomColor) => {
    let newBoxesSelected;
    if (selectedBoxes.indexOf(index) !== -1) {
      // Creating a new arr to hold all new boxes selected 
      // Selected boxes is an arr of indexes, to get the indexes I want to remove, I can
      // just return selectedBoxes that don't equal the index
     newBoxesSelected = selectedBoxes.filter(selectedBox => {
       return selectedBox !== index;
     });
     // If two boxes are selected, clicking on a new box will deselect the previous two boxes.
    } else if (selectedBoxes.length >= 2) {
      console.log('selectedBoxes', selectedBoxes)
      newBoxesSelected = [index];
    } else {
      // Else, select another box, and remember it's index, in addition to previous box(es) selected
      // Store those additional box indexes in state
      newBoxesSelected = [...selectedBoxes, index];
      // randomBackgroundColor is an array of strings
      // newBoxesSelected is an arr, with 2 indexes
      if(randomBackgroundColor[newBoxesSelected[0]] === randomBackgroundColor[newBoxesSelected[1]]) {
        randomBackgroundColor[newBoxesSelected[0]] = null;
        randomBackgroundColor[newBoxesSelected[1]] = null;
        setRandomBackgroundColor([...randomBackgroundColor]);
      }
    }
      // Remember the box that I want to deselect using the index from above
      setSelectedBoxes(newBoxesSelected);
      if(newBoxesSelected.length === 1) {
        setCount(count + 1);
      }
  }

  // On page load,random colors are set at a different order each time
  useEffect(() => {
    let colors = [ 
      '#66ff66', 
      '#0099ff', 
      '#3333ff',
      '#00ffff',
      '#cc0099',
      '#ff3300',
    ];
    let newColors = [...colors,...colors]
    shuffleArray(newColors);
    setRandomBackgroundColor(newColors);
  }, [])

  // Shuffling my array of colors
  const shuffleArray = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  const boxes = [];
  const boxCount = 12;
  for(let i = 0; i < boxCount; i++) {
    boxes.push(
      <Box 
        selectedBoxes={selectedBoxes} 
        count={count}
        index={i} 
        key={i}
        onBoxClicked={onBoxClicked}
        randomColor={randomBackgroundColor[i]}
      />
    );
  }

  return (
    <div className="grid-container">
      <h1 className="page-title">BOX CHALLENGE</h1>
      <div className="grid-content">
        {boxes}
      </div>
      <div className="count-of-clicks">
        <p>You're going click crazy! The boxes were clicked {count} times! </p>
      </div>
    </div>
  )
}

export default GridOfBoxes;
