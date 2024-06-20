import "./App.css";
import TodoList from "./component/TodoList";

const todoLists = [
  {
    id: 1,
    title: "Todo 1",
  },
  {
    id: 2,
    title: "Todo 2",
  },
  {
    id: 3,
    title: "Todo 3",
  },
  {
    id: 4,
    title: "Todo 4",
  },
];
function App() {
  return (
    <>
      <TodoList todoLists={todoLists} />
    </>
  );
}

export default App;
