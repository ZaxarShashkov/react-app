import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
	title: string;
	onClick: (event: React.MouseEvent) => void;
}

const Button = ({ title, onClick }: ButtonProps): JSX.Element => {
	return (
		<>
			<button className={styles.button} onClick={onClick}>
				{title}
			</button>
		</>
	);
};

export default Button;
