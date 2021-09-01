import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

import { Posts } from "./Components/Posts";
import { Pagination } from "./Components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);
      setLoading(false);
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (i) => {
    setCurrentPage(i);
  };
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Posts</h1>
      {loading ? <h3>Loading...</h3> : <Posts posts={currentPosts} />}
      {posts && (
        <Pagination
          postsPerPage={postsPerPage}
          totalposts={posts.length}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;
