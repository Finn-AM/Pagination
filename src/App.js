import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Post from './Post';
import Pagination from './Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    const res = await axios.get(url);
    setPosts(res.data);
    setLoading(false);

    console.log(posts);
  }

  const LastPost = currentPage * postPerPage;
  const FirstPost = LastPost - postPerPage;
  const currentPosts = posts.slice(FirstPost, LastPost);

  //

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="App">
      <h1>Hi React</h1>
      <Post posts={currentPosts} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPost={posts.length}
        paginate={paginate}
      />
    </main>
  );
}

export default App;
