import React, {useState, useEffect} from 'react'
import { getGifs } from '../axiosInstance';
import Box from './Box';
import './GridOfBoxes.css';

const GridOfBoxes = props => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [count, setCount] = useState(0);
  const [randomGifs, setRandomGifs] = useState([]);
  const [bestScore, setBestScore] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let gifUrls = await getAllGifs();
        let doubleGifs = [...gifUrls, ...gifUrls];
        shuffleArray(doubleGifs);
        setRandomGifs(doubleGifs);
      } catch (err) {
        console.log(err);
      }
    })();
    // Pull from storage, check if null, parse, and set in state
    let scoreInStorage = localStorage.getItem('bestScore');
    if(scoreInStorage !== null) {
      scoreInStorage = parseInt(scoreInStorage);
    }
    setBestScore(scoreInStorage);
  },[]);

  const getAllGifs = async () => {
    try {
      const gifData = await getGifs();
      let arrayOfDownsizedImages = gifData.map(image => {
        return image.images.downsized.url;
     });
     setRandomGifs(arrayOfDownsizedImages);
     return arrayOfDownsizedImages;
    } catch (err) {
      console.error(err);
    }
  };

  const onBoxClicked = (index) => {
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
      newBoxesSelected = [index];
    } else {
      // Else, select another box, and remember it's index, in addition to previous box(es) selected
      // Store those additional box indexes in state
      newBoxesSelected = [...selectedBoxes, index];
      // randomGif is an array of strings
      // newBoxesSelected is an arr, with 2 indexes
      // If they match, then they fade out slowly
      if(randomGifs[newBoxesSelected[0]] === randomGifs[newBoxesSelected[1]]) {
        setTimeout(() => {
          randomGifs[newBoxesSelected[0]] = null;
          randomGifs[newBoxesSelected[1]] = null;
          setRandomGifs([...randomGifs]);
          checkEndOfGame();
        }, 1000);
      }
    }
      // Remember the box that I want to deselect using the index from above
      setSelectedBoxes(newBoxesSelected);
      if(newBoxesSelected.length === 1) {
        setCount(count + 1);
      }
  }

  const checkEndOfGame = () => {
    // Find if all values from randomGifs are null
    let isGameOver = true;
    for (let gif of randomGifs) {
      if (gif !== null) {
        isGameOver = false;
        break;
      }
    }
    if(!isGameOver) {
      return;
    }
    let currentScore = count;
    if(currentScore < bestScore || bestScore === null) {
      localStorage.setItem('bestScore', currentScore);
      setBestScore(currentScore);
    }
  };

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
        randomGif={randomGifs[i]}
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
        <p>You're going click crazy! You've clicked {count} times! </p>
      </div>
      <div className="score">
       Best Score: {bestScore}
      </div>
      <div>
      </div>
    </div>
  )
}

export default GridOfBoxes;
