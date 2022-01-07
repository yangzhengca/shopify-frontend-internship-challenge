import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Post/Post";
import Spinner from "../Spinner/Spinner"


// localhost:5000/v1/apod?api_key=DEMO_KEY&date=2014-10-01&concept_tags=True

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=8`;

interface IState {
  post: IPost[];
}

export interface IPost {
  copyright?: string;
  date: string;
  explanation: "string";
  hdurl?: string;
  media_type?: "image";
  title: string;
  service_version?: string;
  url: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<IState["post"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setPosts(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        // console.error(error);
        setError(true);
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="container">

      {loading && <Spinner />}
      {error && "Error! Could not fetch data from NASA's APOD API."}
      <div className="container">
        <div className="row ms-auto">
          {posts &&
            posts.map((post) => {
              const { title, date, explanation, url } = post;
              return (
                <Post
                  title={title}
                  date={date}
                  explanation={explanation}
                  url={url}
                  key={post.title}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
