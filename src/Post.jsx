import React from 'react';

function Post({ posts, loading }) {
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <section className="container">
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        );
      })}
    </section>
  );
}

export default Post;
