import React from 'react';
import styles from './Paragraph.module.scss';
import cn from 'classnames';

type ParagraphProps = {
	text: string;
	size?: 'small' | 'regular' | 'large';
};

const Paragraph = ({ text, size = 'regular' }: ParagraphProps): JSX.Element => {
	return (
		<>
			<p
				className={cn(styles.paragraph, {
					[styles.paragraph__small]: size === 'small',
					[styles.paragraph__large]: size === 'large',
				})}>
				{text}
			</p>
		</>
	);
};

export default Paragraph;
