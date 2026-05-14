import { TodoProvider } from "./TodoContext";

function App() {

    const [todos, setTodos] = useState();

    const  addTodo = (Todomsg) => {
        setTodos(prev => [...prev, {id: Date.now(), Todomsg, completed: false}])
    };

    const updateTodo = (Todomsg, id) => {
        setTodos(prev => prev.map(todo => todo.id === id ? {...todo, Todomsg} : todo))
    };

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    };  

    const toggleComplete = (id) => {
        setTodos(prev => prev.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    };
 
  return (
   <TodoProvider value={{tools, addTodo, updateTodo, deleteTodo, toggleComplete}}
   className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </TodoProvider> 
  )
}

export default App
