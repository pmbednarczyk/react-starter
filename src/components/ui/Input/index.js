import React from 'react';
import classNames from 'classnames';

import InputPropTypes, { InputDefaultProps } from './shapes';

import './styles.module.scss';

const Input = (
  {
    onChange,
    isError,
    type,
    value: formattedValue,
    placeholder,
    isDisabled,
  },
) => {
  const inputClassnames = classNames({
    inputContainer: true,
    isError,
    isDisabled,
  });

  const onInputChange = (event) => {
    const { value } = event.target;

    return onChange(value);
  };

  return (
    <div className={inputClassnames}>
      <input
        onChange={onInputChange}
        value={formattedValue}
        placeholder={placeholder}
        disabled={isDisabled}
        type={type}
      />
    </div>
  );
};

Input.propTypes = { ...InputPropTypes };
Input.defaultProps = { ...InputDefaultProps };

export default Input;
