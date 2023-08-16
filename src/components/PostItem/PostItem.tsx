import React from 'react';
import { IPost } from '../../interfaces/IPost';

type PropsPost = {
	post: IPost;
};

const PostItem = ({ post }: PropsPost) => {
	return (
		<div style={{ display: 'flex' }}>
			<h1>{post.id}</h1>
			<p>{post.title}</p>
			<p>{post.body}</p>
			<button>remove</button>
		</div>
	);
};

export default PostItem;
