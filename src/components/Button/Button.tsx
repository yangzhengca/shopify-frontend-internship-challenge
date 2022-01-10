import React from "react";
import styles from "./Button.module.css";

interface IProps {
  buttonState: boolean;
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
  buttonData: {
    buttonTitle1: string;
    svgClassName1: string;
    path1: string;
    buttonTitle2: string;
    svgClassName2: string;
    path2: string;
  };
}

const Button: React.FC<IProps> = ({
  buttonState,
  setButtonState,
  buttonData,
}) => {
  // handle button click function
  const handleClick = () => {
    setButtonState((pre) => !pre);
  };

  return (
    <>
      {buttonState ? (
        <button
          className={`btn ${styles.btn}`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={buttonData.buttonTitle1}
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className={buttonData.svgClassName1}
            viewBox="0 0 16 16"
          >
            <path d={buttonData.path1} />
          </svg>
        </button>
      ) : (
        <button
          className="btn"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={buttonData.buttonTitle2}
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className={buttonData.svgClassName2}
            viewBox="0 0 16 16"
          >
            <path d={buttonData.path2} />
          </svg>
        </button>
      )}
    </>
  );
};

export default Button;
