import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

const Hero = () => (
  <div>
    <div className="flex flex-col items-center md:justify-normal md:items-start">
      <p className="text-3xl md:text-5xl font-bold mb-4">Contact me!</p>
      <p className="text-xl mb-8 text-center md:text-left">Have a question? Interested in what I can do? Send an email!</p>
      <a href="mailto:claywasmund@gmail.com?subject=Portfolio%20Redirect">
        <p className="text-3xl hover:text-sky-800">claywasmund@gmail.com</p>
      </a>
      <div className="flex flex-row mt-4 mb-10">
        <Link className="fill-black hover:fill-sky-800 mr-2" to="https://www.linkedin.com/in/clayton-wasmund-2202b5269/">
            <svg width="30" height="30" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><path d="M22.9942 22.9999V22.9989H23V14.5637C23 10.4371 22.1116 7.2583 17.2873 7.2583C14.9682 7.2583 13.4118 8.53097 12.7765 9.73751H12.7094V7.64355H8.13525V22.9989H12.8982V15.3955C12.8982 13.3936 13.2777 11.4577 15.7569 11.4577C18.1997 11.4577 18.2361 13.7424 18.2361 15.5239V22.9999H22.9942Z"/><path d="M0.379395 7.64453H5.14806V22.9999H0.379395V7.64453Z"/><path d="M2.76192 0C1.23721 0 0 1.23721 0 2.76192C0 4.28663 1.23721 5.54971 2.76192 5.54971C4.28662 5.54971 5.52383 4.28663 5.52383 2.76192C5.52287 1.23721 4.28567 0 2.76192 0V0Z"/></svg>
        </Link>
        <Link className="fill-black hover:fill-sky-800 mr-2" to="https://github.com/ClaytonWas">
          <svg width="30" height="30" viewBox="0 0 98 98"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>
        </Link>
      </div>
    </div>
  </div>
);

const Contact = () => (
    <div className="bg-gray-200 min-h-screen flex flex-col">
        <NavBar />
        <div className="flex flex-grow relative top-40 md:top-0 md:items-center justify-center">
          <Hero />
        </div>
    </div>
);

export default Contact;
