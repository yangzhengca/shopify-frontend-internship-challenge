import React from "react";
import styles from "./ToggleButton.module.css";

interface IProps {
  showExplanation: boolean;
  setShowExplanation: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleButton: React.FC<IProps> = ({
  showExplanation,
  setShowExplanation,
}) => {
  const handleClick = () => {
    setShowExplanation((pre) => !pre);
  };

  return (
    <>
      {showExplanation ? (
        <button
          className={`btn ${styles.btn}`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="hide explanation"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-toggle-on"
            viewBox="0 0 16 16"
          >
            <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
          </svg>
        </button>
      ) : (
        <button
          className="btn"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="show explanation"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-toggle-off"
            viewBox="0 0 16 16"
          >
            <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ToggleButton;
