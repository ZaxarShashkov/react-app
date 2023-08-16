import React from 'react';
import { IPost } from '../../interfaces/IPost';

type PropsPost = {
	post: IPost;
	remove: (post: IPost) => void;
	update: (post: IPost) => void;
};

const PostItem = ({ post, remove, update }: PropsPost) => {
	const handleRemove = (event: React.MouseEvent) => {
		event.stopPropagation();
		remove(post);
	};

	const handleUpdate = (event: React.MouseEvent) => {
		const title = prompt() || '';
		update({ ...post, title });
	};

	return (
		<div style={{ display: 'flex' }} onClick={handleUpdate}>
			<h1>{post.id}</h1>
			<p>{post.title}</p>
			<p>{post.body}</p>
			<button onClick={handleRemove}>remove</button>
		</div>
	);
};

export default PostItem;
