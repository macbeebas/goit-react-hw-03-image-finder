import React, { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.jsx';
// import PropTypes from "prop-types";
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.galleryList}>
        <ImageGalleryItem /> {/* - 01 - */}
        <ImageGalleryItem /> {/* - 02 - */}
        <ImageGalleryItem /> {/* - 03 - */}
        <ImageGalleryItem /> {/* - 04 - */}
        <ImageGalleryItem /> {/* - 05 - */}
        <ImageGalleryItem /> {/* - 06 - */}
        <ImageGalleryItem /> {/* - 07 - */}
        <ImageGalleryItem /> {/* - 08 - */}
        <ImageGalleryItem /> {/* - 09 - */}
        <ImageGalleryItem /> {/* - 10 - */}
        <ImageGalleryItem /> {/* - 11 - */}
        <ImageGalleryItem /> {/* - 12 - */}
      </ul>
    );
  }
}
