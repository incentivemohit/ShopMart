"use client";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { loginValidation } from "../../utils/schemas/loginValidation";

const initialValues = {
  email: "",
  password: "",
};
export default function page() {
  const [error, setError] = useState(false);
  const [state, setState] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const router = useRouter();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginValidation,
      onSubmit: async (values) => {
        try {
          setState(true);

          const data = {
            email: values.email,
            password: values.password,
          };

          await axios
            .post(`http://localhost:3000/api/auth/login`, data)
            .then((res) => {
              if (res.data.status) {
                if (res.data.role) {
                  setTimeout(() => {
                    localStorage.setItem("user", JSON.stringify(res.data));

                    router.replace("/admin/dashboard");
                  }, 1500);
                } else {
                  setTimeout(() => {
                    localStorage.setItem("user", JSON.stringify(res.data));

                    router.replace("/");
                  }, 1500);
                }
              } else {
                setError(true);
                setTimeout(() => {
                  setError(false);
                }, 1500);
              }
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
        <Alert severity="error">
          <p className=" m-auto">User doesn't Exist</p>
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

          <button className="bg-blue-600 flex items-center justify-center py-2  rounded-xl hover:bg-orange-700">
            {state === true ? (
              <CircularProgress />
            ) : (
              <p className="text-xl ">Login</p>
            )}
          </button>
          <p className="text-center">
            <Link href="/auth/signup">Don't have an Account?</Link>
          </p>
        </form>
      </div>
    </>
  );
}
