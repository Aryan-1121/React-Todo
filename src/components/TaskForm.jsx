import React, {useState, userState} from 'react'
import "./TaskForm.css";
import Tag from './Tag'

const TaskForm = () => {
    const [ task, setTask]= useState("");
   const [status, setStatus] = useState("todo");
    console.log(task, status)

  return (
    <header className='app_header'>
        <form >
            <input 
                type="text" 
                className='task_input' 
                placeholder='Enter your task'
                onChange={(e)=>setTask(e.target.value)}
            
            
            />

            <div className='task_form_bottom_line'>
                <div>
                    {/* <button className='tag'>HTML</button>
                    <button className='tag'>CSS</button>
                    <button className='tag'>JavaScript</button>
                    <button className='tag'>React</button> */}
                    <Tag tagName = "HTML"></Tag>
                    <Tag tagName = "CS"></Tag>
                    <Tag tagName = "JavaScript"></Tag>
                    <Tag tagName = "React"></Tag>
                </div>
                <div>
            <select className='task_status'
            onChange={(e) => setStatus (e.target.value)}>
            <option value="todo"> To Do</option>
            <option value="doing"> In Progress</option>
            <option value="done"> Done</option>
            </select>
            <button type='submit' className='task_submit'> + Add Task</button>
            </div>
            </div>
        </form>
    </header>
    )
}

export default TaskForm