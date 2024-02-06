import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const URL = 'https://pixabay.com/api/';
const KEY = '39270567-a82d11f42742c28a9e6d14c5c';
const PARAMS = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export async function GetFromApi(query, page) {
  const url = `${URL}?key=${KEY}&q=${query}&page=${page}`;
  console.log('url:', url);
  try {
    const response = await axios.get(`${url}`, { params: PARAMS });
    const totalHits = response.data.totalHits;
    const pictures = response.data.hits;
    const totalPages = Math.ceil(response.data.totalHits / PARAMS.per_page);
    return { pictures, totalHits, totalPages };
  } catch (error) {
    Notify.failure('ERROR!!! Something went wrong!');
  }
}
