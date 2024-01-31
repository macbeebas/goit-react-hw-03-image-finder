import React, { Component } from 'react';
// import PropTypes from "prop-types";
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.galleryItem}>
        <img
          className={css.galleryItemImg}
          src="https://via.placeholder.com/320x240"
          alt="Placeholder 320x240"
        />
      </li>
    );
  }
}
