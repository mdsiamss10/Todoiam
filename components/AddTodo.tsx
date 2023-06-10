"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { FormEvent, useRef, useState } from "react";
import { HiPlus } from "react-icons/hi";

function AddTodo() {
  const { data } = useSession();
  const queryClient = useQueryClient();
  const [todotext, setTodoText] = useState("");
  const modalBtn = useRef();
  const [disabled, setDisabled] = useState(false);
  const { mutate } = useMutation(
    async (todoText: string) => {
      await axios.post("/api/addTodo", { todoText });
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["getTodos"]);
        // @ts-ignore
        modalBtn.current.close();
        setDisabled(false);
      },
    }
  );
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setDisabled(true);
    mutate(todotext);
  };
  return (
    <>
      <HiPlus
        className="text-4xl cursor-pointer"
        //   @ts-ignore
        onClick={() => window.my_modal_3.showModal()}
      >
        open modal
      </HiPlus>
      {/* @ts-ignore */}
      <dialog ref={modalBtn} id="my_modal_3" className="modal">
        <form
          onSubmit={handleSubmit}
          method="dialog"
          className="modal-box w-full flex flex-col gap-3"
        >
          <h3 className="font-bold text-lg mb-1">Hello, {data?.user?.name}!</h3>
          <input
            type="text"
            placeholder="What would you like to do?"
            value={todotext}
            onChange={(e) => setTodoText(e.target.value)}
            className="input input-bordered input-primary w-full"
          />
          <button
            disabled={disabled}
            type="submit"
            className="w-full btn btn-primary"
          >
            SUBMIT
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          {/* @ts-ignore */}
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default AddTodo;
