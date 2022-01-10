import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Post/Post";
import Spinner from "../Spinner/Spinner";

// set api call url
const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=9`;

// define state type
interface IState {
  post: IPost[];
}

export interface IPost {
  copyright?: string;
  date: string;
  explanation: "string";
  hdurl?: string;
  media_type: "image";
  title: string;
  service_version?: string;
  url: string;
}

const Posts = () => {
  // define and set initial states
  const [posts, setPosts] = useState<IState["post"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // make an api call and update states when page loaded
  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  // refresh page function
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      {loading && <Spinner />}

      {error && "Error! Could not fetch data from NASA's APOD API."}

      <div className="row ms-auto">
        {posts &&
          posts.map((post) => {
            const { title, date, explanation, url, media_type } = post;
            return (
              <Post
                title={title}
                date={date}
                explanation={explanation}
                url={url}
                media_type={media_type}
                key={post.date}
              />
            );
          })}
      </div>
      <div className="d-grid col-md-4 mx-auto m-3">
        {posts && (
          <button type="button" className="btn btn-light" onClick={refreshPage}>
            See another 9 photos / videos
          </button>
        )}
      </div>
    </div>
  );
};

export default Posts;
