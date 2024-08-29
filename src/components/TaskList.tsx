import TaskItem from "./TaskItem";

interface TaskProps {
  Tasks: Array<Task>;
  onDelete?: React.MouseEvent;
}

export interface Task {
  TaskName: string;
  Priority: number;
  CreatedOn: Date;
}

export default function TaskList({ Tasks }: TaskProps) {
  console.log(Tasks);
  return (
    <div id="task-list">
      <div className="task-list-head">
        <h1>myTasks</h1>
        <button className="btn-add-task">Add</button>
      </div>
      <div className="task-list-body">
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
          {Tasks.length > 0 && Tasks.map((task) => (
            <TaskItem inTask={task} />
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
