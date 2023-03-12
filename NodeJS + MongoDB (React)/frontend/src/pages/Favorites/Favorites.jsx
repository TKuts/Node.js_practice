import {useSelector} from "react-redux";
import {selectFavorite,} from "../../selecters";
import CardProduct from '../../components/CardProduct'

const Favorites = () => {
	const favorites = useSelector(selectFavorite);

	const isFavoritesCart = favorites.length === 0;


	const productsMap = favorites?.map((product, key) => (
		<CardProduct key={key} picture={product.src} id={product.id} title={product.title} price={product.prices} label={product.label}/>
	))

	return (
		<div className="container">
			{
				!isFavoritesCart && (<div className="cards-wrapper">{productsMap}</div>)
			}
		</div>
	);
};

export default Favorites;
