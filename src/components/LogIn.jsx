import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const logIn = () => {
  const URL = "http://localhost:3000/login";
  const navigate = useNavigate();
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post(URL, values)
        .then(response => {
          console.log(response.data);
          // Check the response from the server
          if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            console.log(response.data.token);
            console.log("Login successful");
            navigate("/dashboard");
          } else if (response.status === 404){
            console.error("Login failed:", response.data);
            // Handle login failure, show error to the user
          }
        })
        .catch(error => {
          console.error("Login failed:", error);
          // Handle login failure, show error to the user
        });
    },
  });

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={loginFormik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input

            name="email"
            type="text"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.email}
            className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            placeholder="Email Address"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input

            name="password"
            type="password"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.password}
            className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Login
        </button>
      </form>
    </div>

  );
};

export default logIn;
