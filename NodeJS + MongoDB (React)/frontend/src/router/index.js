import {Routes, Route} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectAuthUserToken, selectUser} from "../selecters";

import Products from '../pages/Products';
import NotFound from '../pages/NotFound';
import ShoppingCart from '../pages/ShoppingCart';
import Add from '../pages/Add';
import Edit from "../pages/Edit";
import User from "../pages/User";
import Favorites from "../pages/Favorites";

const RootRouter = () => {
	const isUser = Boolean(useSelector(selectAuthUserToken));
	const issUser = Boolean(useSelector(selectUser));
	console.log('selectAuthUserToken',isUser);
	console.log('selectUser',issUser);

	return (
		<Routes>
			<Route index element={<Products/>}/>
			<Route path='/product/' element={<Products/>}/>
			<Route path='/shopping-cart/' element={<ShoppingCart/>}/>
			{isUser && <Route path='/add/' element={<Add/>}/>}
			{isUser && <Route path='/edit/:productID' element={<Edit/>}/>}
			{isUser && <Route path='/user/:userId' element={<User/>}/>}
			<Route path='/favorites' element={<Favorites/>}/>
			<Route path='*' element={<NotFound/>}/>
		</Routes>
	)
}

export default RootRouter