import React, {useState, userState} from 'react'
import "./TaskForm.css";
import Tag from './Tag'

const TaskForm = ({setTasks}) => {
//     const [ task, setTask]= useState("");
//    const [status, setStatus] = useState("todo");
//     console.log(task, status)

    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    });

    const checkTag =(tag)=>{
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) =>{
        // console.log(tag);
        if(taskData.tags.some(item => item === tag)){
            const fileterTags = taskData.tags.filter(item => item !== tag);
            setTaskData(prev =>{
                return {...prev, tags: fileterTags}
            });
        }else{
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]}
            })
        }
    };
    // console.log(taskData.tags);

    const handleChange =(e)=>{
        // const name = e.target.name;
        // const value = e.target.value; 
        const {name, value} =  e.target;
        // console.log(e.target);
        // console.log(name, value);

        setTaskData(prev =>{
            return{ ...prev, [name]: value}
        })
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(taskData);
        setTasks(prev => {
            return [...prev, taskData]
        });

        // console.log(taskData);
    }
    // console.log(taskData);


  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='task'
                className='task_input' 
                placeholder='Enter your task'
                onChange={handleChange}
            
            
            />

            <div className='task_form_bottom_line'>
                <div>
                    {/* <button className='tag'>HTML</button>
                    <button className='tag'>CSS</button>
                    <button className='tag'>JavaScript</button>
                    <button className='tag'>React</button> */}
                    <Tag 
                        tagName = "HTML" 
                        selectTag ={selectTag}
                        selected ={checkTag("HTML")}>
                    </Tag>
                    <Tag 
                        tagName = "CSS" 
                        selectTag ={selectTag}
                        selected= {checkTag("CSS")}>

                    </Tag>
                    <Tag 
                        tagName = "JavaScript" 
                        selectTag ={selectTag}
                        selected= {checkTag("JavaScript")}>
                    </Tag>
                    <Tag 
                        tagName = "React" 
                        selectTag ={selectTag}
                        selected={checkTag("React")}>

                    </Tag>
                </div>
                <div>
            <select 
            name='status'
                className='task_status'
                onChange={handleChange}>
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