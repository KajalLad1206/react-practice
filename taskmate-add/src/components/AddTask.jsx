import { useState, useRef} from "react";
import "./AddTask.css";

export const AddTask = ({tasks,setTasks}) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);
    
    //useref used for to reference a value that’s not needed for rendering.
      const taskRef = useRef("High"); // useref used for refrence the value but cant be rendered

    const handleChange = (event) => {      
        setTaskValue(event.target.value);
    }
    const handleReset =() =>{
      setTaskValue("")
      setProgress("");
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      const task ={
        id : Math.floor(Math.random()*100),
        name : taskValue,
        priority : taskRef.current.value,
        completed : Boolean(progress)
      }
      setTasks([...tasks,task])
      handleReset()
    }
  return (   
    <section className="addtask">
        <h3>Practical-3 From Inputs, UseRef</h3><br></br>
        <form onSubmit={handleSubmit}>            
            <input value={taskValue} onChange= {handleChange} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" />
            <input type="text" name="priority" id="priority" placeholder="Task Priority" autoComplete="off" ref={taskRef} />
            <select onChange={(e)=>setProgress(e.target.value)}  value={progress} >             
               <option value="false" >Pending</option>
                <option value="true">Completed</option>
            </select>
            <button type="submit">Add Task</button>
             <span onClick={handleReset} className="reset">Reset</span>
        </form>
        {/* <p>{taskValue.length}</p> */}
        {/* <p>{ taskRef.value}</p>  you can't render the useRef Value you can store it assign it 
                but not render it*/}
    </section>
  )
}
