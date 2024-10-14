import React from 'react';
import './footer.css';

interface FooterProps {
    totalTasks: number;
    finishedCount: number;
    deleteFinishedTasks: () => void;
}

const Footer: React.FC<FooterProps> = ({ totalTasks, finishedCount, deleteFinishedTasks }) => {
    return (
        <div className="todo-footer">
            <span>
                Finished {finishedCount} / total {totalTasks}
            </span>
            <button
                className="btn btn-danger"
                onClick={deleteFinishedTasks}
                style={{ marginLeft: '10px' }}
            >
                Delete Finished Tasks
            </button>
        </div>
    );
};

export default Footer;
