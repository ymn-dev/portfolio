import React from "react";

const SkillItem = (props) => {
  return (
    <a href={props.Link || "#"} className="">
      <img src={props.Path} alt={props.Alt || ""} className="w-14 h-14 hover:scale-150 duration-200" />
    </a>
  );
};

export default SkillItem;
