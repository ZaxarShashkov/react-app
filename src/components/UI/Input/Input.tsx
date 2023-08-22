import React, { ChangeEvent } from 'react';
import styles from './Input.module.scss';

type InputProps = {
	value: string;
	label: string;
	placeholder: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, label, onChange, placeholder }: InputProps) => {
	return (
		<>
			<div className={styles.container}>
				<label htmlFor='body'>{label}</label>
				<input
					style={{ maxWidth: '200px' }}
					id='body'
					type='text'
					value={value}
					className={styles.container__input}
					placeholder={placeholder}
					autoComplete='false'
					onChange={onChange}
				/>
			</div>
		</>
	);
};

export default Input;
