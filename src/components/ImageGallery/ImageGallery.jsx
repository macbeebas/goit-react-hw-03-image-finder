import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.jsx';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ isImagesLoaded, onClick, pictures }) => {
  return (
    <ul className={css.galleryList}>
      {isImagesLoaded && <p>loaded...</p>}
      {pictures &&
        pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            largeImageURL={largeImageURL}
            onClick={onClick}
            key={id}
            id={id}
            webformatURL={webformatURL}
            target="_blank"
            rel="noreferrer noopener"
            tags={tags}
          />
        ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
