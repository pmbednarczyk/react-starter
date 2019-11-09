import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.module.scss';

const Button = (
  {
    children,
    disabled,
    fullWidth,
    primary,
    onClick,
    raiseOnInteraction,
  },
) => {
  const btnClassnames = classNames({
    btn: true,
    primary,
    disabled,
    fullWidth,
    raise: raiseOnInteraction,
  });

  return (
    <button
      className={btnClassnames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  primary: PropTypes.bool,
  raiseOnInteraction: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  primary: false,
  raiseOnInteraction: false,
};

export default Button;
