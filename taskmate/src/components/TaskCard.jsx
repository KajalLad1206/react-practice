
// export const TaskCard = (props) => {
export const TaskCard = ({task, handleDelete}) => {
  return (
    <>
    <li key={task.id} className={task.done ? "completed" : "incomplete"} >
                <span>{task.id} - {task.title}</span>
                <button className='delete' onClick={()=>handleDelete(task.id)}>Delete</button>
    </li>
    </>
  )
}
