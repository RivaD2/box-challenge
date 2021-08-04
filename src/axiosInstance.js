import axios from 'axios';
const giphyKey = process.env.REACT_APP_API_KEY;

export const instance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
  timeout: 1000,
});


export const getGifs = async () => {
  try {
    const response = await instance.get(`search?q=animal%20jerks&api_key=${giphyKey}&limit=6`);
    return response.data.data;
  } catch (err) {
    return console.error(err);
  }
};