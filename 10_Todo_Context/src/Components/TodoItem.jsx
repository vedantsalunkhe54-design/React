import React from "react";
function TodoItem({ todo, deleteTodo, toggleComplete }) {
    return (
        <div className={`flex items-center justify-between p-3 rounded-md ${todo.completed ? "bg-green-500" : "bg-gray-700"}`}>
            <span className={`flex-1 ${todo.completed ? "line-through text-gray-300" : "text-white"}`}>
                {todo.Todomsg}
            </span>
            <div className="flex gap-2">
                <button onClick={() => toggleComplete(todo.id)} className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600">
                    {todo.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;