import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
      const [title, setTitle] = useState("")
      const [image, setImage] = useState("")
      const [body, setBody] = useState("")
      const navigate = useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault();
            const postData = {
                title: title,
                image: image,
                body: body
            }
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                "Content-Type": "application/json" // we have to use this because of rails
                },
                body: JSON.stringify(postData)
            })
            if (response.ok) {
                navigate("/posts/:id");
            }
        };
    

  return (
    <div className="create-post-container">
      <h2>Create Post</h2>
      <form  onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input 
          type="text" 
          id="title" 
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          className="input-field" />
        </div>

        {/* label to upload image */}
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input 
          type="file" 
          id="image" 
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)} 
          className="input-field" />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea 
          id="content" 
          name="content"
          value={body} 
          onChange={(e) => setBody(e.target.value)}
          className="textarea-field">
          </textarea>
        </div>

        <button type="submit" className="submit-button">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
