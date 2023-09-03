import React from 'react';
import style from './UserContainer.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import UserItem from '../UserItem/UserItem';

type UserProps = {};

const UserContainer = (props: UserProps) => {
	const dispatch = useAppDispatch();
	const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

	return (
		<div className={style.container}>
			{!isLoading &&
				users?.map((user) => {
					return <UserItem key={user.id} user={user} />;
				})}
		</div>
	);
};

export default UserContainer;
