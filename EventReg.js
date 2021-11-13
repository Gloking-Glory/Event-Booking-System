import { Field, Form, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export default function EventReg() {
    let formField = ["Username", "Email", "Password"];
    let info = {Username: "", Email: "", Password: ""};
    let [emailExist, setEmailExist] = useState("");
    
    const formValidation = Yup.object().shape ({
        Username: Yup.string().min(3, "Please type a minimum of 3 characters").required("Please fill this form"),
        Email: Yup.string().email("Please enter a valid Email Address").required("Please fill this form"),
        Password: Yup.string().min(5, "Please enter atleast 5 characters for password").required("Please fill this form")
    })

    const submitForm =values=> {
        let allInfo = JSON.parse(localStorage.getItem("allInfo"));
        if (allInfo) {
            for (let i = 0; i < allInfo.length; i++) {
                if (allInfo[i].Email === values.Email) {
                    setEmailExist("Email Already Exist");
                    return;
                } else {
                    setEmailExist("");
                };
            };
            allInfo = [...allInfo, values];
            localStorage.setItem("allInfo", JSON.stringify(allInfo))
        } else {
            localStorage.setItem("allInfo", JSON.stringify([values]));
        }
    }
    return (
        <center>
            <div id="regForm" className="mt-5 rounded">
                <Formik initialValues={info} onSubmit={submitForm} validationSchema={formValidation}>
                    {()=> (
                        <Form>
                            {formField.map(val => (
                                <div className="mt-3" key={val}>
                                    <h5 className="mt-3">{val}:</h5>
                                    <Field className="mt-3 form-control regInput" placeholder={val} name={val} />
                                    <ErrorMessage className="text-danger" name={val} />
                                </div>
                            ))}
                            <h6 className="text-danger">{emailExist}</h6>
                            <Field type="submit" value="Submit" className="mt-3 btn bg-danger text-light" />
                        </Form>
                    )}
                </Formik>
            </div>
        </center>
    )
}
