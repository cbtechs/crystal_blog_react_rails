import React, { useEffect, useState } from "react";
import { API_URL } from "../../../constants";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null); // Reset the error before fetching

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setPosts(data);
        } else {
          throw new Error("Expected JSON but got something else");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // End loading regardless of success or failure
      }
    };

    fetchPosts();
  }, []);

  // Render loading state
  if (loading) return <p className="loading">Loading...</p>;

  // Render error state
  if (error) return <p className="error">Error: {error}</p>;

  // Render posts if successful
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <img
            src={post.image_file_name ? post.image_file_name : "blog_image.jpg"}
            alt={post.title}
            style={{ width: "500px", height: "200px", display: "block",
              margin: "0 auto"}}
          />
          <p style={{ display: "block", textAlign: "center", marginBottom: "100px"}}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;


