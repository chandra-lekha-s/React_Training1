import React from "react";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Blog Page</h1>
      <button type="button" onClick={handleClick}>
        BackToHome
      </button>
    </div>
  );
};
export default Blog;
