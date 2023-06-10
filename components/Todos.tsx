"use client";

import { TodoType } from "@/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TodoCard from "./TodoCard";

function Todos() {
  const { data, isLoading, isError } = useQuery<{ data: TodoType[] }>({
    queryFn: async () => await axios.get("/api/getTodos"),
    queryKey: ["getTodos"],
  });
  return (
    <div className="space-y-2">
      {isLoading && (
        <div className="flex justify-center mt-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {data?.data.length === 0 && (
        <p className="text-3xl font-extrabold text-gray-500 font-loginpage text-center mt-20">
          Start your day here...
        </p>
      )}
      {data?.data.map((todo) => (
        <TodoCard key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default Todos;
