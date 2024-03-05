import { todoType } from "@/types"
import { useState } from "react"


/**
 * Initial todos state.
 * @type {todoType[]}
 */
const initialTodos = [
  {
    title: "Training at the Gym",
    checked: true,
    id: Math.random()
  },
  {
    title: "Play Paddle with friends",
    checked: false,
    id: Math.random()
  }
] as todoType[];


/**
 * Custom hook for managing todo list state and actions.
 * @returns {{
 *   ActiveTodo: todoType | null,
 *   setActiveTodo: React.Dispatch<React.SetStateAction<todoType | null>>,
 *   todos: todoType[],
 *   handleAddTodo: () => void,
 *   handleDeleteTodo: (id: number) => void,
 *   handleEditTodo: (id: number, title: string) => void,
 *   handleChangeStatus: (id: number) => void
 * }}
 */
export const useTodo = () => {

  /**
   * State for todos.
   * @type {[todoType[], React.Dispatch<React.SetStateAction<todoType[]>>]}
   */
  const [todos, setTodos] = useState<todoType[]>(initialTodos);

  /**
   * State for active todo.
   * @type {[todoType | null, React.Dispatch<React.SetStateAction<todoType | null>>]}
   */
  const [ActiveTodo, setActiveTodo] = useState<todoType | null>(todos[0]);

  /**
   * Deletes a todo by ID.
   * @param {number} id - The ID of the todo to delete.
   */
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setActiveTodo(null);
  };

  /**
   * Adds a new todo.
   */
  const handleAddTodo = () => {
    const todo = {
      title: "new Todo",
      id: Math.random(),
      checked: false
    };
    setTodos((prev) => [todo, ...prev]);
    setActiveTodo(todo);
  };

  /**
   * Edits a todo title by ID.
   * @param {number} id - The ID of the todo to edit.
   * @param {string} title - The new title for the todo.
   */
  const handleEditTodo = (id: number, title: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: title
          };
        }
        return todo;
      });
    });
  };

  /**
   * Toggles the checked status of a todo by ID.
   * @param {number} id - The ID of the todo to toggle.
   */
  const handleChangeStatus = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked
          };
        }
        return todo;
      });
    });
  };

  return {
    ActiveTodo,
    setActiveTodo,
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleChangeStatus
  };
};
