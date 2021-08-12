import React, { useState, useEffect }  from 'react'
import GridOfBoxes from './components/GridOfBoxes';
import SearchBar from './components/SearchBar';
import { searchGifs, getGifs } from './axiosInstance';
import './App.css';

const App = () =>  {
  const [gifList, setGifList] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    getAllGifs();
  },[]);

  const getAllGifs = async (term) => {
    try {
      if (!term) {
        const defaultGifs = await getGifs(term);
        let arrayOfDownsizedImages = defaultGifs.map(image => {
          return image.images.downsized.url;
        });
        let doubleGifs = [...arrayOfDownsizedImages, ...arrayOfDownsizedImages];
        setGifList(doubleGifs);
      }
      // Do something if term is entered and make this function cover the search
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = e => {
    e.preventDefault();
    setTerm(e.target.value);
    console.log('term in App is:', term)
  };

  const resetInputField = () => {
    setTerm('');
  };

  // const getGifsFromSearch = async term => {
  //   if(term > 0) {
  //     const searchData = await searchGifs(term);
  //     console.log('searchData', searchData);
  //     let arrayOfDownsizedImages = searchData.map(gif => {
  //       return gif.images.downsized.url;
  //     });
  //     let doubleGifs = [...arrayOfDownsizedImages, ...arrayOfDownsizedImages];
  //     setGifList(doubleGifs);
  //     return arrayOfDownsizedImages;
  //   }
  // };

  return (
    <div className="app-container" >
      <SearchBar
        placeholder="Search GIFs"
        gifData={gifList}
        handleChange={handleInputChange}
        term={term}
        resetInputField={resetInputField}
      />
      <GridOfBoxes gifData={gifList}/>
    </div>
  )
};

export default App;



