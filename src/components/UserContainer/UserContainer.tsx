import React, { useEffect, useState } from 'react';
import style from './UserContainer.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import UserItem from '../UserItem/UserItem';
import { userSlice, fetchUsers, deleteUser, addUser } from '../../store/reducers/UserSlice';
import Button from '../UI/Button/Button';
import { IPost } from '../../interfaces/IPost';
import { IUser } from '../../interfaces/IUser';

type UserProps = {};

const UserContainer = (props: UserProps) => {
	const [toSort, setToSort] = useState<boolean>(false);
	const [byName, setByName] = useState<boolean>(false);
	const [newUser, setNewUser] = useState<IUser>({
		id: 1,
		name: 'Zakhar',
		email: 'zekharjah@gmail.com',
	});

	const dispatch = useAppDispatch();
	const { users, isLoading, error } = useAppSelector((state) => state.userReducer);
	const { sort, sortByName } = userSlice.actions;

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	const sortById = () => {
		setToSort(!toSort);
	};

	const sortName = () => {
		setByName(!byName);
	};

	useEffect(() => {
		dispatch(sort(toSort));
	}, [toSort]);

	useEffect(() => {
		dispatch(sortByName(byName));
	}, [byName]);

	const handleDelete = (user: number) => {
		dispatch(deleteUser(user));
		// dispatch(fetchUsers());
	};

	const handleAddUser = async () => {
		await dispatch(
			addUser({ id: newUser.id, name: newUser.name, email: newUser.email } as IUser)
		);
	};

	return (
		<div className={style.container}>
			<div className='div'>
				<Button title={toSort ? 'Ascending' : 'Descending'} onClick={sortById} />
				<Button title={'Sort by name'} onClick={sortName} />
				<Button title={'Add user'} onClick={handleAddUser} />
			</div>
			{!isLoading &&
				users?.map((user, i) => {
					return (
						<UserItem
							key={user.id}
							user={user}
							number={i}
							handleDelete={handleDelete}
						/>
					);
				})}
		</div>
	);
};

export default UserContainer;
