import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css';
import Projects from './pages/projects'
import Contact from './pages/contact'
import Blog from './pages/blog'
import BlogPost from './pages/blogpost'
import Homepage from './pages/homepage'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  </Router>
);

export default App;