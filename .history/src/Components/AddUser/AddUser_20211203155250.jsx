import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { AddUserAction } from '../../redux/actions/UserAction/UserAction';


const AddUser = ({addUsers}) => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values.name);
            // dispatch(AddUserAction());
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Không được để trống'),
            email: Yup.string().required('Không được để trống'),         
        })
    })

    return (
        <div className="text-center mb-5">
            <form onSubmit={formik.handleSubmit}>
                <h3>Add</h3>
                <input type="text" placeholder="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.name && formik.touched.name ? (<div>{formik.errors.name}</div>) : null} 
                <input type="email" placeholder="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email ? (<div>{formik.errors.email}</div>) : null}
                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default AddUser
