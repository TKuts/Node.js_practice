import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fetchProducts,setFavorite,setShoppingCart,removeItemFavorite} from '../../reducers'
import {selectProductsData,selectFavorite,selectShoppingCart} from '../../selecters'

import CardProduct from '../../components/CardProduct'

import './Products.scss'

const Products = () => {
	const dispatch = useDispatch();

	const products = useSelector(selectProductsData);
	const shoppingCart = useSelector(selectShoppingCart);
	const favorites = useSelector(selectFavorite);

	const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites'))
	const shoppingCartLocalStorage = JSON.parse(localStorage.getItem('shoppingCart'))

	useEffect(() => () => {
		dispatch(fetchProducts())

		if (favoritesLocalStorage){
			favoritesLocalStorage.map(item => {
				dispatch(setFavorite(item));
			})
		}
		if (shoppingCartLocalStorage){
			shoppingCartLocalStorage.map(item => {
				dispatch(setShoppingCart(item));
			})
		}
	},[products])

	// console.log('products =>',products);
	// console.log('products => shoppingCart',shoppingCart);
	// console.log('products => favorites',favorites);

	const handlerShoppingCart = (item) => () => {
		console.log('handlerShoppingCart', item)

		const isProduct = Boolean(shoppingCart.find( product => product.id === item.id))

		if (isProduct) {
			return
		}

		dispatch(setShoppingCart(item))
		localStorage.setItem('shoppingCart',JSON.stringify([...shoppingCart,item]))
	}

	const handlerFavorite = (item, id) => () => {
		console.log('handlerFavorite', item)

		const isFavorite = Boolean(favorites.find(favorite => favorite.id === item.id))

		if (isFavorite) {
			dispatch(removeItemFavorite(item.id))
			const newFavorites = favorites.filter(item => item.id !== id)
			localStorage.setItem('favorites',JSON.stringify(newFavorites))
		} else {
			dispatch(setFavorite(item))
			localStorage.setItem('favorites',JSON.stringify([...favorites,item]))
		}
	}

	const productsMap = products?.map((product,key) => (
		<CardProduct key={key} picture={product.picture} id={product.id} title={product.title} price={product.price} handlerShoppingCart={handlerShoppingCart(product)} handlerFavorite={handlerFavorite(product,product.id)}/>
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
