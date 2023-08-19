import React, { useState } from 'react';
import { IPost } from '../../interfaces/IPost';
import styles from './PostItem.module.scss';
import Button from '../UI/Button/Button';
import Paragraph from '../UI/Paragraph/Paragraph';

type PropsPost = {
	post: IPost;
	remove: (post: IPost) => void;
	update: (post: IPost) => void;
	isVisible: boolean;
	setIsVisible: (isVisible: boolean) => void;
};

const PostItem = ({ post, remove, update, setIsVisible, isVisible }: PropsPost) => {
	const handleRemove = (event: React.MouseEvent) => {
		event.stopPropagation();
		remove(post);
	};

	const handleUpdate = (event: React.MouseEvent) => {
		const title = prompt() || '';
		update({ ...post, title });
	};

	return (
		<div className={styles.post__container}>
			<div className={styles.post__title_block}>
				<Paragraph text={post.id + ':'} size={'large'} />
				<Paragraph text={post.title} />
			</div>
			<Paragraph text={post.body} size={'small'} />
			<div className={styles.post__footer}>
				<Button title='Remove' onClick={handleRemove} />
				<Button title='Change post' onClick={(isVisible) => setIsVisible(!isVisible)} />
			</div>
		</div>
	);
};

export default PostItem;
