import React from 'react';
// import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = () => {
  return (
    <div className={css.modalOverlay}>
      <div className={css.modalPicture}>
        <img
          src="https://via.placeholder.com/1024x768"
          alt="Placeholder 1024x768"
        />
      </div>
    </div>
  );
};
