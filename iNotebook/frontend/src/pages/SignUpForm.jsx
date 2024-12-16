import React, { useContext, useState } from "react";
import GoogleSvg from "../svgs/GoogleSvg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const SignUpForm = () => {
  const BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const { login } = useContext(noteContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, acceptTerms } = formData;

    // Basic validations
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!acceptTerms) {
      toast.error("You must accept the Terms and Conditions.");
      return;
    }
    if (!name || !email || !password) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.errors?.[0]?.msg || "Failed to Sign Up. Please try again."
        );
      }

      // If signup succeeds
      toast.success("Signup successful!");
      console.log("Signup Response Data:", data);
      navigate("/");

      // Clear form after submission
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
      });
      login(data.token);
      navigate("/"); // Redirect to the homepage
    } catch (error) {
      console.error("Error during signup:", error.message);
      toast.error(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div
      className="relative mt-10 flex items-center justify-center bg-opacity-50 z-50"
      role="dialog"
      aria-labelledby="hs-modal-signup-label"
      tabIndex="-1"
    >
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800 w-full max-w-md p-6">
        <div className="text-center">
          <h3
            id="hs-modal-signup-label"
            className="text-2xl font-bold text-gray-800 dark:text-neutral-200"
          >
            Sign up
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
            >
              Log in here
            </a>
          </p>
        </div>

        <div className="mt-5">
          {/* Google Signup Placeholder */}
          <button
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50
           dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
            disabled
          >
            <GoogleSvg />
            Sign up with Google (Coming Soon)
          </button>

          <div
            className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t 
          before:border-gray-200 after:flex-1 after:border-t dark:before:border-neutral-800 dark:after:border-neutral-800"
          >
            Or
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm mb-2 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="py-3 px-4 block w-full border border-gray-200 outline-none rounded-lg text-sm 
                focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
                required
              />
            </div>

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
                className="py-3 px-4 block w-full border border-gray-200 outline-none rounded-lg text-sm 
                focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm mb-2 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="py-3 px-4 block w-full border border-gray-200 outline-none rounded-lg text-sm focus:border-blue-500
                 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm mb-2 dark:text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="py-3 px-4 block w-full border border-gray-200 outline-none rounded-lg text-sm
                 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mr-2 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-800"
              />
              <label htmlFor="acceptTerms" className="text-sm dark:text-white">
                I accept the{" "}
                <a
                  href="#"
                  className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
