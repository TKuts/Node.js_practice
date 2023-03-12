import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cx from 'classnames';

import './Button.scss'

const Button = ({isPrimary,isSecondary,isOutlinePrimary,isOutlineSecondary,isText,children,onClick,href,type,to, className, ...restProps}) => {
	let Component = href ? "a" : "button";

	if (to) {
		Component = Link;
	}

	// console.log(Component);

	return (
		<Component
			{...restProps}
			href={href}
			type={href || to ? undefined : type}
			to={to}
			className={cx(
				'btn',
				{'btn-primary':isPrimary},
				{'btn-secondary':isSecondary},
				{'btn-outline-primary':isOutlinePrimary},
				{'btn-outline-secondary':isOutlineSecondary},
				{'btn-light':isText},
				className
			)}
			onClick={onClick}
		>
			{children}
		</Component>
	);
};

Button.defaultProps = {
	onClick: () => {},
	type: "button",
};

Button.propTypes = {
	onClick: PropTypes.func,
	href: PropTypes.string,
	type: PropTypes.string,
	to: PropTypes.string,
	isPrimary: PropTypes.bool,
	isSecondary: PropTypes.bool,
	isOutlinePrimary: PropTypes.bool,
	isOutlineSecondary: PropTypes.bool,
	isText: PropTypes.bool,
};

export default Button;
