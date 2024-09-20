import React from 'react';
import './App.css';
import PostList from "./features/posts/PostList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import PostDetails from './features/posts/PostDetails';
import CreatePost from './features/posts/CreatePost';
import EditPost from './features/posts/EditPost';

function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <h1>Crystal Blue Tech Blog</h1>
          <NavBar />
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/new" element={<CreatePost />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />
          </Routes>
        </main>
        <aside className="sidebar">
          <SideBar />
        </aside>
      </div>
    </Router>
  );
}

export default App;
