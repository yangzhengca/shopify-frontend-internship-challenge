import React, { useState } from "react";
import { IPost as IProps } from "../Posts/Posts";
import LikeButton from "../LikeButton/LikeButton";
import styles from "./Post.module.css";
import ToggleButton from "../ToggleButton/ToggleButton";

interface IState {
  showExplanation: boolean;
}

const Post: React.FC<IProps> = ({ date, explanation, title, url }) => {
  const [showExplanation, setShowExplanation] =
    useState<IState["showExplanation"]>(false);

  return (
    <div className="col-md-6 col-xl-4 p-0">
      <div className={`card ${styles.card}`}>
        <img
          className={`card-img-top ${styles.img}`}
          src={url}
          alt="image not found"
        />
        <div className={`card-body ${styles.cardBody}`}>
          <h5 className={`card-title ${styles.title}`}>{title}</h5>
          <p className="card-text">{date}</p>
          {showExplanation && <p className={`card-text ${styles.explanation}`}>{explanation}</p>}

          <ToggleButton
            showExplanation={showExplanation}
            setShowExplanation={setShowExplanation}
          />

          <LikeButton />
        </div>
      </div>
    </div>
  );
};

export default Post;
