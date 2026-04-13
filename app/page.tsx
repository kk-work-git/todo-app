"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (text === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>TODOアプリ</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="やること入力"
      />
      <button onClick={addTodo}>追加</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}