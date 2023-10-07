import React, { useState } from "react";

const MessageForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <div className="bg-white flex flex-col justify-center items-center py-10 font-semibold">
      <h2 className=" text-black text-2xl">OR leave me a message</h2>
      <br />
      <form action="" className="flex flex-col w-96 text-black text-lg">
        <input
          type="text"
          name="name"
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
          name="email"
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
