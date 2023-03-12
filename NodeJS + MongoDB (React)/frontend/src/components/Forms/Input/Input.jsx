import React from 'react';
import cx from 'classnames';
import PropTypes from "prop-types";

import './Input.scss'

const Input = ({type,placeholder,label,name,className, error, errorMessage, ...restProps}) => {
  return(
    <label className={cx("form-item",className,{'has-validation':error})}>
        <p className="form-label">{label}</p>
        <input type={type} className="form-control" name={name} {...restProps} placeholder={placeholder} />
	    {error && <p className="error-message">{errorMessage}</p>}
  </label>
  )
}
Input.defaultProps = {
  type:'text'
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}

export default Input;
