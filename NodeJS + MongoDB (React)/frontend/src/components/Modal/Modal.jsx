import cx from 'classnames';

import './Modal.scss'

const Modal = ({isShow, onShow, className, animateAppear, onHide,children, ...restProps}) => {
	
	const modalHandler = (e) => {
		if (!e.target.closest('.modal-dialog')){
			onHide()
		}
	}

	return (
		<>
			{
				isShow && (
					<>
						<div className={cx("modal fade", className, {show:isShow})}
						     aria-hidden="true"
						     onClick={modalHandler}
						>
							<div className="modal-dialog">
								<div className="modal-content">
									{children}
								</div>
							</div>
						</div>
						<div className={cx("modal-backdrop fade", {show:isShow})}></div>
					</>
				)
			}
		</>
	);
};

export default Modal;
