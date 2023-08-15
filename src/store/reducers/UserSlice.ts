import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/IUser';
import axios from 'axios';
import { AppDispatch } from '../store';

interface UserState {
	users: IUser[];
	isLoading: boolean;
	error: string;
	count: number;
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
	count: 0,
};

export const fetchUsers = async (dispatch: AppDispatch) => {
	try {
		dispatch(userSlice.actions.usersFetching());
		const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
		dispatch(userSlice.actions.usersFetchingSuccess(response.data));
	} catch (e: any) {
		dispatch(userSlice.actions.usersFetchingError(e.message));
	}
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		increment(state, action: PayloadAction<number>) {
			state.count += action.payload;
		},
		usersFetching(state) {
			state.isLoading = true;
		},
		usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
			state.isLoading = false;
			state.error = '';
			state.users = action.payload;
		},
		usersFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default userSlice.reducer;
