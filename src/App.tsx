import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchUsers, userSlice } from './store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';

import PostPage from './components/Pages/PostPage';
import UserPage from './components/Pages/UserPage';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import styles from './components/Layout/Layout.module.scss';
import Footer from './components/Footer/Footer';

function App(): JSX.Element {
	const dispatch = useAppDispatch();
	const { count, isLoading, error, users } = useAppSelector((state) => state.userReducer);
	const { increment } = userSlice.actions;

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<Router>
			<div className='App'>
				<div className={styles.wrapper}>
					<div className={styles.header}>
						<Header />
					</div>
					<div className={styles.sidebar}>
						<Sidebar />
					</div>
					<main className={styles.main}>
						<Routes>
							<Route path='/' element={<PostPage />} />
							<Route path='/users' element={<UserPage />} />
						</Routes>
					</main>
					<footer className={styles.footer}>
						<Footer />
					</footer>
				</div>
			</div>
		</Router>
		// {/* <PostContainer />
		// {!isLoading
		// 	? users.map((user) => {
		// 			return (
		// 				<>
		// 					<h1>{user.id}</h1>
		// 					<h2>{user.name}</h2>
		// 				</>
		// 			);
		// 	  })
		// 	: null} */}

		// <div className='App'>
		// 	<Header />
		// 	<h1>{count}</h1>
		// 	<button onClick={() => dispatch(increment(1))}>Increment</button>

		// 	{/* {isLoading && <h1>идет загрузка</h1>} */}

		// </div>
	);
}

export default App;
