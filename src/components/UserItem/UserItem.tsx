import React from 'react';
import styles from './UserItem.module.scss';
import { IUser } from '../../interfaces/IUser';
import Paragraph from '../UI/Paragraph/Paragraph';

type UserItem = {
	user: IUser;
	number: number;
	handleDelete: (user: number) => void;
};

const UserItem = ({ user, number, handleDelete }: UserItem) => {
	return (
		<div className={styles.user__container}>
			<Paragraph text={`${number + 1}. ${user.name}`} />
			<Paragraph text={user.email} />
			<button onClick={() => handleDelete(user.id)}>Remove user</button>
		</div>
	);
};

export default UserItem;
