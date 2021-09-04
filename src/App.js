import React, { useState, useEffect }  from 'react'
import GridOfBoxes from './components/GridOfBoxes';
import SearchBar from './components/SearchBar';
import { searchGifs } from './axiosInstance';
import Modal from './modals/Modal';
import './App.css';

const App = () =>  {
  const [gifList, setGifList] = useState([]);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getAllGifs();
  },[]);

  const getAllGifs = async term => {
    try {
      if (!term) {
        term = 'cats';
      }
      const defaultGifs = await searchGifs(term);
      let arrayOfDownsizedImages = defaultGifs.map(image => {
        return image.images.downsized.url;
      });
      let doubleGifs = [...arrayOfDownsizedImages, ...arrayOfDownsizedImages];
      setGifList(doubleGifs);
    } catch (error) {
      setError('Unable to fetch gifs');
      if (error) {
        console.log(`Error here: ${error.message}`);
      }
    }
  };

  const onSearch = term => {
    getAllGifs(term);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  };

  return (
    <div className="app-container" >
      <div className="page-title">
        The GIFing Game
      </div>
      <button className="show-instructions" onClick={toggleModal}>
       HOW TO PLAY
      </button>
      <SearchBar placeholder="Search GIFs" onSearch={onSearch} />
      <div className="error-message">
        {error}
      </div>
      <GridOfBoxes gifData={gifList} setGifList={setGifList} />
      <Modal openModal={modalOpen} toggleModal={toggleModal} />
    </div>
  )
};

export default App;



