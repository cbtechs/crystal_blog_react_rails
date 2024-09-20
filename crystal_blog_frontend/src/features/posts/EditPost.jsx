import { API_URL } from "../../../constants";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
    const [post, setPost] = useState("");
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
  
    // Fetch existing post details when the component mounts
    useEffect(() => {
      const fetchCurrentPost = async () => {
        try {
          const response = await fetch(`${API_URL}/${id}`);
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          const postData = await response.json();
          setPost(postData);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchCurrentPost();
    }, [id]);
  
    // Handle form submission to update the post
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch(`${API_URL}/${id}`, { // Removed extra parenthesis here
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(post), // Assuming `post` is an object with the data
            // Incase you run into an error Un-permitted parameters , id;
            // you can remove the id from the object by using the spread operator
            // body: JSON.stringify({...post}), or  
            // body: JSON.stringify({title: post.title, image: post.image, body: post.body}),
          });
      
          if (response.ok) {
            const json = await response.json();
            navigate(`/posts/${json.id}`); // Redirect to the updated post's page
          } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`); // Throwing the error correctly
          }
        } catch (error) {
          setError(error.message); // Catching the error and setting the error message
        }
      };
      
  if (!post) return <h1>Loading...</h1>;
  
   
    return (
      <div className="edit-post-container">
        <h2>Edit Post</h2>
        {error && <p className="error-message">Error: {error}</p>}
        <form onSubmit={handleSubmit} className="edit-post-form">
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input 
              type="text" 
              id="title" 
              name="title"
              value={post?.title}
              onChange={(e) => setPost({...post, title: e.target.value})} 
              className="input-field" 
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input 
              type="file" 
              id="image" 
              name="image"
              value={post?.image_file_name} 
              onChange={(e) => setPost({...post, image_file_name: e.target.value})}
              className="input-field" 
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="body">Content:</label>
            <textarea 
              id="body" 
              name="body"
              value={post?.body} 
              onChange={(e) => setPost({...post, body: e.target.value})}
              className="textarea-field">
            </textarea>
          </div>
  
          <button type="submit" className="submit-button">
            Update Post
          </button>
        </form>
      </div>
    );
  };
  
  export default EditPost;
  