import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './components/Post';
const App = () => {
  return (
    <div className="container">
      <h1 className="text-center fw-bold display-4 mt-4">100 Post React Api</h1>
      <div className="row">
        <Post />
      </div>
    </div>
  );
};

export default App;
