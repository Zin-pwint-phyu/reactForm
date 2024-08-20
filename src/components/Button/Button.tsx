import React from "react";
import style from "./Button.module.css";
interface Props {
  children: React.ReactNode;
  onClick: () => void;
  color: "primary" | "secondary" | "success";
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <>
      <button
        className={[style.btn, style["btn-" + color]].join(" ")}
        onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
