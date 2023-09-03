import React, { useState } from 'react';
import style from './UserContainer.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import UserItem from '../UserItem/UserItem';
import { userSlice } from '../../store/reducers/UserSlice';
import Button from '../UI/Button/Button';

type UserProps = {};

const UserContainer = (props: UserProps) => {
	const [toSort, setToSort] = useState<boolean>(false);

	const dispatch = useAppDispatch();
	const { users, isLoading, error } = useAppSelector((state) => state.userReducer);
	const { sort } = userSlice.actions;

	const sortById = () => {
		dispatch(sort(toSort));
		setToSort((toSort) => !toSort);
	};

	console.log(toSort);

	return (
		<div className={style.container}>
			<Button title={toSort ? 'Ascending' : 'Descending'} onClick={sortById} />
			{!isLoading &&
				users?.map((user) => {
					console.log(user.id);
					return <UserItem key={user.id} user={user} />;
				})}
		</div>
	);
};

export default UserContainer;
