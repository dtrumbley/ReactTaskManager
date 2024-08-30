import { Task } from "./TaskList";

interface trTaskProps {
  inTask: Task;
  onMarkedComplete: any;
}

export default function TaskItem({ inTask, onMarkedComplete }: trTaskProps) {
  return (
    <>
      {inTask && (
        <tr>
          <td>{inTask.TaskName}</td>
          <td>{inTask.Priority}</td>
          <td>{inTask.CreatedOn.toDateString()}</td>
          <td>
            <button onClick={() => onMarkedComplete(inTask)}>Complete</button>
          </td>
        </tr>
      )}
    </>
  );
}
