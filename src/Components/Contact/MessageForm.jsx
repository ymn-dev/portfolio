import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

const MessageForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (ev) => {
    ev.preventDefault();
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
    setLoader(true);
    const response = await axios.post(`https://api.emailjs.com/api/v1.0/email/send`, data);
    setLoader(false);
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
    <div className="bg-white flex flex-col justify-center items-center py-10 font-semibold relative">
      {loader && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-60">
          <div className="w-32">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" class="hds-flight-icon--animation-loading" className="animate-spin">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g fill="#FFF" fill-rule="evenodd" clip-rule="evenodd">
                  {" "}
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"></path> <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
      )}
      <h2 className=" text-black text-2xl">OR leave me a message</h2>
      <br />
      <form onSubmit={handleSubmit} className="flex flex-col w-96 text-black text-lg">
        <input
          type="text"
          name="user_name"
          className="bg-transparent border-b-2 border-gray-300"
          placeholder="Name"
          value={form.name}
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
          value={form.email}
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
          value={form.message}
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
