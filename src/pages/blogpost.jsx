import React from 'react';
import { useParams } from 'react-router-dom';
import blogposts from './blogposts';
import NavBar from '../components/NavBar';

const BlogPost = () => {
    const { id } = useParams();
    const blogpost = blogposts.find(blogpost => blogpost.id === id);

    if (!blogpost) {
        return <p>Blog not found</p>;
    }

    return (blogpost.content);
};

const BlogPostPage = () => (
    <div className="bg-gray-200 min-h-screen flex flex-col">
        <NavBar />
        <BlogPost />
    </div>
);

export default BlogPostPage;
