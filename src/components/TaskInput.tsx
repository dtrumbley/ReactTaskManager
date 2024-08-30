import { useState } from "react";
import { Task } from "./TaskList";

interface inProps {
  handleCancel: any;
  handleAdd: any;
}

let keyCount = 0;

export default function TaskInput({ handleCancel, handleAdd }: inProps) {
  const [inputValue, setInputValue] = useState(``);
  const [selectValue, setSelectValue] = useState(`3`);

  const handlePopUpClick = (event: any) => {
    event.stopPropagation();
  };

  function handleSelectChange(event: any) {
    setSelectValue(event.target.value);
  }

  function handleInputChange(event: any) {
    setInputValue(event.target.value);
  }

  function handleAddTask() {
    keyCount++;
    const nTask: Task = {
      Key: keyCount,
      TaskName: inputValue,
      Priority: parseInt(selectValue),
      CreatedOn: new Date(),
    };
    handleAdd(nTask);
  }

  return (
    <div className="backdrop" onClick={handleCancel}>
      <div className="task-input-window" onClick={handlePopUpClick}>
        <button className="input-btn-exit" onClick={handleCancel}>
          X
        </button>
        <input
          type="text"
          placeholder="What do you need to do...?"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <div>
          How important is it?
          <select value={selectValue} onChange={handleSelectChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button id="input-btn-add" onClick={() => handleAddTask()}>
          Add
        </button>
      </div>
    </div>
  );
}
