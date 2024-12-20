import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav className="relative py-4 text-2xl md:px-32 md:text-2xl xl:text-3xl">
        <div className="flex justify-center md:justify-between">
            <div className="space-x-5 md:space-x-20">
                <Link to="/" className="hover:text-sky-800">Index</Link>
                <Link to="/projects" className="hover:text-sky-800">Projects</Link>
                <Link to="/blog" className="hover:text-sky-800">Blog</Link>
                <Link to="/contact" className="hover:text-sky-800">Contact</Link>
            </div>
        </div>
    </nav>
);

export default NavBar;