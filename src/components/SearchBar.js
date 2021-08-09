import React, { useState, useEffect } from 'react'
import { IoSearch }from 'react-icons/io5';
import './SearchBar.css';

const SearchBar = props => {
  const {placeholder, search} = props;
  const [term, setTerm] = useState('');

 const onInputChange = e => {
   if (e.target.value !== '') {
     setTerm(e.target.value);
   }
   props.onTermChanged(term);
  };

  return (
    <div className="searchbar-container">
      <div className="input-container">
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          onFocus={e => e.target.placeholder = ''}
          onBlur={e => e.target.placeholder = `${placeholder}`}
          value={term}
          onChange={onInputChange}
        />
        <span className="search-icon">
          <IoSearch onClick={search} />
        </span>
      </div>
    </div>
  )
}

export default SearchBar;

