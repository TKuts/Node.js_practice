import {ErrorMessage, Field} from "formik";
import cx from 'classnames';
import PropTypes from "prop-types";

import './InputSelect.scss'

const InputSelect = ({placeholder, label, name, className, error, children, ...restProps}) => {
	return (
		<label className={cx("form-item", className, {'has-validation': error})}>
			<p className="form-label">{label}</p>
			<Field as="select" className="form-control" name={name} {...restProps}
			       placeholder={placeholder}>
				{children}
			</Field>
			<ErrorMessage className='error-message' name={name} component='p'/>
		</label>
	)
}
InputSelect.defaultProps = {
	type: 'text'
}

InputSelect.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string,
}

export default InputSelect;
