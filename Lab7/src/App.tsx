import React, { useState } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import './App.css';
import { Todo } from './components/Types/Todo';


function App() {
    const [tasks, setTasks] = useState<Todo[]>([]);
    const [finishedCount, setFinishedCount] = useState<number>(0);

    const addTask = (taskText: string) => {
        const newTask: Todo = { id: Date.now(), text: taskText, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        setFinishedCount(updatedTasks.filter(task => task.completed).length);
    };

    const deleteTask = (id: number) => {
        const remainingTasks = tasks.filter(task => task.id !== id);
        setTasks(remainingTasks);
        setFinishedCount(remainingTasks.filter(task => task.completed).length);
    };

    const deleteFinishedTasks = () => {
        const activeTasks = tasks.filter(task => !task.completed);
        setTasks(activeTasks);
        setFinishedCount(0);
    };

    return (
        <div className="todo-app">
            <Header addTask={addTask} />
            <List tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
            <Footer
                totalTasks={tasks.length}
                finishedCount={finishedCount}
                deleteFinishedTasks={deleteFinishedTasks}
            />
        </div>
    );
}

export default App;
