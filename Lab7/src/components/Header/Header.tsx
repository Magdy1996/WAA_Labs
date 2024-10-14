import React, { useState } from 'react';
import './header.css';

interface HeaderProps {
    addTask: (taskText: string) => void;
}

const Header: React.FC<HeaderProps> = ({ addTask }) => {
    const [taskName, setTaskName] = useState<string>('');

    const handleAddTask = () => {
        if (taskName.trim()) {
            addTask(taskName);
            setTaskName('');
        }
    };

    return (
        <div className="todo-header">
            <input
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default Header;
