import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';

import {fetchProducts,setFavorite,setShoppingCart,removeItemFavorite} from '../../reducers'

import {
	selectProductsData,
	selectFavorite,
	selectShoppingCart,
} from '../../selecters'

import CardProduct from '../../components/CardProduct'

import './Products.scss'

const Products = () => {
	const dispatch = useDispatch();

	const products = useSelector(selectProductsData);
	const shoppingCart = useSelector(selectShoppingCart);
	const favorites = useSelector(selectFavorite);

	useEffect(() => () => {
		dispatch(fetchProducts())
	},[])

	const handlerShoppingCart = (item) => {
		// console.log('handlerShoppingCart', item)

		const isProduct = Boolean(shoppingCart.find( product => product._id === item._id))

		if (isProduct) {
			return
		}

		dispatch(setShoppingCart(item))
	}

	const handlerFavorite = (item) => {
		const isFavorite = Boolean(favorites.find(favorite => favorite._id == item._id))

		if (isFavorite) {
			dispatch(removeItemFavorite(item._id))
		} else {
			dispatch(setFavorite(item))
		}
	}

	const productsMap = products?.map((product,key) => (
		<CardProduct key={key} picture={product.src} id={product._id} title={product.title} price={product.prices} label={product.label} handlerShoppingCart={() => handlerShoppingCart(product)} handlerFavorite={() => handlerFavorite(product)}/>
	))

	return (
		<div className="container">
			<div className="cards-wrapper">
				{productsMap}
			</div>
		</div>
	);
};

export default Products;
