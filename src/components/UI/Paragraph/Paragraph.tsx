import React from 'react';
import styles from './Paragraph.module.scss';

type ParagraphProps = {
	text: string;
	size?: 'small' | 'regular' | 'large';
};

const Paragraph = ({ text }: ParagraphProps): JSX.Element => {
	return (
		<>
			<p className={styles.paragraph}>{text}</p>
		</>
	);
};

export default Paragraph;
