
function TodoItem({ todo, onDelete, onEdit, onToggle }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <div className="actions">
        <button onClick={() => onEdit(todo.id)}>✏️</button>
        <button onClick={() => onDelete(todo.id)}>🗑️</button>
      </div>
    </li>
  );
}

export default TodoItem;
