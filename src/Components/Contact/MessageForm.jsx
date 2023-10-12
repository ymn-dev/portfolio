import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

const MessageForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // alert("Thank you for your interest but this one is still in development, please try other means to contact me");
    if (!form.name || !form.email || !form.message) return;
    const data = {
      service_id: "service_coq15t5",
      template_id: "template_quz0o55",
      user_id: "7Gd5lfircCBmJnGvQ",
      template_params: {
        from_name: form.name,
        from_email: form.email,
        to_name: "Auckawit Sornniyom",
        message: form.message,
      },
    };
    const response = await axios.post(`https://api.emailjs.com/api/v1.0/email/send`, data);
    if (response.status === 200) {
      alert("Email was successfully sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Some error has occured");
    }
  };
  return (
    <div className="bg-white flex flex-col justify-center items-center py-10 font-semibold">
      <h2 className=" text-black text-2xl">OR leave me a message</h2>
      <br />
      <form onSubmit={handleSubmit} className="flex flex-col w-96 text-black text-lg">
        <input
          type="text"
          name="user_name"
          className="bg-transparent border-b-2 border-gray-300"
          placeholder="Name"
          required
          onChange={(ev) => {
            setForm({ ...form, name: ev.target.value });
          }}
        />
        <br />
        <input
          type="email"
          name="user_email"
          className="bg-transparent border-b-2 border-gray-300"
          placeholder="Email"
          required
          onChange={(ev) => {
            setForm({ ...form, email: ev.target.value });
          }}
        />
        <br />
        {/* <input type="text" name="name" className="bg-transparent border-b-2 border-gray-300" placeholder="Name" required />
        <br /> */}
        {/* <input type="text" name="subject" className="bg-transparent border-b-2 border-gray-300" placeholder="Subject" required />
        <br /> */}
        <textarea
          name="message"
          className="bg-transparent border-2 border-gray-300 h-[20rem]"
          placeholder="Message"
          required
          onChange={(ev) => {
            setForm({ ...form, message: ev.target.value });
          }}></textarea>
        <br />
        <button
          type="submit"
          className="ml-auto btn btn-neutral hover:scale-110 hover:opacity-90 hover:text-white duration-150 shadow-stone-500 shadow-md disabled:text-gray-500 disabled:opacity-70"
          disabled={!form.name || !form.email || !form.message}>
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
