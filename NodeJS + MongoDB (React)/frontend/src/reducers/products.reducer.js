import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {sendRequest} from "../helpers/sendRequest";

const API = `http://localhost:5000/api/`

const initialState = {
	data: [],
	shoppingCart: [],
	favorite: [],
	loader: true,
}

export const fetchProducts = createAsyncThunk(
	'products/fetchData',
	async () => {
		const response = sendRequest(`${API}products`)
		return response
	}
)

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setShoppingCart: (state,{payload}) => {
			state.shoppingCart.push(payload);
		},
		setFavorite: (state,{payload}) => {
			state.favorite.push(payload);
		},
		removeProduct: (state,{payload}) => {
			state.data = state.data.filter(item => item.id !== payload);
		},
		removeItemShoppingCart: (state,{payload}) => {
			state.shoppingCart = state.shoppingCart.filter(item => item.id !== payload);
		},
		removeItemFavorite: (state,{payload}) => {
			state.favorite = state.favorite.filter(item => item.id !== payload);
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.loader = true;
		})
		builder.addCase(fetchProducts.fulfilled, (state,{payload}) => {
			state.data = payload.data;
			state.loader = false;
		})
	}
})

export const {setShoppingCart,setFavorite,removeItemShoppingCart,removeItemFavorite,removeProduct} = productsSlice.actions;

export default productsSlice.reducer;
//store {} => { products: { data: [] }