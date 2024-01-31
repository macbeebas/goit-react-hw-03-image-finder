import React, { Component } from 'react';
// import css from './Loader.module.css';
// import PropTypes from 'prop-types';

import { FallingLines } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    );
  }
}

// Loader.propTypes = {
//   isLoader: PropTypes.bool,
// };
