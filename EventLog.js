import { ErrorMessage, Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function EventLog({setLoginUsername}) {
    let info = ["Email", "Password"];
    let logInfo = {Email: "", Password: ""};
    let [wrongPass, setWrongPass] = useState("");
    let [username, setUsername] = useState("")
    
    const submitLogin =values=> {
        setTimeout (function () {
            let allInfo = JSON.parse(localStorage.getItem("allInfo"));
            if (allInfo) {
                for (let i = 0; i < allInfo.length; i++) {
                    if (allInfo[i].Email === values.Email) {
                        if (allInfo[i].Password !== values.Password) {
                            setWrongPass("Incorrect Password");
                            return;
                        } else {
                            setWrongPass("");
                            setUsername(allInfo[i].Username);
                        };
                    } 
                };
            };
        }, 3000)
        
    }
    const validateLogin= Yup.object().shape({
        Email: Yup.string().email("Please enter a valid Email Address").required("Please fill this form"),
        Password: Yup.string().min(5, "Please enter at least 5 characters").required("Please fill this form")
    }) 
    return (
        <center>
            <div id="loginForm" className="mt-5 rounded">
                <Formik initialValues={logInfo} onSubmit={submitLogin} validationSchema={validateLogin}>
                    {()=> (
                        <Form>
                            {info.map(val => (
                                <div>
                                    <h6 className="mt-4 loginLabel">{val}:</h6>
                                    <Field className="form-control logInput" placeholder={val} name={val} />
                                    <ErrorMessage name={val} />
                                </div>
                            ))}
                            <p>{wrongPass}</p>
                            <p>{username}</p>
                            <Field type="submit" value="Submit" className="mt-4 btn bg-secondary text-light" />
                        </Form>
                    )}
                </Formik>
            </div>
        </center>
    )
}
