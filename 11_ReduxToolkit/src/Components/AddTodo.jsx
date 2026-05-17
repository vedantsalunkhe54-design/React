import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../App/Slice";
import React from "react";

function AddTodo() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo("");
    };

    return (
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Enter todo"
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default AddTodo;