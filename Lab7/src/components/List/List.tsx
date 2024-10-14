// List.tsx
import React from 'react';
import Item from '../Item/Item';
import './list.css';
import { Todo } from '../Types/Todo';

interface ListProps {
    tasks: Todo[];
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

const List: React.FC<ListProps> = ({ tasks, toggleTask, deleteTask }) => {
    return (
        <ul className="todo-main">
            {tasks.map(task => (
                <Item
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
};

export default List;
