import React, { useState } from 'react';
import { Form, ErrorMessage, Formik, Field } from 'formik';
import * as Yup from 'yup';

interface User {
    Email: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Age: number;
    Address: string;
    City: string;
    State: string;
    Country: string;
    MotherName: string;
    FatherName: string;
    SiblingName: string;
}

const MultiPageForm: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const validationSchema = Yup.object().shape({
        Email: Yup.string().email("Enter a valid email").required("Email is required."),
        Password: Yup.string().required("Password is required"),
        FirstName: Yup.string().required("First Name is required."),
        LastName: Yup.string().required("Last Name is required."),
        Phone: Yup.string()
            .max(10, "Invalid Phone Number")
            .min(10, "Invalid Phone Number")
            .required("Phone number is required")
            .matches(/^\d+$/, "Invalid Phone Number"),
        Age: Yup.number().integer("Age must be an Number").min(18, "You must be at least 18 years old").required("Age is required"),
        Address: Yup.string().required("Address is required"),
        City: Yup.string().required("City is required"),
        State: Yup.string().required("State is required"),
        Country: Yup.string().required("Country is required"),
        MotherName: Yup.string().required("Mother's Name is required"),
        FatherName: Yup.string().required("Father's Name is required"),
        SiblingName: Yup.string().required("Sibling's Name is required"),
    });

    const handleSubmit = (values: User) => {
        alert("Data Submitted")
        console.log("Data: ", values);
    };

    return (
        <div className="container mt-5">
            <Formik
                initialValues={{
                    Email: "",
                    Password: "",
                    FirstName: "",
                    LastName: "",
                    Phone: "",
                    Age: 0,
                    Address: "",
                    City: "",
                    State: "",
                    Country: "",
                    MotherName: "",
                    FatherName: "",
                    SiblingName: ""
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className="p-4 border rounded shadow-sm">
                        {currentPage === 1 && (
                            <>
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label">Email:</label>
                                    <Field
                                        type="email"
                                        name="Email"
                                        className="form-control"
                                        placeholder="Enter your Email"
                                    />
                                    <ErrorMessage name="Email" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password" className="form-label">Password:</label>
                                    <Field
                                        type="password"
                                        name="Password"
                                        className="form-control"
                                        placeholder="**************"
                                    />
                                    <ErrorMessage name="Password" component="div" className="text-danger" />
                                </div>
                            </>
                        )}

                        {currentPage === 2 && (
                            <>
                                <b>
                                    <ErrorMessage name="Email" component="div" className="text-danger" />
                                    <ErrorMessage name="Password" component="div" className="text-danger" />
                                </b>
                                <br />
                                <div className="mb-3">
                                    <label htmlFor="FirstName" className="form-label">First Name:</label>
                                    <Field
                                        type="text"
                                        name="FirstName"
                                        className="form-control"
                                        placeholder="Enter your First Name"
                                    />
                                    <ErrorMessage name="FirstName" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="LastName" className="form-label">Last Name:</label>
                                    <Field
                                        type="text"
                                        name="LastName"
                                        className="form-control"
                                        placeholder="Enter your Last Name"
                                    />
                                    <ErrorMessage name="LastName" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Phone" className="form-label">Phone:</label>
                                    <Field
                                        type="text"
                                        maxLength="10"
                                        name="Phone"
                                        className="form-control"
                                        placeholder="Enter your Phone Number"
                                    />
                                    <ErrorMessage name="Phone" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Age" className="form-label">Phone:</label>
                                    <Field
                                        type="number"
                                        name="Age"
                                        className="form-control"
                                        placeholder="Enter your age"
                                    />
                                    <ErrorMessage name="Age" component="div" className="text-danger" />
                                </div>
                            </>
                        )}

                        {currentPage === 3 && (
                            <>
                                <b>

                                    <ErrorMessage name="Email" component="div" className="text-danger" />
                                    <ErrorMessage name="Password" component="div" className="text-danger" />
                                    <ErrorMessage name="FirstName" component="div" className="text-danger" />
                                    <ErrorMessage name="LastName" component="div" className="text-danger" />
                                    <ErrorMessage name="Phone" component="div" className="text-danger" />
                                    <ErrorMessage name="Age" component="div" className="text-danger" />
                                </b>
                                <br />
                                <div className="mb-3">
                                    <label htmlFor="Address" className="form-label">Address:</label>
                                    <Field
                                    type="text"
                                    name="Address"
                                    className="form-control"
                                    placeholder="Enter your Address"
                                    />
                                    <ErrorMessage name="Address" component="div" className="text-danger" />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="City" className="form-label">City:</label>
                                    <Field
                                    type="text"
                                    name="City"
                                    className="form-control"
                                    placeholder="Enter your City"
                                    />
                                    <ErrorMessage name="City" component="div" className="text-danger" />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="State" className="form-label">State:</label>
                                    <Field
                                    type="text"
                                    name="State"
                                    className="form-control"
                                    placeholder="Enter your State"
                                    />
                                    <ErrorMessage name="State" component="div" className="text-danger" />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="Country" className="form-label">Country:</label>
                                    <Field
                                    type="text"
                                    name="Country"
                                    className="form-control"
                                    placeholder="Enter your Country"
                                    />
                                    <ErrorMessage name="Country" component="div" className="text-danger" />
                                </div>
                            </>
                        )}

                        {currentPage === 4 && (
                            <>
                                <b>
                                    <ErrorMessage name="Email" component="div" className="text-danger" />
                                    <ErrorMessage name="Password" component="div" className="text-danger" />
                                    <ErrorMessage name="FirstName" component="div" className="text-danger" />
                                    <ErrorMessage name="LastName" component="div" className="text-danger" />
                                    <ErrorMessage name="Phone" component="div" className="text-danger" />
                                    <ErrorMessage name="Age" component="div" className="text-danger" />
                                    <ErrorMessage name="Address" component="div" className="text-danger" />
                                    <ErrorMessage name="City" component="div" className="text-danger" />
                                    <ErrorMessage name="State" component="div" className="text-danger" />
                                    <ErrorMessage name="Country" component="div" className="text-danger" />
                                </b>
                                <br />
                                <div className="mb-3">
                                    <label htmlFor="MotherName" className="form-label">Mother Name:</label>
                                    <Field
                                    type="text"
                                    name="MotherName"
                                    className="form-control"
                                    placeholder="Enter your Mother Name"
                                    />
                                    <ErrorMessage name="MotherName" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="FatherName" className="form-label">Father Name:</label>
                                    <Field
                                    type="text"
                                    name="FatherName"
                                    className="form-control"
                                    placeholder="Enter your Father Name"
                                    />
                                    <ErrorMessage name="FatherName" component="div" className="text-danger" />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="SiblingName" className="form-label">Sibling Name:</label>
                                    <Field
                                    type="text"
                                    name="SiblingName"
                                    className="form-control"
                                    placeholder="Enter your Sibling Name"
                                    />
                                    <ErrorMessage name="SiblingName" component="div" className="text-danger" />
                                </div>
                            </>
                        )}

                        {/* Buttons */}
                        <div className="d-flex justify-content-between">
                            {currentPage > 1 && (
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disabled={false}
                                >
                                    Back
                                </button>
                            )}
                            {currentPage < 4 && (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                >
                                    Next
                                </button>
                            )}
                            {currentPage === 4 && (
                                <button type="submit" className="btn btn-success">
                                    Submit
                                </button>
                            )}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MultiPageForm;
