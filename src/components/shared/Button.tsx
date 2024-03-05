import React from "react";
import { clsx } from "@/utils/clsx";
import { omit } from "@/utils/omit";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "error";
  variant?: "contained" | "outline";
}

const bgColor: Readonly<{
  primary: string;
  error: string;
}> = {
  primary: "bg-primary border-2 border-primary ",
  error: "bg-error border-2 border-error",
};
const textColor: Readonly<{
  primary: string;
  error: string;
}> = {
  primary: "text-secondary",
  error: "text-error",
};

export const Button = (props: IProps) => {
  const { color = "primary", variant = "contained" } = props;
  return (
    <button
      className={clsx(
        "cursor-pointer  rounded-md outline-none ",
        bgColor[color],
        variant === "outline"
          ? `min-h-0 min-w-0 bg-transparent  ${textColor[color]}`
          : "min-h-[60px] min-w-[120px] text-white text-[18px] font-normal",
        props.className
      )}
      {...omit(props, ["className"])}
    >
      {props.children}
    </button>
  );
};
