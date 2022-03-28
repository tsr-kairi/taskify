import React, { useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";
// import Image from 'next/image'

// components : ---
import InputField from "../components/InputField";
import { Todo } from "../model";
import TodoList from "../components/TodoList";

const Home: NextPage = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <>
      <Head>
        <title>Taskify | Home</title>
        <meta name="description" content="The page created from nj-ts-tw" />
      </Head>
      <div className="bg-[#2f74c0] font-Neucha w-full h-screen flex flex-col items-center">
        <h1 className="uppercase md:text-[40px] text-[35px] md:my-[30px] my-[15px]  text-white z-10 text-center">
          Taskify
        </h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default Home;
