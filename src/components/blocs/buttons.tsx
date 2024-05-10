import React from "react";

interface ButtonProps {
  className: string | undefined;
  onClick: () => void;
  text: string;
}

const Button = React.memo(({ className, onClick, text }: ButtonProps) => {
  return (
    <button
      className={` transform  duration-300 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
});
export default Button;
