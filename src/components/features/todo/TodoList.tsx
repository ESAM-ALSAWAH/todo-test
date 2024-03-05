import React from "react";
import { Button } from "@/components/shared/Button";
import { CheckBox } from "@/components/shared/CheckBox";
import { todoType } from "@/types";
import { clsx } from "@/utils/clsx";

export const TodoList = ({
  todos,
  setActiveTodo,
  handleChangeStatus,
}: {
  todos: todoType[];
  setActiveTodo: React.Dispatch<React.SetStateAction<todoType | null>>;
  handleChangeStatus: (id: number) => void;
}) => {
  return (
    <div className="custom-scroll flex flex-col gap-y-6 pt-5 px-4  h-full overflow-auto mb-[100px] ">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="min-h-[91px] bg-white flex items-center justify-between ps-[23px] pe-[19px] gap-5 rounded-md"
          style={{
            boxShadow: "0px 4px 4px 0px #0000001A",
          }}
        >
          <div className="flex items-center gap-[17px]">
            <CheckBox
              checked={todo.checked}
              onChange={() => handleChangeStatus(todo.id)}
            />
            <h6
              className={clsx(
                "truncate max-w-[140px] text-[16px] font-medium",
                todo.checked ? "line-through text-darkGray" : "text-primary"
              )}
            >
              {todo.title}
            </h6>
          </div>
          <Button
            color="primary"
            variant="outline"
            className="w-[51px] h-[45px] text-[16px] font-medium"
            onClick={() => setActiveTodo(todo)}
          >
            Edit
          </Button>
        </div>
      ))}
    </div>
  );
};
