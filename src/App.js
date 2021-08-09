import React, { useState } from 'react'
import GridOfBoxes from './components/GridOfBoxes';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';
import { searchGifs } from './axiosInstance';
import './App.css';

const App = () =>  {
  const [term, setTerm] = useState('');

  const handleSearchtermChanged = () => {
    setTerm(term);
  };

  return (
    <div className="app-container" >
      <SearchBar onTermChanged={handleSearchtermChanged}  placeholder="Search GIFs" search={searchGifs}/>
      <SearchList />
      <GridOfBoxes />
    </div>
  )
};

export default App;



