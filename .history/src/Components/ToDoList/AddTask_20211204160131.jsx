import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { AddTaskAction } from '../../redux/actions/TodoListAction/TodoListAction';

const AddTask = () => {

    const {arrEdit} = useSelector(state => state.TodoListReducer);

    const [state, setState] = useState("");

    const dispatch = useDispatch();

    // const formik = useFormik({
    //     initialValues: {
    //         task: ''
    //     },
    //     onSubmit: (values) => {
    //         console.log('values',values);
    //         const {task} = values
    //         dispatch(AddTaskAction(task));
    //     },
    //     validationSchema: Yup.object({
    //         task: Yup.string().required('Task must be filled out')
    //     })
    // })

    useEffect((newProps) => {
        setState(newprop.arrEdit.title)
    },[newProps])

    const handleChange = (e) => {
        setState(e.target.value)
        e.target.value = '';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddTaskAction(e.target.value));
    }

    return (
        <>
            {/* <form onSubmit={formik.handleSubmit}>
                <input type="text" name="task" onChange={formik.handleChange} onBlur={formik.handleBlur} value={arrEdit.title}/>
                <button type="submit"><i class='bx bx-plus-medical'></i> Add task</button>
                <button><i class='bx bx-upload'></i> Update task</button>
            </form>
            <div className="text-danger"> 
                {formik.errors.task && formik.touched.task ? (<div>{formik.errors.task}</div>) : null}
            </div> */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={state} onChange={handleChange}/>
                <button type="submit"><i class='bx bx-plus-medical'></i> Add task</button>
                <button><i class='bx bx-upload'></i> Update task</button>
            </form>
        </>
    )
}

export default AddTask
