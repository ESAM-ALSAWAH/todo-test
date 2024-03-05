import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/shared/Button";
import { Input } from "@/components/shared/Input";
import { todoType } from "@/types";

export const TodoManagement = ({
  handleDeleteTodo,
  handleEditTodo,
  ActiveTodo,
}: {
  handleDeleteTodo: (id: number) => void;
  handleEditTodo: (id: number, title: string) => void;
  ActiveTodo?: todoType | null;
}) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(ActiveTodo?.title ?? "");
  }, [ActiveTodo]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title && String(title)?.trim()) {
      ActiveTodo && handleEditTodo(ActiveTodo.id, title);
    }
  };
  const handleDelete = () => {
    if (ActiveTodo) handleDeleteTodo(ActiveTodo?.id);
  };
  return (
    <form className="px-5 pt-7 " onSubmit={handleSubmit}>
      <div className="">
        <label
          htmlFor="Task Name"
          className="block mb-[15px] font-normal text-[16px]"
        >
          Task Name
        </label>
        <Input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
      </div>
      <div className="flex items-center gap-5 mt-auto absolute bottom-6 right-0 left-0 px-8">
        <Button
          type="button"
          color="error"
          className="text-with-shadow"
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          type="submit"
          color="primary"
          className="w-full text-with-shadow"
        >
          Save
        </Button>
      </div>
    </form>
  );
};
