import {useSelector} from "react-redux";
import {selectShoppingCart} from "../../selecters";
import EmptyCart from "../../compositions/CartSlide/EmptyCart";
import CardProduct from '../../components/CardProduct'

const ShoppingCart = () => {
	const shoppingCart = useSelector(selectShoppingCart);

	const isShoppingCart = shoppingCart.length === 0

	const productsMap = shoppingCart?.map((product, key) => (
		<CardProduct key={key} picture={product.src} id={product.id} title={product.title} price={product.prices} label={product.label}/>
	))

	return (
		<div className="container">
			{isShoppingCart && <EmptyCart/>}
			{
				!isShoppingCart && (<div className="cards-wrapper">{productsMap}</div>)
			}
		</div>
	);
};

export default ShoppingCart;
