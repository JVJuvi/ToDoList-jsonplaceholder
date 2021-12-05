import { useFormik } from 'formik'
import React from 'react'

const AddUser = ({addUsers}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
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
                {formik.errors.name && formik.touched.email ? (<div>{formik.errors.name}</div>) : null} 
                <input type="email" placeholder="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default AddUser
