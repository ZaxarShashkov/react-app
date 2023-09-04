import React from 'react';
import styles from './UserItem.module.scss';
import { IUser } from '../../interfaces/IUser';
import Paragraph from '../UI/Paragraph/Paragraph';
import { useAppDispatch } from '../../hooks/redux';
import { deleteUser } from '../../store/reducers/UserSlice';

type Props = {
	user: IUser;
};

const UserItem = ({ user }: Props) => {
	const dispatch = useAppDispatch();

	const handleDelete = () => {
		dispatch(deleteUser());
	};

	return (
		<div className={styles.user__container}>
			<Paragraph text={`${user.id}. ${user.name}`} />
			<Paragraph text={user.email} />
			<button onClick={handleDelete}>Remove user</button>
		</div>
	);
};

export default UserItem;
