import React from "react";
import { Icons } from "@/components/icons/Icons";
import { FloatButton } from "@/components/shared/FloatButton";

export const AddTodo = ({ handleAddTodo }: { handleAddTodo: () => void }) => {
  return (
    <FloatButton
      className="absolute right-4 bottom-6 bg-primary border-2 border-primary "
      onClick={() => handleAddTodo()}
    >
      {Icons.plus}
    </FloatButton>
  );
};
