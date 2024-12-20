import React from 'react';
import BlogPosts from './blogposts';
import NavBar from '../components/NavBar';
import BlogPostCard from '../components/BlogPostCard';

const Board = () => (
    <div className="flex flex-col">
        <div className="flex flex-grow flex-col items-center">
            {BlogPosts.map(blogpost => (
                <BlogPostCard key={blogpost.id}
                    id={blogpost.id}
                    title={blogpost.title}
                    tag={blogpost.tag}
                    description={blogpost.description}
                    picture={blogpost.picture}
                />
            ))}
        </div>
    </div>
);

const Blog = () => (
    <div className="bg-gray-200 min-h-screen">
        <NavBar />
        <Board />
    </div>
);

export default Blog;
