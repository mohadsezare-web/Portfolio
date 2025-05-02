"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form Submitted ...");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className=" w-[400px] h-[500px] sm: bg-[#121212]  lg:mt-[-230px] lg:ml-40 sm:mt-48 sm:ml-32">

      <div className="">
        <label className="block mb-1 font-medium text-amber-50">Your Name:</label>
        <input
          type="text" name="name"
          value={formData.name} onChange={handleChange}
          className="w-full p-2 border border-amber-50 rounded-md text-pink-100"required />
      </div>

      <div className=" mt-10">
        <label className="block mb-1 font-medium text-amber-50">Your Email :</label>
        <input
          type="email" name="email"
          value={formData.email} onChange={handleChange}
          className="w-full p-2 border border-amber-50 rounded-md text-pink-100"required/>
      </div>

      <div className=" mt-10">
        <label className="block mb-1 font-medium text-amber-50">Your Message :</label>
        <textarea
          name="message"rows="4"
          value={formData.message} onChange={handleChange}
          className="w-full p-2 border border-amber-50 rounded-md text-pink-100"required></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-300 via-yellow-50 to-amber-200 text-gray-600 font-semibold p-2 rounded-md transition mt-10"> Submit</button>
    </form>
  );
}
