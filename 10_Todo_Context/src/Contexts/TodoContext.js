import { createContext, useContext } from "react";


export const TodoContext = createContext({
    tools:[
        {
            id: 1,
            Todomsg: "Todo msg"
        }
    ],
    addTodo: (Todomsg) => {},
    updateTodo: (Todomsg,id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;

