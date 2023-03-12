import React from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';

import './ButtonText.scss'

const ButtonText = ({children,onClick, className, ...restProps}) => {

	return (
		<button
			{...restProps}
			className={cx(
				'btn-text',
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

ButtonText.defaultProps = {
	onClick: () => {},
	type: "button",
};

ButtonText.propTypes = {
	onClick: PropTypes.func,
};

export default ButtonText;
