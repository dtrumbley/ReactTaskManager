import { Task } from "./TaskList";

interface trTaskProps {
    inTask: Task;
    handleClick?: React.MouseEvent
};

export default function TaskItem({inTask}: trTaskProps){
    return (
        <>
            {inTask && 
                <tr>
                    <td>{inTask.TaskName}</td>
                    <td>{inTask.Priority}</td>
                    <td>{(inTask.CreatedOn).toDateString()}</td>
                    <td><button onClick={() => console.log(`hit`)}>Complete</button></td>
                </tr>
            }
        </>
    )
}