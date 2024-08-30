import TaskItem from "./TaskItem";
import { useState } from "react";
import TaskInput from "./TaskInput";

interface TaskProps {
  Tasks: Array<Task>;
  onComplete: any;
  onDestroy: any;
  onUndo: any;
  histCount: Array<Task>;
}

export interface Task {
  Key: number;
  TaskName: string;
  Priority: number;
  CreatedOn: Date;
}

export default function TaskList({
  Tasks,
  onComplete,
  onDestroy,
  onUndo,
  histCount,
}: TaskProps) {
  const [isAdding, setIsAdding] = useState(false);

  function processAdd(nTask: Task) {
    onComplete(nTask);
    setIsAdding(false);
  }

  return (
    <>
      {isAdding && (
        <TaskInput
          handleCancel={() => setIsAdding(false)}
          handleAdd={processAdd}
        />
      )}
      <div id="task-list">
        <div className="task-list-head">
          <h1>My Tasks</h1>
          {histCount.length > 0 && (
            <button className="btn-undo" onClick={onUndo}>
              Undo
            </button>
          )}
          <button className="btn-add-task" onClick={() => setIsAdding(true)}>
            Add
          </button>
        </div>
        <div className="task-list-body">
          {Tasks.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Priority</th>
                  <th>Date Added</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Tasks.map((task) => (
                  <TaskItem
                    inTask={task}
                    onMarkedComplete={() => onDestroy(task)}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
