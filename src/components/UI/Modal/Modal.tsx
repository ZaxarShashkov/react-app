import React, { ChangeEvent } from 'react';
import styles from './Modal.module.scss';
import cn from 'classnames';
import Button from '../Button/Button';
import { ChangePost } from '../../PostItem/PostItem';
import { IPost } from '../../../interfaces/IPost';

type ModalProps = {
	isVisible: boolean;
	changePost: ChangePost;
	setIsVisible: (isVisible: boolean) => void;
	setChangePost: (changePost: ChangePost) => void;
	update: (post: IPost) => void;
	post: IPost;
};

const Modal = ({
	isVisible,
	setIsVisible,
	changePost,
	setChangePost,
	update,
	post,
}: ModalProps) => {
	const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(changePost);
		setChangePost({ ...changePost, title: e.currentTarget.value });
	};

	const onChangeBody = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(changePost);
		setChangePost({ ...changePost, body: e.currentTarget.value });
	};

	const handleUpdate = () => {
		const { title, body } = changePost;
		update({ ...post, title, body });
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
						defaultValue={changePost.title}
						className={styles.modal__input}
						placeholder='Enter your title post'
						onChange={onChangeTitle}
						autoComplete='false'
					/>
				</div>
				<div className={styles.modal__text}>
					<label htmlFor='body'>Body</label>
					<input
						id='body'
						type='text'
						defaultValue={changePost.body}
						className={styles.modal__input}
						placeholder='Enter your body post'
						onChange={onChangeBody}
						autoComplete='false'
					/>
				</div>
				<div className={styles.modal__buttons}>
					<Button title={'save'} onClick={handleUpdate} />
					<Button title={'back'} onClick={(isVisible) => setIsVisible(!isVisible)} />
				</div>
			</div>
		</div>
	);
};

export default Modal;
