import React, { useEffect, useInsertionEffect } from 'react';
import './App.scss';
import { fetchUsers, userSlice } from './store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';

function App() {
	const dispatch = useAppDispatch();
	const { count, isLoading, error, users } = useAppSelector((state) => state.userReducer);
	const { increment } = userSlice.actions;

	useEffect(() => {
		fetchUsers(dispatch);
	}, []);

	console.log(users);
	return (
		<div className='App'>
			<h1>{count}</h1>
			<button onClick={() => dispatch(increment(1))}>Increment</button>
			{!isLoading
				? users.map((user) => {
						return (
							<>
								<h1>{user.id}</h1>
								<h2>{user.name}</h2>
							</>
						);
				  })
				: null}
		</div>
	);
}

export default App;
