import React, { useState, useEffect } from 'react'
import { getGifs} from '../axiosInstance';

const GifList = () => {
  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      const gifData = await getGifs();
      console.log('searchResults in GifList.js', gifData);
      setGifData(gifData);
    }
    fetchGifs();
  },[]);

  const renderGifs = () => {
    return gifData.map(gif => {
      return (
        <div className="gif" key={gif.id}>
            <img src={gif.images.fixed_height.url} alt="gif"/>
        </div>
    )})
  }

  return (
    <div className="gif-container">
      {renderGifs()}
    </div>
  )
}

export default GifList;
