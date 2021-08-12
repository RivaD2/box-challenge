import React, { useState, useEffect } from 'react'
import { IoSearch }from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import './SearchBar.css';

const SearchBar = ({placeholder, gifData, term, handleChange, resetInputField }) => {
  const [gifs, setGifs] = useState([]);

  const onGetGifsFromSearch = () => {
    setGifs(gifData);
    console.log('gifData in search', gifData);
  };

  return (
    <div className="searchbar-container">
      <div className="search-icon-container">
        <IoSearch onClick={onGetGifsFromSearch} className="search-icon" />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        onFocus={e => e.target.placeholder = ''}
        onBlur={e => e.target.placeholder = `${placeholder}`}
        value={term}
        onChange={handleChange}
      />
      <div className="clear-icon-container">
        <IoClose onClick={resetInputField} className="clear-icon"/>
      </div>
    </div>
  )
}

export default SearchBar;

