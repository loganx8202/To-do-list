import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false }
    ]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const newText = prompt("Edit task:");
    if (newText !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-gray-100 rounded-2xl shadow-xl">
      <Header />
      <div className="flex my-4">
        <input
          className="border flex-grow p-2 mr-2 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-purple-500 hover:bg-purple-600 transition text-white px-4 py-2 rounded-full shadow-md"
        >
          Add
        </button>
      </div>
      <ToDoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
