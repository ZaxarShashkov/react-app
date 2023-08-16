import React from 'react';
import { postApi } from '../../services/PostService';
import PostItem from '../PostItem/PostItem';

type Props = {};

const PostContainer = (props: Props) => {
	const { data: posts, isLoading, error } = postApi.useFetchAllPostsQuery(5);
	console.log(posts);
	return (
		<div>
			{isLoading && <h1>Идет загрузка постов ...</h1>}
			{error && <h1>Произошла ошибка</h1>}
			{posts?.map((post) => {
				return <PostItem key={post.id} post={post} />;
			})}
		</div>
	);
};

export default PostContainer;
