import React from 'react';
import PropTypes from 'prop-types';

import './styles.module.scss';

const LoaderAnimation = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loader">
      <div className="loaderDots" />
    </div>
  );
};

LoaderAnimation.defaultProps = {
  isLoading: true,
};

LoaderAnimation.propTypes = {
  isLoading: PropTypes.bool,
};

export default LoaderAnimation;
