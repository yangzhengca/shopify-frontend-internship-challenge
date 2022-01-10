import React from "react";
import styles from "./Button.module.css";

interface IProps {
  buttonState: boolean;
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
  buttonData: {
    buttonTitleTrue: string;
    svgClassNameTrue: string;
    pathTrue: string;
    buttonTitleFalse: string;
    svgClassNameFalse: string;
    pathFalse: string;
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
          className={styles.btnTrue}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={buttonData.buttonTitleTrue}
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className={buttonData.svgClassNameTrue}
            viewBox="0 0 16 16"
          >
            <path d={buttonData.pathTrue} />
          </svg>
        </button>
      ) : (
        <button
          className={styles.btnFalse}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={buttonData.buttonTitleFalse}
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className={buttonData.svgClassNameFalse}
            viewBox="0 0 16 16"
          >
            <path d={buttonData.pathFalse} />
          </svg>
        </button>
      )}
    </>
  );
};

export default Button;
