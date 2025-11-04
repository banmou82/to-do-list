import { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!task.trim()) return;

    if (editId) {
      setTodos(
        todos.map((t) =>
          t.id === editId ? { ...t, text: task } : t
        )
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((t) => t.id === id);
    setTask(editTodo.text);
    setEditId(id);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="app">
      <h1>📝 To-Do List</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="Add your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 && <p>No tasks yet ✨</p>}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onToggle={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
