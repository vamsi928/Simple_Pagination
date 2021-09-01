import React from "react";

export const Posts = ({ posts }) => {
  return (
    <ul className="list-group mb-4">
      {posts.map((post, i) => (
        <li
          key={post.id}
          className="list-group-item text-white bg-secondary border border-white rounded text-left"
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
};
