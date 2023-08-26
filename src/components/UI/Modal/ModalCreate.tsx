import React, { ChangeEvent } from 'react';
import styles from './Modal.module.scss';
import cn from 'classnames';
import Button from '../Button/Button';
import { IPost } from '../../../interfaces/IPost';

type IValue = {
	title: string;
	body: string;
};

type ModalCreateProps = {
	isVisible: boolean;
	value: IValue;
	setIsVisible: (isVisible: boolean) => void;
	setNewPost: (changePost: IValue) => void;
	create: ({ title, body }: IPost) => void;
};

const ModalCreate = ({ isVisible, setIsVisible, value, setNewPost, create }: ModalCreateProps) => {
	const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setNewPost({ ...value, title: e.currentTarget.value });
	};

	const handleChangeBody = (e: ChangeEvent<HTMLInputElement>) => {
		setNewPost({ ...value, body: e.currentTarget.value });
	};

	const handleCreate = async () => {
		await create({ title: value.title, body: value.body } as IPost);
		setNewPost({ title: '', body: '' });
		setIsVisible(false);
	};

	return (
		<div
			className={cn(styles.modal__container, {
				[styles.modal__container_active]: isVisible,
			})}>
			<div className={styles.modal__content}>
				<div
					className={styles.modal__exit}
					onClick={(isVisible) => setIsVisible(!isVisible)}>
					X
				</div>
				<div className={styles.modal__title}>
					<label htmlFor='title'>Title</label>
					<input
						id='title'
						type='text'
						value={value.title}
						className={styles.modal__input}
						placeholder='Enter your title post'
						onChange={handleChangeTitle}
						autoComplete='false'
					/>
				</div>

				<div className={styles.modal__text}>
					<label htmlFor='body'>Body</label>
					<input
						id='body'
						type='text'
						value={value.body}
						className={styles.modal__input}
						placeholder='Enter your body post'
						onChange={handleChangeBody}
						autoComplete='false'
					/>
				</div>
				<div className={styles.modal__buttons}>
					<Button title={'save'} onClick={handleCreate} />
					<Button title={'back'} onClick={(isVisible) => setIsVisible(!isVisible)} />
				</div>
			</div>
		</div>
	);
};

export default ModalCreate;
