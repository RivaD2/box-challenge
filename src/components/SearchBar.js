import React, { useState, useEffect } from 'react'
import { IoSearch }from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import './SearchBar.css';

const SearchBar = ({ placeholder, onSearch }) => {
  const [term, setTerm] = useState('');

  const onGetGifsFromSearch = () => {
    onSearch(term);
  };

  const handleInputChange = e => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  const resetInputField = () => {
    setTerm('');
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
          onChange={handleInputChange}
        />
      <div className="clear-icon-container">
        <IoClose onClick={resetInputField} className="clear-icon search-icon"/>
      </div>
    </div>
  )
}

export default SearchBar;

