import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {sendRequest} from "../helpers/sendRequest";
import {AUTH} from '../config/API'

const initialState = {
	user: {},
	loader: true,
}

export const fetchAuth = createAsyncThunk(
	'user/fetchData',
	async (obj) => {

		return sendRequest(`${AUTH}login`, 'POST', {
			body: JSON.stringify(obj)
		})
	}
)

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: { },
	extraReducers: (builder) => {
		builder.addCase(fetchAuth.pending, (state) => {
			state.loader = false;
		})
		builder.addCase(fetchAuth.fulfilled, (state,{payload}) => {
			console.log('fetchAuth',payload);
			state.user = payload._doc;
			state.loader = false;
		})
	}
})

export const {} = userSlice.actions;

export default userSlice.reducer;