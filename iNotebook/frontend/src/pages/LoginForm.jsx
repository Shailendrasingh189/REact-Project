import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleSvg from "../svgs/GoogleSvg";
import { toast } from "react-toastify";
import noteContext from "../context/notes/noteContext";

const LoginForm = () => {
  const BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(noteContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast.info("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          data.errors?.[0]?.msg || "Invalid login credentials.";
        throw new Error(errorMessage);
      }

      // Store token and navigate
      
      login(data.authToken);
      toast.success("Login successful!");
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error during login:", error.message);
      toast.error(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <div
      className="relative mt-10 mx-2 flex items-center justify-center bg-opacity-50 z-[80]"
      role="dialog"
      aria-labelledby="login-modal-label"
    >
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800 p-6">
        <div className="text-center">
          <h3
            id="login-modal-label"
            className="text-2xl font-bold text-gray-800 dark:text-neutral-200"
          >
            Log in
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
            >
              Sign up here
            </Link>
          </p>
        </div>

        <div className="mt-5">
          {/* Google Login Button Placeholder */}
          <button
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm
             hover:bg-gray-50 focus:outline-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
            disabled
          >
            <GoogleSvg />
            Log in with Google (Coming Soon)
          </button>

          <div
            className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 after:flex-1 after:border-t
           dark:before:border-neutral-800 dark:after:border-neutral-800"
          >
            Or
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-2 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="py-3 px-4 block w-full border border-gray-100 rounded-lg outline-none text-sm 
                focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:underline font-medium dark:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="py-3 px-4 block w-full border border-gray-100 outline-none rounded-lg text-sm 
                 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
