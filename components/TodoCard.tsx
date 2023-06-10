"use client";

import { TodoType } from "@/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";

interface ToggleType {
  id: any;
  completed: boolean;
}

function TodoCard(todo: TodoType) {
  const queryClient = useQueryClient();
  const { mutate: deleteMutate } = useMutation(
    async (id: string) => {
      await axios.post("/api/deletePost", { id });
    },
    {
      onSuccess: (data: any) => {
        queryClient.invalidateQueries(["getTodos"]);
      },
    }
  );
  const { mutate: toggleMutate } = useMutation(
    async ({ id, completed }: ToggleType) => {
      await axios.post("/api/toggleTodo", { id, completed });
    },
    {
      onSuccess: (data: any) => {
        queryClient.invalidateQueries(["getTodos"]);
      },
    }
  );
  const handleDelete = async () => {
    deleteMutate(todo.id);
  };
  const handleToggle = async (checked: boolean) => {
    toggleMutate({ id: todo.id, completed: checked });
  };
  return (
    <>
      <div className="border border-gray-800 rounded-md p-4 py-6 flex items-center justify-between">
        {/* Lift side of todo card */}
        <div className="flex items-center gap-4 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            className="checkbox checkbox-sm"
            onChange={(e) => {
              handleToggle(e.target.checked);
            }}
          />
          <span className="text-justify break-all mr-5">{todo.todo}</span>
        </div>
        {/* Right side of the todo card */}
        <div className="dropdown dropdown-left">
          <label tabIndex={0} className="btn rounded-full">
            <BsThreeDotsVertical className="cursor-pointer" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={handleDelete}>Delete</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoCard;
