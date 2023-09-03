import React from 'react';
import styles from './UserItem.module.scss';
import { IUser } from '../../interfaces/IUser';

type Props = {
	user: IUser;
};

const UserItem = ({ user }: Props) => {
	return (
		<div className={styles.user__container}>
			{`${user.id}. ${user.name}`}
			<div>{user.email}</div>
		</div>
	);
};

export default UserItem;
