import React, { useState, useEffect }  from 'react'
import GridOfBoxes from './components/GridOfBoxes';
import SearchBar from './components/SearchBar';
import { searchGifs } from './axiosInstance';
import './App.css';

const App = () =>  {
  const [gifList, setGifList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllGifs();
  },[]);

  const getAllGifs = async term => {
    try {
      if(!term) {
        term = 'cats';
      }
      const defaultGifs = await searchGifs(term);
      let arrayOfDownsizedImages = defaultGifs.map(image => {
        return image.images.downsized.url;
      });
      let doubleGifs = [...arrayOfDownsizedImages, ...arrayOfDownsizedImages];
      setGifList(doubleGifs);
      // Do something if term is entered and make this function cover the search
    } catch (error) {
      setError('Unable to fetch gifs');
      if (error) {
        console.log(`Error here: ${error.message}`);
      }
    }
  };

  const onSearch = term => {
    getAllGifs(term);
  }

  return (
    <div className="app-container" >
      <SearchBar
        placeholder="Search GIFs"
        onSearch={onSearch}
      />
      <div className="error-message">
        {error}
      </div>
      <GridOfBoxes gifData={gifList} setGifList={setGifList}/>
    </div>
  )
};

export default App;



