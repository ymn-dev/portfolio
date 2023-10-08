import React from "react";

const About = () => {
  return (
    <div className="bg-black  flex flex-col gap-4 justify-between items-center text-white p-10 xl:px-48">
      <h2 className="text-4xl font-bold mb-4 ">ABOUT ME</h2>
      <p className="text-2xl font-semibold">
        <span>
          I graduated from Generation Thailand Junior Software Developer#5 Bootcamp and earned a Bachelor's degree in Computer Science from <a href="#">Silpakorn University</a>. These educations provided me with a robust foundation to write
          functional code for both frontend and backend.
        </span>
        <br className="" />
        <span>I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experiences then don't hesitate to contact me.</span>
      </p>
    </div>
  );
};

export default About;
