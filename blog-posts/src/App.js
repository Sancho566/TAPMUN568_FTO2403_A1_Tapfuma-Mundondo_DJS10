import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch posts from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Data fetching failed');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ol>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;
