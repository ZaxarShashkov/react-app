import React, { useState, ChangeEvent, useEffect } from 'react';
import { postApi } from '../../services/PostService';
import PostItem from '../PostItem/PostItem';
import { IPost } from '../../interfaces/IPost';
import styles from './PostContainer.module.scss';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';

interface NewPost {
	title: string;
	body: string;
}

const PostContainer = (): JSX.Element => {
	const [newPost, setNewPost] = useState<NewPost>({ title: '', body: '' });
	const [order, setOrder] = useState<string | undefined>('desc');

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

	const handleCreate = async () => {
		await createPost({ title: newPost.title, body: newPost.body } as IPost);
		setNewPost({ title: '', body: '' });
	};

	const handleRemove = (post: IPost) => {
		deletePost(post);
	};

	const handleUpdate = (post: IPost) => {
		updatePost(post);
	};

	const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setNewPost({ ...newPost, title: e.currentTarget.value });
	};

	const handleChangeBody = (e: ChangeEvent<HTMLInputElement>) => {
		setNewPost({ ...newPost, body: e.currentTarget.value });
	};

	return (
		<>
			<div className={styles.container__head}>
				<Button title='Create new post' onClick={handleCreate} />
				<Input
					label='Title'
					placeholder='Enter new title'
					value={newPost.title}
					onChange={handleChangeTitle}
				/>
				<Input
					label='Body'
					placeholder='Enter new body'
					value={newPost.body}
					onChange={handleChangeBody}
				/>
				<Select setOrder={setOrder} order={order} />
			</div>
			<div className={styles.container}>
				{/* <button onClick={handleCreate}>add post</button> */}
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
