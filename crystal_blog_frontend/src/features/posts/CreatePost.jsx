import { useState } from "react";
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
        };
      
        try {
          const response = await fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
          });
      
          if (response.ok) {
            const createdPost = await response.json();
            navigate(`/posts/${createdPost.id}`); // Use the ID of the created post to navigate
          }
        } catch (error) {
          console.error("Error creating post:", error);
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







// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { API_URL } from "../../../constants";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState(null); // Use a file object for images
//   const [body, setBody] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Use FormData to handle image uploads
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("body", body);
//     if (image) {
//       formData.append("image_file_name", image); // Append image file
//     }

//     try {
//       const response = await fetch(`${API_URL}/posts`, {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const newPost = await response.json();
//         navigate(`/posts/${newPost.id}`); // Redirect to the newly created post's detail page
//       } else {
//         throw new Error("Failed to create post.");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Handle image file selection
//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]); // Capture the selected file
//   };

//   return (
//     <div className="create-post-container">
//       <h2>Create Post</h2>
//       {error && <p className="error-message">Error: {error}</p>}
//       <form onSubmit={handleSubmit} className="create-post-form">
//         <div className="form-group">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="input-field"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="image">Image:</label>
//           <input
//             type="file"
//             id="image"
//             name="image"
//             onChange={handleImageChange} // Handle file upload
//             className="input-field"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="body">Content:</label>
//           <textarea
//             id="body"
//             name="body"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             className="textarea-field"
//           ></textarea>
//         </div>

//         <button type="submit" className="submit-button">
//           Create Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;










