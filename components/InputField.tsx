import React, { FC, useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex w-[90%] relative items-center"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your task"
        className="w-full rounded-full py-[20px] px-[30px] text-[25px] border-none transition duration-300 shadow-3xl focus:outline-none focus:shadow-4xl"
      />
      <button
        type="submit"
        className="absolute w-[50px] h-[50px] m-3 rounded-full right-0 border-none text-[18px] bg-[#2f74c0] text-white transition-all duration-300 shadow-5xl hover:bg-[#388ae2] active:scale-[0.8] active:shadow-6xl"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
