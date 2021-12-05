import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTaskAction, UpdateTaskAction } from '../../redux/actions/TodoListAction/TodoListAction';

const AddTask = () => {

    const {arrEdit} = useSelector(state => state.TodoListReducer);
    console.log('arrEdit', arrEdit)

    const [title, settitle] = useState("");
    const [id, setId] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        settitle(arrEdit.title);
        setId(arrEdit.id)
    })

    // useEffect(() => {
    //     settitle(arrEdit.title);
    //     setId(arrEdit.id)
    // },[title])

    const handleChange = (e) => {
        settitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('value',e.target.task.value)
        dispatch(AddTaskAction(e.target.task.value));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={title} onChange={handleChange}/>
            <button type="submit"><i class='bx bx-plus-medical'></i> Add task</button>
            <button type="button" onClick={()=>{
                dispatch(UpdateTaskAction(id, title))
            }}><i class='bx bx-upload'></i> Update task</button>
        </form>
    )
}

export default AddTask
