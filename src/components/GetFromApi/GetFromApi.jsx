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

export async function GetFromApi(searchQuery, actualPage) {
  const url = `${URL}?key=${KEY}&q=${searchQuery}&page=${actualPage}`;
  console.log('in GetFromApi - url:', url);
  console.log('in GetFromApi - searchQuery:', searchQuery);
  console.log('in GetFromApi - actualPage:', actualPage);
  try {
    const response = await axios.get(`${url}`, { params: PARAMS });
    const pictures = response.data.hits;
    const totalHits = response.data.totalHits;
    const totalPages = Math.ceil(response.data.totalHits / PARAMS.per_page);
    return { pictures, totalHits, totalPages };
  } catch (error) {
    Notify.failure('ERROR!!! Something went wrong!');
  }
}
