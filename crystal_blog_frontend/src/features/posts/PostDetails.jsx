import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../../constants";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); // To redirect user after delete or edit

  useEffect(() => {
    const fetchCurrentPost = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching

      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading after the request completes
      }
    };

    fetchCurrentPost();
  }, [id]);

  // Function to handle delete
  const handleDelete = async (e) => {
    e.preventDefault(); // Prevent default link behavior
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        // Redirect to post list after deletion
        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="post-details">
      {post.title ? <h2>{post.title}</h2> : <h2>No Title Available</h2>}
      {post.image_file_name ? (
        <img
          src={post.image_file_name}
          alt={post.title}
          style={{ width: "500px", height: "200px" }}
        />
      ) : (
        <img
          src="../blog_image.jpg"
          alt="default image"
          style={{ width: "500px", height: "200px" }}
        />
      )}
      {post.body ? <p>{post.body}</p> : <p>No content available.</p>}

      <div>
        {/* Edit Post Link */}
        <Link to={`/posts/${post.id}/edit`} className="submit-button" style={ { display: "inline-block"} }>
          Edit Post
        </Link>
      </div>

      <div>
        {/* Delete Post Link */}
        <Link
          to="#"
          onClick={handleDelete} // This will handle the delete request
          className="submit-button"
          style={ { display: "inline-block"} }
        >
          Delete Post
        </Link>
      </div>

      <div>
        <Link to="/">Back to Posts</Link>
      </div>
    </div>
  );
};

export default PostDetails;
