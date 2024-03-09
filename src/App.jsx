import React, {useState} from 'react'

import "./App.css"
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';

import todoIcon from "./assets/direct-hit.png"
import inProgressIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {
  const [tasks, setTasks]= useState([])
  console.log("tasks", tasks);
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}></TaskForm>
      <main className='app_main'>
      <TaskColumn 
        title = "To do" 
        icon = {todoIcon} 
        tasks={tasks}
        status = "todo"/>
      <TaskColumn 
        title = "In Progress" 
        icon={inProgressIcon} 
        tasks={tasks}
        status = "doing"/>
      <TaskColumn 
        title = "Done" 
        icon={doneIcon} 
        tasks={tasks}
        status = "done"/>
      </main>
    </div>
  )
}



export default App;