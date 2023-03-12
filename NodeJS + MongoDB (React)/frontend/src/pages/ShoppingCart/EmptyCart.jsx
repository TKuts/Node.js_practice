import {ReactComponent as Empty} from "./images/empty_cart.svg";

import './EmptyCart.scss'

const EmptyCart = () => {
	return (
		<div className="empty-cart-wrap">
			<div className="icon">
				<Empty />
			</div>
			<p className="text">Your shopping cart is empty.</p>
		</div>
	);
};

export default EmptyCart;
