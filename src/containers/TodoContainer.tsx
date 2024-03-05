import profileImage from "@/assets/images/profile.png";
import { AddTodo } from "@/components/features/todo/AddTodo";
import { TodoList } from "@/components/features/todo/TodoList";
import { TodoManagement } from "@/components/features/todo/TodoManagement";
import { UpgradeNow } from "@/components/features/todo/UpgradeNow";
import { useTodo } from "@/hooks/useTodo";

export const TodoContainer = () => {
  const {
    todos,
    ActiveTodo,
    setActiveTodo,
    handleAddTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleChangeStatus,
  } = useTodo();
  return (
    <div className="flex h-screen w-full bg-light">
      <div
        className="flex-1 max-w-[424px] relative flex flex-col"
        style={{
          boxShadow: "0px 4px 4px 0px #0000001A",
        }}
      >
        <div
          className="bg-primary px-8 pt-5 min-h-[123px]"
          style={{
            boxShadow: "0px 4px 4px 0px #0000001A",
          }}
        >
          <div className="flex gap-x-5 items-start">
            <img src={profileImage} alt="jhon" />
            <div>
              <h3 className="text-with-shadow text-white text-[16px] font-medium ">
                Hello, Jhon
              </h3>
              <p className="text-with-shadow text-white text-[25px] mt-2 font-[100] italic leading-7">
                What are your plans <br /> for today?
              </p>
            </div>
          </div>
        </div>
        <UpgradeNow />
        <TodoList
          todos={todos}
          setActiveTodo={setActiveTodo}
          handleChangeStatus={handleChangeStatus}
        />
        <AddTodo handleAddTodo={handleAddTodo} />
      </div>

      <div className="grow relative">
        <div className="bg-primary px-8 pt-5 min-h-[123px] grid place-items-center">
          <h1 className="text-with-shadow text-[24px] font-medium text-white">
            Edit Task
          </h1>
        </div>
        <TodoManagement
          ActiveTodo={ActiveTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      </div>
    </div>
  );
};
