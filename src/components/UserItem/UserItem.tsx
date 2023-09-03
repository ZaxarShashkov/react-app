import React from 'react';
import styles from './UserItem.module.scss';
import { IUser } from '../../interfaces/IUser';
import Paragraph from '../UI/Paragraph/Paragraph';

type Props = {
	user: IUser;
};

const UserItem = ({ user }: Props) => {
	return (
		<div className={styles.user__container}>
			<Paragraph text={`${user.id}. ${user.name}`} />
			<Paragraph text={user.email} />
		</div>
	);
};

export default UserItem;
