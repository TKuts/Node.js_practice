import { useMemo } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

function Portal(props) {
	const {
		id,
		children,
		clearContainer,
	} = props;

	const container = useMemo(() => document.getElementById(id), []);
	const childrenToDelete = useMemo(() => [].slice.call(container?.children || []), []);

	useMemo(() => {
		if (clearContainer) {
			// delete elements before render
			childrenToDelete.forEach((child) => {
				container.removeChild(child);
			});
		}
	}, [clearContainer]);

	if (!container) {
		return null;
	}

	return createPortal(
		children,
		container,
	);
}

Portal.propTypes = {
	id: PropTypes.string,
	clearContainer: PropTypes.bool,
};

Portal.defaultProps = {
	clearContainer: true,
};

export default Portal;
