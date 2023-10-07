import React from "react";
import SkillItem from "./SkillItem.jsx";

const Skill = (props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-10">
      <h1 className="text-black text-4xl font-bold">SKILLS</h1>
      <div className="flex p-8 flex-wrap justify-center gap-4 my-auto">
        <SkillItem Path="mongodb.svg" Link="https://www.mongodb.com/" Alt="MongoDB" />
        <SkillItem Path="express-light.svg" Link="https://expressjs.com/" Alt="ExpressJS" />
        <SkillItem Path="react.svg" Link="https://react.dev" Alt="react" />
        <SkillItem Path="node-js.svg" Link="https://nodejs.org/en" Alt="NodeJS" />
        <SkillItem Path="html5.svg" Link="#" Alt="HTML5" />
        <SkillItem Path="css3.svg" Link="#" Alt="CSS3" />
        <SkillItem Path="javascript.svg" Link="#" Alt="Javascript" />
        <SkillItem Path="tailwind.svg" Link="https://tailwindcss.com/" Alt="Tailwind CSS" />
        <SkillItem Path="sqlite.svg" Link="https://www.sqlite.org/index.html" Alt="SQLite" />
        {/* <SkillItem Path=".svg" Link="" Alt="" />
        <SkillItem Path=".svg" Link="" Alt="" /> */}
      </div>
    </div>
  );
};

export default Skill;
