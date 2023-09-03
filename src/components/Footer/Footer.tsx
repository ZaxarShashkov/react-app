import React from 'react';
import styles from './Footer.module.scss';
import Paragraph from '../UI/Paragraph/Paragraph';

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className={styles.footer}>
			<Paragraph text='© 2001—2023 ' />
		</div>
	);
};

export default Footer;
