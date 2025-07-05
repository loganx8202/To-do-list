function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div className="flex justify-between items-center p-3 my-2 rounded-xl shadow-md hover:bg-gray-200 transition">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-2 accent-purple-500"
        />
        <span
          className={todo.completed ? "line-through text-gray-400" : "text-black"}
        >
          {todo.text}
        </span>
      </div>
      <div>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-600 hover:text-red-800 mr-2"
        >
          Delete
        </button>
        <button
          onClick={() => onEdit(todo.id)}
          className="text-purple-600 hover:text-purple-800"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
