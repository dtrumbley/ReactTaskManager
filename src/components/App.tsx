import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TaskList from "./TaskList";
import { Task } from "./TaskList";

const myTasks: Array<Task> = [
  {
    TaskName: "Test",
    Priority: 1,
    CreatedOn: new Date()
  },
  {
    TaskName: "Second One",
    Priority: 4,
    CreatedOn: new Date()
  }
];

export default function App() {
  const [history, setHistory] = useState([Array(10).fill(null)])
  const [curTasks, setCurTasks] = useState([null]);
  return (
    <>
      <Header />
      <div id="main">
        <TaskList Tasks={myTasks} />
      </div>
      <Footer />
    </>
  );
}
