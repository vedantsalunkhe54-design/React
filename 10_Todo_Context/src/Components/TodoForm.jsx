import React from "react";

function TodoForm({ addTodo }) {
    const [input, setInput] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo"
                className="flex-1 px-3 py-2 rounded-l-md focus:outline-none text-gray-800"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                Add
            </button>
        </form>
    );
}

export default TodoForm;