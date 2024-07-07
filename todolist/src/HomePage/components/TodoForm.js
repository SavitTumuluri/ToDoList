import React from 'react';

export const TodoForm = () => {
    return (
        <form>
            <input type="text" className='todo-input' placeholder='What is the task today?'></input>
            <button type='submit' className='todo-btn'></button>
        </form>
        
    )
}