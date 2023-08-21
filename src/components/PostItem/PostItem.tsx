import React, { useState } from 'react';
import { IPost } from '../../interfaces/IPost';
import styles from './PostItem.module.scss';
import Button from '../UI/Button/Button';
import Paragraph from '../UI/Paragraph/Paragraph';
import Modal from '../UI/Modal/Modal';

type PropsPost = {
	post: IPost;
	remove: (post: IPost) => void;
	update: (post: IPost) => void;
};

export interface ChangePost {
	title: string;
	body: string;
}

const PostItem = ({ post, remove, update }: PropsPost) => {
	const [changePost, setChangePost] = useState<ChangePost>({ title: '', body: '' });
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const handleRemove = (event: React.MouseEvent) => {
		event.stopPropagation();
		remove(post);
	};

	

	const onVisible = () => {
		setIsVisible(true);
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
				<Button title='Change post' onClick={onVisible} />
			</div>

			<Modal
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				changePost={changePost}
				setChangePost={setChangePost}
				update={update}
				post={post}
			/>
		</div>
	);
};

export default PostItem;
