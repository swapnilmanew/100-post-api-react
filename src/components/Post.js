import React, { useState, useEffect } from 'react';
const Post = () => {
  const [post, setPost] = useState([]);
  const fetchApi = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {post.map(item => {
        return (
          <div className="col-12 col-sm-6 col-md-4 mx-auto my-3" key={item.id}>
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <h1 className="fw-bold text-center">
                  {item.title.substring(0, 10)}
                </h1>
                <hr />
                <p>{item.body.substring(0, 100)}</p>
                <div className="text-center">
                  <a href="#" className="btn btn-dark shadow-md">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
