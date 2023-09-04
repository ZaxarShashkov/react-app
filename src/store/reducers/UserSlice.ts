import { IUser } from './../../interfaces/IUser';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from '../store';
import { IPost } from '../../interfaces/IPost';

interface UserState {
	users: IUser[];
	isLoading: boolean;
	error: string | unknown;
	count: number;
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
	count: 0,
};

export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkAPI) => {
	try {
		const response = await axios.get<IUser[]>('http://localhost:3001/users');
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue('Не удалось загрузить посты');
	}
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (user, thunkAPI) => {
	try {
		const response = await axios.delete<IUser>(`http://localhost:3001/users/${user}`);
		return response.data;
	} catch (e) {
		thunkAPI.rejectWithValue('Не удалось удалить пользователя!!!');
	}
});

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		increment(state, action: PayloadAction<number>) {
			state.count += action.payload;
		},
		sort(state, action: PayloadAction<boolean>) {
			if (action.payload) {
				state.users.sort((a, b) => b.id - a.id);
			} else if (!action.payload) {
				state.users.sort((a, b) => a.id - b.id);
			}
		},
		sortByName(state, action: PayloadAction<boolean>) {
			if (action.payload) {
				state.users.sort((a, b) => (a.name < b.name ? -1 : 1));
			} else if (!action.payload) {
				state.users.sort((a, b) => (a.name > b.name ? -1 : 1));
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending.type, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
				state.isLoading = false;
				state.error = '';
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action: PayloadAction<string | unknown>) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(deleteUser.fulfilled, (state, action: PayloadAction<any>) => {
				state.users.filter((user) => user.id !== action.payload.id);
			})
			.addCase(deleteUser.rejected, (state, action: PayloadAction<string | unknown>) => {
				state.error = action.payload;
			});
	},
});

export default userSlice.reducer;
