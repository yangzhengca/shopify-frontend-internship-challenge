import React, { useState } from "react";
import { IPost as IProps } from "../Posts/Posts";
import styles from "./Post.module.css";
import { buttons } from "../../constants"
import Button from "../Button/Button"

// define state types
interface IState {
  showExplanation: boolean;
  liked:boolean;
}

const Post: React.FC<IProps> = ({
  date,
  explanation,
  title,
  url,
  media_type,
}) => {
  // Define and set initial states for buttons
  const [showExplanation, setShowExplanation] = useState<IState["showExplanation"]>(false);
  const [liked, setLiked] = useState<IState["liked"]>(false);
  
  return (
    <div className="col-md-6 col-xl-4 p-0">
      <div className={`card ${styles.card}`}>
        {media_type === "image" ? (
          <img
            className={`card-img-top ${styles.media}`}
            src={url}
            alt="not found"
          />
        ) : (
          <iframe
            title="apod-video"
            src={url}
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
            className={styles.media}
          />
        )}

        <div className={`card-body ${styles.cardBody}`}>
          <h5 className={`card-title ${styles.title}`}>{title}</h5>
          <p className="card-text">{date}</p>
          {showExplanation && (
            <p className={`card-text ${styles.explanation}`}>{explanation}</p>
          )}
  
          <Button buttonState={liked}
            setButtonState={setLiked}
            buttonData={buttons.like} />

          <Button buttonState={showExplanation}
            setButtonState={setShowExplanation}
            buttonData={buttons.toggle}/>
          
        </div>
      </div>
    </div>
  );
};

export default Post;
