import React from "react";

const EmailForm = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center py-10">
      <h2 className=" text-black ">OR send me an email</h2>
      <br />
      <form action="" className="flex flex-col w-96">
        <input type="email" name="email" className="bg-transparent border-b-2 border-gray-300" placeholder="Email" required />
        <br />
        {/* <input type="text" name="name" className="bg-transparent border-b-2 border-gray-300" placeholder="Name" required />
        <br /> */}
        <input type="text" name="subject" className="bg-transparent border-b-2 border-gray-300" placeholder="Subject" required />
        <br />
        <textarea name="message" className="bg-transparent border-2 border-gray-300 h-[20rem]" placeholder="Message" required></textarea>
        <br />
        <button type="submit" className=" text-right btn ml-auto">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
