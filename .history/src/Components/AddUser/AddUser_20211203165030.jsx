import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { AddUserAction } from '../../redux/actions/UserAction/UserAction';


const AddUser = ({addUsers}) => {

    const dispatch = useDispatch();

    const [users, setUsers] = useState([]);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: (values) => {
            const {name, email} = values;
            console.log(name, email);
            // dispatch(AddUserAction(name, email));
            addUser(name, email)
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Không được để trống'),
            email: Yup.string().required('Không được để trống'),         
        })
    })

    const addUser = async (name, email) => {
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }, 
        })
        .then((res) => {
            if(res.status !== 201) {
                return
            } else {
                return res.json();
            }
        })
        .then((data) => {
            setUsers((users) => [...users, data])
        })
        .catch((error) => {
            console.log('error', error)
        })
    }

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
