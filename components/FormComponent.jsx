"use client";
import { useState } from "react";
import { FormField } from "./Form-Input";

const FormComponent = () => {
  const [action, setAction] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  // Updates the form data when an input changes

  const handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  return (
    <>
      <button
        onClick={() => setAction(action == "login" ? "register" : "login")}
        className="absolute top-16 right-8 rounded-xl bg-yellow-300 px-3 py-2 font-semibold text-blue-600 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400"
      >
        {action === "login" ? "Sign Up" : "Sign In"}
      </button>
      <h2 className="text-5xl font-extrabold text-yellow-300">
        {" "}
        Welcome to Kudos!
      </h2>

      <p className="font-semibold text-slate-300">
        {action === "login"
          ? "Log In To Give Some Praise!"
          : "Sign Up To Get Started!"}
      </p>

      <form method="POST" className="w-96 rounded-2xl bg-gray-200 p-6">
        <FormField
          htmlFor="email"
          label="Email"
          value={formData.email}
          onChange={(e) => handleInputChange(e, "email")}
        />

        <FormField
          htmlFor="password"
          type="password"
          label="Password"
          value={formData.password}
          onChange={(e) => handleInputChange(e, "password")}
        />
        {action === "register" && (
          <>
            <FormField
              htmlFor="firstName"
              label="First Name"
              onChange={(e) => handleInputChange(e, "firstName")}
              value={formData.firstName}
            />

            <FormField
              htmlFor="lastName"
              label="Last Name"
              onChange={(e) => handleInputChange(e, "lastName")}
              value={formData.lastName}
            />
          </>
        )}

        <div className="w-full text-center">
          <button
            type="submit"
            name="_action"
            value={action}
            className="mt-2 rounded-xl bg-yellow-300 px-3 py-2 font-semibold text-blue-600 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400"
          >
            {action === "login" ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormComponent;
