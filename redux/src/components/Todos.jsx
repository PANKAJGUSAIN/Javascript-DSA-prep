import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../app/reducers/todoslice';

const Todos = () => {
    const todolistitems = useSelector(state => state.todos)
    const dispatch = useDispatch();

    console.log(todolistitems)



    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todolistitems.map((item) => (
                    <div style={{display : 'flex' , width:"100%"}}>
                    <li key={item.id}>{item.text}</li>
                    <button onClick={()=> dispatch(removeTodo({id:item.id}))}> remove </button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Todos;