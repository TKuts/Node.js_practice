import {ErrorMessage, Field} from "formik";
import cx from 'classnames';
import PropTypes from "prop-types";

import './InputFormik.scss'

const InputFormik = ({type,placeholder,label,name,className, error, as, ...restProps}) => {
  return(
    <label className={cx("form-item",className,{'has-validation':error})}>
        <p className="form-label">{label}</p>
        <Field type={type} className="form-control" as={as} name={name} {...restProps} placeholder={placeholder} />
        <ErrorMessage className='error-message' name={name} component='p'/>
  </label>
  )
}
InputFormik.defaultProps = {
  type: 'text',
  as: 'input'
}

InputFormik.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}

export default InputFormik;
