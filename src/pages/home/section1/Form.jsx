import React, { useState } from "react";
import { Checkbox, Label } from "flowbite-react";
const RegistrationForm = () => {
  // Define the initial state for the form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your validation logic here before submitting the data
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      <h2 className=" text-[45px] font-normal font-['BR Omega'] xsm:text-purple-700 sm:text-black">
        Find your mate with us
      </h2>

      <div
        className="h-[550px] flex flex-col justify-center items-center bg-white rounded bg-opacity-[0.2]
        sm:bg-opacity-[0.2] md:bg-opacity-[0.6] lg:bg-opacity-[1]"
      >
        <h2 className="px-2 text-center text-slate-800 text-xl mb-3 font-normal font-['BR Omega']">
          Create your profile for your perfect match!
        </h2>
        <form onSubmit={handleSubmit} className="px-3">
          <div className="sm:col-span-3 mt-2">
            <label
              htmlFor="Profile"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Create profile for
            </label>
            <div>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name:
              </label>
              <div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name:
              </label>
              <div>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4 mt-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <div className="">
              <label
                htmlFor="mobileNumber"
                className=" text-sm font-medium leading-6 text-gray-900"
              >
                Country Code
              </label>
              <div>
                <select
                  id="mobileNumber"
                  name="mobileNumber"
                  autoComplete="mobileNumber"
                  className="w-[180px] rounded-md border-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>(+92)Pakistan</option>
                  <option>(+91)India</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="mobileNumber "
                className=" text-sm font-medium leading-6 text-gray-900"
              >
                Mobile Number:
              </label>
              <div className="border-none">
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                  className="w-[180px] rounded-md border-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="w-[100%] flex flex-row justify-between mt-2">
            <div className="">
              <label
                htmlFor="gender"
                className=" text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div>
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender-name"
                  className="w-[180px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </div>
            </div>
            <div className="">
              <label
                htmlFor="country"
                className="text-sm font-medium leading-6 text-gray-900 "
              >
                Country
              </label>
              <div>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className=" w-[180px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 "
                >
                  <option>Pakistan</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3 mt-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password:
              </label>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password:
              </label>
              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="flex max-w-md flex-col gap-4" id="checkbox">
            <div className="flex items-center gap-2 pt-2">
              <Checkbox defaultChecked id="accept" />
              <Label className="flex" htmlFor="agree">
                <p>I agree with the terms and conditions</p>
              </Label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 primary-btn text-white font-bold py-2 px-4 border border-none ease-in-out duration-500 rounded"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
