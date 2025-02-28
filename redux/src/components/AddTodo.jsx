import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../app/reducers/todoslice';


const AddTodo = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {

            dispatch(addTodo({text:inputValue}))

            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;