import React, { useState, useEffect }  from 'react'
import GridOfBoxes from './components/GridOfBoxes';
import SearchBar from './components/SearchBar';
import { searchGifs, getGifs } from './axiosInstance';
import './App.css';

const App = () =>  {
  const [gifList, setGifList] = useState([]);
  console.log('gifList in App.js:', gifList);

  useEffect(() => {
    getAllGifs();
  },[]);

  const getAllGifs = async term => {
    try {
      if(!term) {
        const defaultGifs = await getGifs();
        let arrayOfDownsizedImages = defaultGifs.map(image => {
          return image.images.downsized.url;
        });
        setGifList(arrayOfDownsizedImages);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const gifsFromSearch = async term => {
    if(term > 0) {
      const searchData = await searchGifs(term);
      let arrayOfDownsizedImages = searchData.map(gif => {
        return gif.images.downsized.url;
      });
      return arrayOfDownsizedImages;
    }
  };

  return (
    <div className="app-container" >
      <SearchBar
        placeholder="Search GIFs"
        data={gifList}
      />
      <GridOfBoxes data={gifList}/>
    </div>
  )
};

export default App;



