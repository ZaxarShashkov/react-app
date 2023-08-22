import React, { useState } from 'react';
import { postApi } from '../../services/PostService';
import PostItem, { ChangePost } from '../PostItem/PostItem';
import { IPost } from '../../interfaces/IPost';
import styles from './PostContainer.module.scss';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';

type Props = {};

const PostContainer = (props: Props): JSX.Element => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [changePost, setChangePost] = useState<ChangePost>({ title: '', body: '' });

	const {
		data: posts,
		isLoading,
		error,
	} = postApi.useFetchAllPostsQuery(100, {
		// pollingInterval: 1000,
	});

	const [createPost, { error: createError, isLoading: isCreateLoading }] =
		postApi.useCreatePostMutation();

	const [deletePost, {}] = postApi.useDeletePostMutation();
	const [updatePost, {}] = postApi.useUpdatePostMutation();

	const handleCreate = async () => {
		const title = prompt();
		console.log(title);
		await createPost({ title, body: title } as IPost);
	};

	const handleRemove = (post: IPost) => {
		deletePost(post);
	};

	const handleUpdate = (post: IPost) => {
		updatePost(post);
	};

	return (
		<>
			<div className={styles.container__head}>
				<Button title='Create new post' onClick={() => setIsVisible(true)} />
			</div>
			<div className={styles.container}>
				{/* <button onClick={handleCreate}>add post</button> */}
				{isLoading && <h1>Идет загрузка постов ...</h1>}
				{error && <h1>Произошла ошибка</h1>}

				{posts?.map((post) => {
					return (
						<PostItem
							remove={handleRemove}
							update={handleUpdate}
							key={post.id}
							post={post}
						/>
					);
				})}
			</div>
		</>
	);
};

export default PostContainer;
