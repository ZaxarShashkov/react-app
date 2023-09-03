import React, { ReactNode, useState } from 'react';

import Button from '../UI/Button/Button';
import Paragraph from '../UI/Paragraph/Paragraph';
import Modal from '../UI/Modal/Modal';

import { IPost } from '../../interfaces/IPost';
import { postApi } from '../../services/PostService';
import { IComments } from '../../interfaces/IComment';

import styles from './PostItem.module.scss';
import cn from 'classnames';
import Spinner from '../UI/spinner/Spinner';

type PropsPost = {
	post: IPost;
	remove: (post: IPost) => void;
	update: (post: IPost) => void;
	number: number;
};

export interface ChangePost {
	title: string;
	body: string;
}

const PostItem = ({ post, remove, update, number }: PropsPost) => {
	const [changePost, setChangePost] = useState<ChangePost>({ title: '', body: '' });
	const [commentVisible, setCommentVisible] = useState<boolean>(false);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const handleRemove = (event: React.MouseEvent) => {
		event.stopPropagation();
		remove(post);
	};

	const onVisible = () => {
		setIsVisible(true);
	};

	const { data: comments, isLoading, error } = postApi.useFetchCommentForPostQuery({});

	const checkComments = () => {
		setCommentVisible((commentVisible) => !commentVisible);
	};

	return (
		<div
			className={cn(styles.post__container, {
				[styles.post__container_comments]: commentVisible,
			})}>
			<div className={styles.post__title_block}>
				<Paragraph text={number + 1 + ':'} />
				<Paragraph
					text={post.title.substring(0, 1).toUpperCase() + post.title.substring(1)}
				/>
			</div>
			<div className={styles.post__body}>
				<Paragraph text={post.body} size={'small'} />
				{!commentVisible && isLoading && <Spinner />}
				{commentVisible
					? comments.map((comment: IComments): JSX.Element | undefined => {
							if (post.id === comment.postId) {
								console.log(comment.postId);
								return (
									<div className={styles.post__comments}>
										<Paragraph text={comment.email} size={'small'} />
										<Paragraph text={comment.name} size={'small'} />
									</div>
								);
							}
					  })
					: null}
			</div>

			<div className={styles.post__footer}>
				<Button title='Remove' onClick={handleRemove} />
				<Button title='Change post' onClick={onVisible} />
				<Button title='Comments' onClick={checkComments} />
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
