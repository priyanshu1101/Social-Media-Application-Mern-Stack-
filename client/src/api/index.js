import axios from 'axios';

const url = "https://social-media-87bs.onrender.com/posts";

console.log(url);

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, newPost) => axios.patch(`${url}/${id}`, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`)

//To fetch data from the above urls