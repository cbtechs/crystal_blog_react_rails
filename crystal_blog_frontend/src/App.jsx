import React from 'react';
import './App.css';
import PostList from "./features/posts/PostList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import PostDetails from './features/posts/PostDetails';

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
