import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.module.scss';

import LoaderAnimation from '../../other/LoaderAnimation';

const PageLayout = ({ content, isLoading }) => {
  const pageLayoutClassnames = classNames({
    pageContainer: true,
    fadeInContent: !isLoading,
  });

  return (
    <div className={pageLayoutClassnames}>
      {isLoading ? <LoaderAnimation isLoading={isLoading} /> : content }
    </div>
  );
};

PageLayout.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  isLoading: PropTypes.bool,
};

PageLayout.defaultProps = {
  isLoading: false,
};

export default PageLayout;
