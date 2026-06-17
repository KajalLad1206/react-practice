import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import './taskList.css';

export const TaskList = (props) => {
const [tasks, setTasks] = useState([
        { id: 0, title: 'Buy milk', done: true },
        { id: 1, title: 'Eat tacos', done: false },
        { id: 2, title: 'Brew tea', done: false },
    ])

const [show,setShow] =useState(true)

function handleDelete(id){
    setTasks(tasks.filter(task => task.id !== id));
}

return (
    <>   
        <ul>
            <h1>Practical-2 Task List with useState List </h1>
            <button className='trigger' onClick={() => setShow(!show)}>Toggle {props.title}</button>

            { show && tasks.map((task) => (
                <TaskCard  key={task.id} task={task} handleDelete={handleDelete}/>
            )) }        
      
        <BoxCard result="success">
            <p className="title">Offer Notification</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel!</p>
        </BoxCard>
        <BoxCard result="warning">
            <p className="title">Cookie Notification</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit.</p>
        </BoxCard>
        </ul>
    </>
  )

}
