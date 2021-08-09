import React  from 'react'
import GridOfBoxes from './components/GridOfBoxes';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';
import './App.css';
import GifList from './components/GifList';

const App = () =>  {

  return (
    <div className="app-container" >
      <SearchBar  placeholder="Search GIFs" />
      <SearchList />
      <GridOfBoxes />
      <GifList />
    </div>
  )
};

export default App;



