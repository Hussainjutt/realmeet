import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // Clear errors on input change
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    // Basic email format validation using regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Check required fields
    if (!formValues.name) {
      newErrors = { ...newErrors, name: "Name is required" };
    }
    if (!formValues.email) {
      newErrors = { ...newErrors, email: "Email is required" };
    } else if (!validateEmail(formValues.email)) {
      newErrors = { ...newErrors, email: "Invalid email format" };
    }
    if (!formValues.subject) {
      newErrors = { ...newErrors, subject: "Subject is required" };
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed with form submission (you can add your logic here)
      console.log("Form submitted:", formValues);
    }
  };

  // Disable button if there are errors in the form
  const isFormInvalid = Object.keys(errors).length > 0;

  return (
    <>
      <div className="bg-[#EEFEFF] rounded-[30px] w-[550px] flex flex-col justify-evenly items-center">
        <div>
          <h2 className="text-black text-3xl font-normal font-['BR Omega']">
            Always we did love to hear from you
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="py-3">
            <div>
              <label htmlFor="name">Your Name</label>
            </div>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="XYZ"
              className="bg-white rounded border border-neutral-400 w-full"
              required
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>
          <div className="py-3">
            <div>
              <label htmlFor="email">Email Address</label>
            </div>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="xyz@gmail.com"
              className="bg-white rounded border border-neutral-400 w-full"
              required
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="py-3">
            <div>
              <label htmlFor="subject">Subject</label>
            </div>
            <input
              type="text"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
              className="text-slate-800 text-sm font-normal font-['BR Omega'] bg-white rounded border border-neutral-400 w-full"
              placeholder="Write your subject here"
              required
            />
            {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
          </div>
          <div className="py-3">
            <div>
              <label htmlFor="description">Description</label>
            </div>
            <textarea
              rows={10}
              cols={50}
              name="description"
              value={formValues.description}
              onChange={handleChange}
              className="text-slate-800 text-sm font-normal font-['BR Omega'] bg-white rounded border border-neutral-400 w-full"
              placeholder="Write your description here"
            />
          </div>
          <div className="bg-cstm_primary_pink-100 rounded-[5px] text-center py-[5px]">
            <button
              type="submit"
              className="text-white text-lg font-normal font-['BR Omega'] tracking-tight"
              // disabled={isFormInvalid}
            >
              Send Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
