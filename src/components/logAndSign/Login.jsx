import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "Yup";

const validateSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  password: Yup.string().required("password is required"),
});
function Login() {
  const [tab, setTab] = useState("signin");
  return (
    <>
      <div className="bg-white text-black flex">
        <div
          className={`signup w-1/2 border-1 ${
            tab === "signin" ? "bg-[#b9b8b8]" : "bg-white"
          } flex justify-center cursor-pointer`}
          onClick={() => setTab("signup")}
        >
          <div>
            <h2>Sign Up</h2>
            {/* {tab === "signup" && <p>Signup</p>} */}
          </div>
        </div>
        <div
          className={`signin w-1/2 border-1 ${
            tab === "signin" ? "bg-white" : "bg-[#b9b8b8]"
          } flex justify-center cursor-pointer`}
          onClick={() => setTab("signin")}
        >
          <div>
            <h2>Sign In</h2>
          </div>
        </div>
      </div>
      <div className="bg-white text-black flex justify-center pt-8">
        {tab === "signin" && (
          <div className="">
            <h2 className="font-bold">Please Login</h2>
            <div>
              {/* <div className="flex mt-4 gap-4">
                <label className="font-bold">Username :</label>
                <input />
              </div> */}
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                validationSchema={validateSchema}
                onSubmit={(action, values) => {
                  alert(values);
                }}
              >
                {({ errors, handleChange }) => (
                  <Form>
                    <div className="flex mt-4 gap-4">
                      <label className="font-bold">Username :</label>
                      <div>
                        <Field name="username" />
                        <ErrorMessage name="username" />
                      </div>
                    </div>
                    <div className="flex mt-4 gap-4">
                      <label className="font-bold">Password :</label>
                      <div>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button
                        type="submit"
                        className="text-white bg-blue-500 w-full mb-4"
                      >
                        Log in
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
