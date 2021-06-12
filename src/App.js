import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './components/Post';
const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Post />
      </div>
    </div>
  );
};

export default App;
