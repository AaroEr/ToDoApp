import React, { useState } from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks(t => [...t, { text: newTask, isChecked: false }])
            setNewTask('')
        }
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    const toggleCheckbox = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, isChecked: !task.isChecked } : task
        )
        setTasks(updatedTasks)
    }

    return (
        <div className='mt-20 w-full'>
            <div className='relative mt-2 ml-5'>
                <input 
                    type="text" 
                    placeholder='New task...' 
                    value={newTask}
                    onChange={handleInputChange}
                    className='mt-5 border border-gray-400 rounded' 
                />
                <button className='ml-2 px-2 bg-blue-300 rounded hover:bg-blue-500'
                        onClick={addTask}>Add</button>
                <h2 className='mt-1 font-semibold text-[18px]'>Your tasks:</h2>
            </div>
            <ul>
                {tasks.map((task, index) => 
                <li key={index} className='ml-5 mr-5 mt-1 bg-slate-100 rounded'>
                    <input 
                        type="checkbox" 
                        checked={task.isChecked} 
                        onChange={() => toggleCheckbox(index)}
                        className='ml-5 mr-2 cursor-pointer'
                    />
                    <span className={task.isChecked ? 'line-through' : ''}>{task.text}</span>
                    <button onClick={() => deleteTask(index)} className='fixed right-10 bg-red-400 rounded px-1'>
                        🗑️
                    </button>
                </li>)}
            </ul>
        </div>
    )
}

export default ToDoList
