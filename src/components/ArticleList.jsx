import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  return (
    <div>
      <main>
        {posts.map((post) => (
          <Article key={post.id}>
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.preview}</p>
          </Article>
        ))}
      </main>
    </div>
  );
};

export default ArticleList;
