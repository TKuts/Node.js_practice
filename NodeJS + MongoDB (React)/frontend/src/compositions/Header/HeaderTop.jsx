import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import ButtonText from "../../components/ButtonText";
import Button from "../../components/Button";

import {selectUser, selectAuthUserToken, selectShoppingCart, selectFavorite} from "../../selecters";

import {ReactComponent as User} from './images/user.svg'
import {ReactComponent as Cart} from './images/cart.svg'
import {ReactComponent as Star} from './images/star.svg'

const HeaderTop = ({showModalLogin, showCart}) => {
	const user = useSelector(selectUser)
	const isLogin = useSelector(selectAuthUserToken);
	const shoppingCart = useSelector(selectShoppingCart);
	const favorites = useSelector(selectFavorite);
	const userName = user.fullName?.split(' ').map(text => text.slice(0,1)).join('').toUpperCase();


	return (
		<div className="header-top px-md-4">
			{isLogin ? (
				<Button to={`/user/${user.id}`} className="btn-user"><User className="icon-user" /> {user.fullName ? userName : user.email} </Button>
			) : (
				<ButtonText className="btn-user" onClick={showModalLogin}><User
					className="icon-user"/> Вход/Регестрация</ButtonText>
			)}
			<ButtonText className="btn-cart">
				<div className="shopping-cart-icon" onClick={showCart}>
					<Cart className="icon-cart" />
					<span className="cart-label itemsInCart">{shoppingCart.length}</span>
				</div>
			</ButtonText>
			<Link to={'/favorites'} className="btn-favorite">
				<div className="favorite-icon">
					<Star className="icon-star" />
					<span className="cart-label itemsInCart">{favorites.length}</span>
				</div>
			</Link>
		</div>
	);
};

export default HeaderTop;
