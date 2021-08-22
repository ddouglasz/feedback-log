import React from "react";

interface ButtonProps {
    classes?: string
    name: string
  }

const Button = ({ classes, name }: ButtonProps) => {
  return (
    <button className={classes} type="button">
      {name}
    </button>
  );
};

export default Button;
