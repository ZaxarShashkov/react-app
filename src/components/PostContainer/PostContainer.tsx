import React, { useState } from 'react';
import { postApi } from '../../services/PostService';
import PostItem from '../PostItem/PostItem';
import { IPost } from '../../interfaces/IPost';
import styles from './PostContainer.module.scss';
import Modal from '../UI/Modal/Modal';

type Props = {};

const PostContainer = (props: Props): JSX.Element => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const {
		data: posts,
		isLoading,
		error,
	} = postApi.useFetchAllPostsQuery(105, {
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

	const onVisible = () => {
		setIsVisible(true);
	};

	console.log(isVisible);

	return (
		<div className={styles.container}>
			{/* <button onClick={handleCreate}>add post</button> */}
			{isLoading && <h1>Идет загрузка постов ...</h1>}
			{error && <h1>Произошла ошибка</h1>}
			<Modal isVisible={isVisible} setIsVisible={setIsVisible} />
			{posts?.map((post) => {
				return (
					<PostItem
						remove={handleRemove}
						update={handleUpdate}
						onVisible={onVisible}
						key={post.id}
						post={post}
					/>
				);
			})}
		</div>
	);
};

export default PostContainer;
