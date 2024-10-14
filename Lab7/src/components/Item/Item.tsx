import React, { useState } from 'react';
import './item.css';
import { Todo } from '../Types/Todo'



interface ItemProps {
    task: Todo;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ task, toggleTask, deleteTask }) => {
    const [showDelete, setShowDelete] = useState<boolean>(false);

    return (
        <li
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
        >
            <label>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
            </label>
            {showDelete && (
                <button
                    className="btn btn-danger"
                    onClick={() => deleteTask(task.id)}
                    style={{ marginLeft: '10px' }}
                >
                    Delete
                </button>
            )}
        </li>
    );
};

export default Item;

