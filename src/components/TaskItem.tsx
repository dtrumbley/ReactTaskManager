import { Task } from "./TaskList";

interface trTaskProps {
    inTask: Task;
};

export default function TaskItem({inTask}: trTaskProps){
    return (
        <>
            {inTask && 
                <tr>
                    <td>{inTask.TaskName}</td>
                    <td>{inTask.Priority}</td>
                    <td>{(inTask.CreatedOn).toDateString()}</td>
                    <td><button>Complete</button></td>
                </tr>
            }
        </>
    )
}