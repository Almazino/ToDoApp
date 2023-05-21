import React, { useState } from 'react';
import './style.css';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            setTasks((prevTasks) => [...prevTasks, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredTasks = tasks.filter((task) =>
        task.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="todo-container">
            <div className="todo-nav">
                <h1 className='topick'>TODOLIST</h1>
            </div>
            <div className="todo-cont1">
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add a new task" className='add' />
                <button onClick={handleAddTask} className='add-but'>Add</button>
            </div>
            <div className="todo-cont2">
                <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search tasks" className='search' />
            </div>
            <ul className="todo-list">
                {filteredTasks.map((task, index) => (
                    <ol className="todo-item" key={index}>
                        <input type="checkbox" className='box' />
                        <span>{task}</span>
                        <button onClick={() => handleDeleteTask(index)} className='del'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg></button>
                    </ol>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
