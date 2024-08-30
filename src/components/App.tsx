import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TaskList from "./TaskList";
import { Task } from "./TaskList";

export default function App() {
  const [history, setHistory] = useState([Array(10).fill(null)]);
  const [curTasks, setCurTasks] = useState(Array<Task>);

  /*
  used for testing -- leaving in case needed later.
  if (curTasks.length < 1) {
  setCurTasks([
    {
      Key: 1,
      TaskName: "Test",
      Priority: 1,
      CreatedOn: new Date()
    },
    {
      Key: 2,
      TaskName: "Second One",
      Priority: 4,
      CreatedOn: new Date()
    }
  ]);
}
  */

  function handleAdd(nTask: Task) {
    setCurTasks([...curTasks, nTask]);
  }

  function handleDestroy(oTask: Task) {
    let localcop: Array<Task> = curTasks.filter((t) => t.Key != oTask.Key);
    setCurTasks(localcop);
  }
  return (
    <>
      <Header />
      <div id="main">
        <TaskList
          Tasks={curTasks}
          onComplete={handleAdd}
          onDestroy={handleDestroy}
        />
      </div>
      <Footer />
    </>
  );
}
