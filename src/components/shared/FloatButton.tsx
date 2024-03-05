import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const FloatButton = (props: IProps) => {
  return <button {...props}>{props.children}</button>;
};
FloatButton.defaultProps = {
  style: {
    cursor: "pointer",
    width: "60px",
    height: "60px",
    borderRadius: "100%",
    outline: "none",
    boxShadow: "0px 3px 1px 0px #A8B5DE80 inset ,0px 4px 4px 0px #00000040",
    display: "grid",
    placeItems: "center",
  },
};
