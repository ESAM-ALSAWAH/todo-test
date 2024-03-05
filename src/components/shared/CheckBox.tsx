import React from "react";
import { Icons } from "@/components/icons/Icons";
import { clsx } from "@/utils/clsx";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const CheckBox = (props: IProps) => {
  const id = Math.random();
  return (
    <div
      className={clsx(
        "relative w-8 h-8 rounded-full border-2 grid place-items-center overflow-hidden ",
        props.checked
          ? "bg-success border-success "
          : "bg-white border-secondary"
      )}
    >
      {props.checked && Icons.check}
      <label
        htmlFor={`checkbox-${id}`}
        className="absolute inset-0 w-full h-full"
      ></label>
      <input {...props} type="checkbox" id={`checkbox-${id}`} hidden />
    </div>
  );
};
