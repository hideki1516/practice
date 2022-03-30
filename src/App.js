import logo from "./logo.svg";
import { Task } from "./Task";

function App() {
  const tasks = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" },
    { id: 4, title: "four" },
    { id: 5, title: "five" },
  ];

  return (
    <div className="App">
      <Task tasks={tasks} />
    </div>
  );
}

export default App;
