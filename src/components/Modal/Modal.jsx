import React, { Component } from 'react';
// import PropTypes from "prop-types";
import css from './Modal.module.css';

export class Modal extends Component {
  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img
            src="https://via.placeholder.com/320x240"
            alt="Placeholder 320x240"
          />
        </div>
      </div>
    );
  }
}
