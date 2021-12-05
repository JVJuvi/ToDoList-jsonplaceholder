import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { AddTaskAction } from '../../redux/actions/TodoListAction/TodoListAction';

const AddTask = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            task: ''
        },
        onSubmit: (values) => {
            console.log('values',values)
            dispatch(AddTaskAction(values));
        },
        validationSchema: Yup.object({
            task: Yup.string().required('Task must be filled out')
        })
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" name="task" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <button type="submit"><i class='bx bx-plus-medical'></i> Add task</button>
                <button><i class='bx bx-upload'></i> Update task</button>
            </form>
            <div className="text-danger"> 
                {formik.errors.task && formik.touched.task ? (<div>{formik.errors.task}</div>) : null}
            </div>
        </>
    )
}

export default AddTask
