import React from 'react';
import styles from './Modal.module.scss';
import cn from 'classnames';

type ModalProps = {
	isVisible: boolean;
	setIsVisible: (isVisible: boolean) => void;
};

const Modal = ({ isVisible, setIsVisible }: ModalProps) => {
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
				<label htmlFor=''>Title</label>
				<input type='text' />
				<label htmlFor=''>Body</label>
				<input type='text' />
			</div>
		</div>
	);
};

export default Modal;
