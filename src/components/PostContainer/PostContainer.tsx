import React, { useState, ChangeEvent, useEffect } from 'react';
import { postApi } from '../../services/PostService';
import PostItem from '../PostItem/PostItem';
import { IPost } from '../../interfaces/IPost';
import styles from './PostContainer.module.scss';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import Modal from '../UI/Modal/Modal';
import ModalCreate from '../UI/Modal/ModalCreate';

interface NewPost {
	title: string;
	body: string;
}

const PostContainer = (): JSX.Element => {
	const [newPost, setNewPost] = useState<NewPost>({ title: '', body: '' });
	const [order, setOrder] = useState<string | undefined>('desc');
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const {
		data: posts,
		isLoading,
		error,
	} = postApi.useFetchAllPostsQuery(
		{ limit: 100, order },
		{
			// pollingInterval: 1000,
		}
	);

	const [createPost, { error: createError, isLoading: isCreateLoading }] =
		postApi.useCreatePostMutation();

	const [deletePost, {}] = postApi.useDeletePostMutation();
	const [updatePost, {}] = postApi.useUpdatePostMutation();


	const handleRemove = (post: IPost) => {
		deletePost(post);
	};

	const handleUpdate = (post: IPost) => {
		updatePost(post);
	};

	const onVisible = () => {
		setIsVisible(true);
	};

	return (
		<>
			<ModalCreate
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				value={newPost}
				setNewPost={setNewPost}
				create={createPost}
			/>
			<div className={styles.container__head}>
				<Button title='Create new post' onClick={onVisible} />
				<Select setOrder={setOrder} order={order} />
			</div>
			<div className={styles.container}>
				{isLoading && <h1>Идет загрузка постов ...</h1>}
				{error && <h1>Произошла ошибка</h1>}
				{posts?.map((post, i) => {
					return (
						<PostItem
							remove={handleRemove}
							update={handleUpdate}
							key={post.id}
							post={post}
							number={i}
						/>
					);
				})}
			</div>
		</>
	);
};

export default PostContainer;
