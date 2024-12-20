import React from 'react';
import { Link } from 'react-router-dom';

const BlogPosts = [
    {
        id: '1',
        title: 'How Do I Navigate This Website?',
        tag: 'General',
        description: 'Understanding how my website and blog posts function.',
        content: (
            <div className='bg-gray-200 min-h-screen flex flex-col'>
                <p className='text-base md:text-xl lg:text-2xl font-medium break-words md:mb-10 md:mt-10 md:ml-10 lg:mt-20 lg:ml-20 xl:ml-60'>How Do I Navigate This Website?</p>
                <div className='mx-auto flex flex-col items-center sm:w-5/6 md:w-3/4 lg:w-1/2'>
                    <p>
                        This post serves to function more as a proof of concept for future blogs. 
                        The goal of it was to set up a suitable blog page that allows for easy post creation and customization on my end and concise interactions on yours. If you think something about this website isn't working or sucks, feel free to contact me about it.
                    </p>
                    <br />
                    <p>
                        In the case you clicked on this post because you were genuinely curious about how to navigate this website... This website has two interactive subpages, Projects and Blogs.
                        The ladder of which, this is the first entry in.
                    </p>
                    <p>
                        Each project and blog post will be accessible through a post component that will give you a general preview of the content included.
                        You can click on each component to be brought to the content itself.
                    </p>
                    <br />
                    <div className="bg-gray-300 max-w-screen-md p-2 m-2 w-2/3 rounded-2xl group border-2 border-gray-700 hover:border-gray-500">
                        <Link to="/blog/1" className="flex">
                            <div className="break-words m-1 w-full">
                                <p className="text-2xl font-medium group-hover:text-sky-800">Title Of Post</p>
                                
                                <div className="flex flex-row items-center">
                                    <svg className="ml-2 fill-black" height="12" width="12" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M506.513,311.066L253.87,58.423c-2.024-2.026-4.486-3.559-7.195-4.483L140.15,17.593 c-6.758-2.305-14.242-0.568-19.294,4.483L84.709,58.222L31.977,5.491c-7.314-7.315-19.176-7.315-26.49,0 c-7.315,7.315-7.315,19.175,0,26.49l52.732,52.731l-36.14,36.141c-5.051,5.05-6.79,12.534-4.483,19.294L53.943,246.67 c0.924,2.71,2.458,5.172,4.483,7.197L311.071,506.51c7.314,7.315,19.175,7.315,26.49,0l168.954-168.954 C513.83,330.241,513.83,318.382,506.513,311.066z M227.241,227.238c-21.817,21.819-57.132,21.82-78.952,0 c-21.768-21.768-21.768-57.185,0.001-78.953c21.817-21.819,57.132-21.82,78.953,0C249.009,170.053,249.009,205.47,227.241,227.238 z"/>
                                    </svg>
                                    <p className="text-xs font-medium ml-1">Primary Tag</p>
                                </div>
                                <p className="text-l mt-1 mb-1 ml-1">A description of the contents of a post.</p>
                            </div>
                        </Link>
                    </div>
                    <br />
                    <p>
                        For blogs, these posts will consist of a single overarching tag as well, this should help when the title of the post is ambiguious.
                        The primary purpose of this blog section will be to give updates on projects I am working on. 
                        But it will defintely also be used to talk about things I find cool.
                        These will largely be about music, games, and movies I like.
                    </p>
                </div>
            </div>
        )
    },
];

export default BlogPosts;