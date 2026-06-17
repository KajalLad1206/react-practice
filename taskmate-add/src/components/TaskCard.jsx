import "./TaskCard.css";

export const TaskCard = ({ task, handleDelete }) => {
  console.log(task)
  return (
    <div className="taskcard">
      <li className={ task.completed ? "completed" : "incomplete" }>
          <span>{task.id} - {task.name} - {task.priority}</span>
          <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
      </li>
    </div>
  )
}
