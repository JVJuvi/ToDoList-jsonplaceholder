import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const AddTask = () => {

    const formik = useFormik({
        initialValues: {
            task: ''
        },
        onSubmit: (values) => {
            console.log('values',values)
        },
        validationSchema: Yup.object({
            task: Yup.string().required('Task must be filled out')
        })
    })

    return (
        <form>
            <input type="text" name="task" />
            <button><i class='bx bx-plus-medical'></i> Add task</button>
            <button><i class='bx bx-upload'></i> Update task</button>
        </form>
    )
}

export default AddTask
