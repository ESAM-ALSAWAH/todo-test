import { clsx } from "@/utils/clsx";
import { omit } from "@/utils/omit";
import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}
export const Input = (props: IProps) => {
  return (
    <input
      type="text"
      style={{
        ...(props.fullWidth && {
          width: "100%",
        }),
        ...props.style,
      }}
      className={clsx(
        "text-secondary font-normal text-lg rounded-[9px] outline-none bg-white py-5 px-[26.6px] ",
        props.className
      )}
      {...omit(props, ["style", "className"])}
    />
  );
};
