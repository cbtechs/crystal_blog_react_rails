
// Posts List link (root path) | Link to Create New Post
import { Link } from "react-router-dom";


const NavBar = () => {
  return ( 
    <nav className="nav">
      <Link to="/">All Post</Link>
      {' | '}
      <Link to="/recent">Latest Post</Link>
      {' | '}
      <Link to="/new">Create New Post</Link>
      {' | '}
      <Link to="/sign_in">Sign In</Link>
      {' | '}
      <Link to="/sign_up">Sign Up</Link>
      {' | '}
      <Link to="/sign_out">Sign Out</Link>
      <Link to="/current user">Admin</Link>
    </nav>
  );
}
 
export default NavBar;
