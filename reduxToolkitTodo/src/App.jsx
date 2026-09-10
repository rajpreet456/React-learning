import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-extrabold text-center text-white mb-6">
          Learn Redux Toolkit (RTK)
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}