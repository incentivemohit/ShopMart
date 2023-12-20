"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerValidation } from "../../utils/schemas/registerValidation";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
  role: false,
};
export default function page() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [state, setState] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const router = useRouter();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerValidation,
      onSubmit: async (values) => {
        try {
          setState(true);

          const data = {
            name: values.name,
            email: values.email,
            password: values.password,
            role: values.role,
          };

          await axios
            .post(`http://localhost:3000/api/auth/signup`, data)
            .then((res) => {
              setSuccess(true);
              localStorage.setItem("user", JSON.stringify(res.data));
              setTimeout(() => {
                setSuccess(false);

                router.replace("/");
              }, 2000);
            })
            .catch((err) => {
              setError(true);
              setState(false);
              setTimeout(() => {
                setError(false);
              }, 1500);
            });
        } catch (error: any) {
          console.log(error.message);
        }
      },
    });

  return (
    <>
      {error === true ? (
        <Alert severity="warning">
          <p className="w-full text-center">User Already Registered</p>
        </Alert>
      ) : (
        ""
      )}
      {success === true ? (
        <Alert severity="success">
          <p className="w-full text-center">User Registered Successfully</p>
        </Alert>
      ) : (
        ""
      )}

      <div className="h-screen justify-center items-center flex lg:h-screen">
        <form
          className="form-group border flex flex-col gap-2 p-3 w-3/4 xl:w-1/3"
          onSubmit={handleSubmit}
        >
          <h3 className="text-center py-2 font-bold text-2xl">ShopMart</h3>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control py-3 pl-2 border  "
            placeholder="Enter name..."
          />
          {errors.name && touched.name ? (
            <p className="text-black text-[14px]">{errors.name}</p>
          ) : null}
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control py-3 pl-2 border "
            placeholder="Enter Email..."
          />
          {errors.email && touched.email ? (
            <p className="text-black text-[14px]">{errors.email}</p>
          ) : null}

          <div className="py-3 pl-2 border flex items-center pr-4">
            <input
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              className="form-control w-full outline-none"
              placeholder="Enter Password..."
            />
            {showPassword ? (
              <span
                onClick={handleClickShowPassword}
                className="cursor-pointer"
              >
                <Visibility />
              </span>
            ) : (
              <span
                className="cursor-pointer"
                onClick={handleClickShowPassword}
              >
                <VisibilityOff />
              </span>
            )}
          </div>

          {errors.password && touched.password ? (
            <p className="text-black text-[14px]">{errors.password}</p>
          ) : null}
          <div className="py-3 pl-2 border flex items-center pr-4">
            <input
              type={showPassword ? "text" : "password"}
              value={values.cpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              name="cpassword"
              className="form-control w-full outline-none"
              placeholder="Enter Password..."
            />
            {showPassword ? (
              <span
                onClick={handleClickShowPassword}
                className="cursor-pointer"
              >
                <Visibility />
              </span>
            ) : (
              <span
                className="cursor-pointer"
                onClick={handleClickShowPassword}
              >
                <VisibilityOff />
              </span>
            )}
          </div>

          {errors.cpassword && touched.cpassword ? (
            <p className="text-black text-[14px]">{errors.cpassword}</p>
          ) : null}

          <button className="bg-blue-600 flex items-center justify-center py-2 rounded-xl hover:bg-orange-700">
            {state === true ? (
              <CircularProgress className="text-white" />
            ) : (
              <p className="text-xl ">Register</p>
            )}
          </button>
          <p className="text-center">
            <Link href="/auth/login">Already have an Account?</Link>
          </p>
        </form>
      </div>
    </>
  );
}
