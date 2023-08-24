import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../interfaces/IPost';

export const postApi = createApi({
	reducerPath: 'postAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
	tagTypes: ['Post'],
	endpoints: (build) => ({
		fetchAllPosts: build.query<IPost[], { limit: number; order: string | undefined }>({
			query: (arg) => {
				const { limit, order } = arg;
				return {
					url: '/posts',
					params: {
						_limit: limit,
						_sort: 'id',
						_order: order,
					},
				};
			},
			providesTags: (result) => ['Post'],
		}),
		createPost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: '/posts',
				method: 'POST',
				body: post,
			}),
			invalidatesTags: ['Post'],
		}),
		updatePost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: `/posts/${post.id}`,
				method: 'PUT',
				body: post,
			}),
			invalidatesTags: ['Post'],
		}),
		deletePost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: `/posts/${post.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Post'],
		}),
	}),
});
