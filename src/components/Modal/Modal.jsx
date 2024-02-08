import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    // document.body.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
    // document.body.style.top = `-${window.scrollY}px`;
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    // const scrollY = document.body.style.top;
    // document.body.style.position = '';
    document.body.style.overflow = '';
    // document.body.style.top = '';
    // window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) this.props.onClose();
  };

  render() {
    const { onClose, bigPictureUrl, bigPictureTags } = this.props;
    return (
      <div className={css.modalOverlay} onClick={this.handleBackdropClick}>
        <div className={css.modalPicture}>
          <img
            src={bigPictureUrl}
            alt={bigPictureTags}
            className={css.showPicture}
          />
          <button
            type="button"
            className={css.btnClose}
            // aria-label="Close button"
            onClick={onClose}
          >
            <span>x</span>
          </button>
          {/* <div className={css.tagsBox}>{tags}</div> */}
        </div>
      </div>
      // modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  bigPictureUrl: PropTypes.string.isRequired,
  bigPictureTags: PropTypes.string,
};
