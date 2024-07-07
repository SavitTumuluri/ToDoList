import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material';
import { EditTodoForm } from './EditTodoForm';

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)}
            className= {`${task.completed ? 'completed': ""}
            `}>{task.task}</p>
            <div>
                <Button onClick={() => editTodo(task.id)}><FontAwesomeIcon icon={faPenToSquare} /></Button>
                <Button onClick={() => deleteTodo(task.id)}><FontAwesomeIcon icon={faTrash} /></Button>
            </div>
        </div>
    )
}