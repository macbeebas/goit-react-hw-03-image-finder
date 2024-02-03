import React from 'react';
import PropTypes from 'prop-types';
import css from './ButtonLoadMore.module.css';

export const ButtonLoadMore = ({ isBtnLoadMore }) => {
  return (
    <button className={css.btn} type="button" onClick={isBtnLoadMore}>
      Load more
    </button>
  );
};

ButtonLoadMore.propTypes = {
  isBtnLoadMore: PropTypes.func,
};
