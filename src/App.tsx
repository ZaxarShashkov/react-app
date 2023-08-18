import React, { useEffect, useInsertionEffect } from 'react';
import './styles/App.scss';
import { fetchUsers, userSlice } from './store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import PostContainer from './components/PostContainer/PostContainer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
	const dispatch = useAppDispatch();
	const { count, isLoading, error, users } = useAppSelector((state) => state.userReducer);
	const { increment } = userSlice.actions;

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<div className='App'>
			<Layout children={<PostContainer />} />
			{/* <PostContainer />
			{!isLoading
				? users.map((user) => {
						return (
							<>
								<h1>{user.id}</h1>
								<h2>{user.name}</h2>
							</>
						);
				  })
				: null} */}
		</div>
		// <div className='App'>
		// 	<Header />
		// 	<h1>{count}</h1>
		// 	<button onClick={() => dispatch(increment(1))}>Increment</button>

		// 	{/* {isLoading && <h1>идет загрузка</h1>} */}

		// </div>
	);
}

export default App;
