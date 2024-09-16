import { useState } from 'react'
import './App.css'
import PostList from "./features/posts/PostList"


function App() {
 

  return (
    <>
      <div className="app">
        <h1>Crystal Blue Tech Blog</h1>
      <PostList />
      </div>
    </>
  )
}

export default App
