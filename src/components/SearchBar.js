import React, { useState, useEffect } from 'react'
import { IoSearch }from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import './SearchBar.css';

const SearchBar = (props) => {
  const {placeholder, data} = props;
  const [gifs, setGifs] = useState([]);
  const [term, setTerm] = useState('');

  const onInputChange = e => {
      e.preventDefault();
      setTerm(e.target.value);
  };

   const resetInputField = () => {
    setTerm('');
  };

  const getGifsFromSearch = () => {
      setGifs(data);
  };

  return (
    <div className="searchbar-container">
      <div className="search-icon-container">
        <IoSearch onClick={getGifsFromSearch} className="search-icon" />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        onFocus={e => e.target.placeholder = ''}
        onBlur={e => e.target.placeholder = `${placeholder}`}
        value={term}
        onChange={onInputChange}
      />
      <div className="clear-icon-container">
        <IoClose onClick={resetInputField} className="clear-icon"/>
      </div>
    </div>
  )
}

export default SearchBar;

