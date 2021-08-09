import React, { useState, useEffect } from 'react'
import { IoSearch }from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { searchGifs } from '../axiosInstance';
import './SearchBar.css';

const SearchBar = props => {
  const {placeholder} = props;
  const [term, setTerm] = useState('');
  const [gifsFromSearch, setGifsFromSearch] = useState([]);

  console.log('gifsFromSearch', gifsFromSearch);
  console.log('term in SearchBar is:', term);

  const onInputChange = e => {
    setTerm(e.target.value);
  };

  const getSearchData = async () => {
    try {
      if(term.length > 0) {
        const gifData = await searchGifs(term);
        let arrayOfDownsizedImages = gifData.map(gif => {
          return gif.images.downsized.url;
        });
       setGifsFromSearch(arrayOfDownsizedImages);
      }
    } catch (err) {
      console.log()
    }
  };

  const resetInputField = () => {
    setTerm('');
  }

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
            <IoSearch onClick={getSearchData} />
            <IoClose onClick={resetInputField} />
          </span>
      </div>
    </div>
  )
}

export default SearchBar;

