import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TaskList from "./TaskList";
import { Task } from "./TaskList";

export default function App() {
  const [history, setHistory] = useState(Array<Task>);
  const [curTasks, setCurTasks] = useState(Array<Task>);


  function handleAdd(nTask: Task) {
    setCurTasks([...curTasks, nTask]);
  }

  function handleDestroy(oTask: Task) {
    setHistory([...history,oTask]);
    let localcop: Array<Task> = curTasks.filter((t) => t.Key != oTask.Key);
    setCurTasks(localcop);
  }

  function handleUndo(){
    if (history.length > 0){
      const lastRemoved: Task = history[history.length -1];

      const updatedCurTasks: Array<Task> = [...curTasks, lastRemoved];
      setCurTasks(updatedCurTasks);
      const updatedHistory = history.slice(0,-1);
      setHistory(updatedHistory);
    }
  }
  return (
    <>
      <Header />
      <div id="main">
        <TaskList
          Tasks={curTasks}
          onComplete={handleAdd}
          onDestroy={handleDestroy}
          onUndo={handleUndo}
          histCount={history}
        />
      </div>
      <Footer />
    </>
  );
}
