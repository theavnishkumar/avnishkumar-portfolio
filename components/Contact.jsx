"use client";
import Image from "next/image";
import "../app/globals.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // const data = await response.json();
      // console.log(data);
      setSuccessMessage('Message sent successfully');
      setErrorMessage('');
      // Optionally, clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // Set timeout to clear success message after 5 seconds
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setErrorMessage('Something went wrong. Please try again later.');
      setSuccessMessage('');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000); // Set timeout to clear error message after 5 seconds
    }
  };

  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4"
      id="contact"
    >
      <section className="flex items-center gap-4 pt-2">
        <hr className="h-1 w-12 bg-gray-600 rounded-full" />
        <p className="text-2xl font-medium">&lt;Contact &nbsp;/&gt;</p>
      </section>
      {/* Contact Section */}
      <section className="flex justify-center items-center gap-12">
        <section className="p-1 lg:w-1/3 max-w-fit flex items-center max-lg:hidden">
          <Image
            className=""
            src="/contact/email.svg"
            alt="email"
            priority={false}
            height={300}
            width={650}
            style={{
              width: "650px",
              height: "auto",
            }}
          />
        </section>
        <section className="lg:w-2/4 md:w-3/4 sm:w-3/4 w-full p-6 rounded-xl card flex flex-col justify-center items-center max-sm:m-4 max-md:mt-8">
          <form className=" w-full p-1 lg:p-6" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 outline-none"
                placeholder="Enter your name here"
                required
                aria-label="Name Input Field"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 outline-none"
                placeholder="Enter your email here"
                required
                aria-label="Email Input Field"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                type="text"
                rows="5"
                id="message"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 outline-none resize-none"
                placeholder="Enter your message here"
                required
                aria-label="Message Input Field"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              aria-label="Submit Button"
            >
              Submit
            </button>
          </form>
          {successMessage && (
            <span className="font-semibold text-green-500 rounded-xl p-3 m-4">
              {successMessage}
            </span>
          )}
          {errorMessage && (
            <span className="font-semibold text-red-500 rounded-xl p-3 m-4">
              {errorMessage}
            </span>
          )}
        </section>
      </section>
    </main>
  );
};
export default Contact;
