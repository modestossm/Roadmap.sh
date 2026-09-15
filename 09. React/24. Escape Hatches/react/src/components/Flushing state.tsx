import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

export default function TodoList() {
  const listRef = useRef<HTMLUListElement>(null);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(
    initialTodos
  );

  const list = listRef.current;
  const lastChild = list?.lastChild as Element | null;

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    flushSync(() => { // The flushSync instruct React to update the DOM synchronously right after the code wrapped in flushSync executes.
      setText('');
      setTodos([ ...todos, newTodo]);
    });
    lastChild?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }

  return (
    <>
      <button onClick={handleAdd} className="px-4 py-2 ms-20 me-2 mt-20 rounded bg-blue-500 text-white hover:bg-blue-600 transition">
        Add
      </button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        className="border-2 rounded"
      />
      <ul ref={listRef} className="ms-20 mt-2">
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

let nextId = 0;
let initialTodos: { id: number; text: string }[] = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: 'Todo #' + (i + 1)
  });
}