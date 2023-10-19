import React from "react";
import SkillItem from "../Skill/SkillItem";
SkillItem;
const Card = (props) => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-16 gap-8  w-full 2xl:px-48 px-24 even:bg-zinc-300 even:bg-opacity-80 hover:scale-110 duration-300">
      <div className="lg:w-3/5 w-full mx-auto p-5" id="leftContainer">
        <img src={props.Picture} alt="" className=" w-full h-auto shadow-stone-500 shadow-lg hover:scale-105 duration-150 rounded-md" />
      </div>
      <div className="flex flex-col my-auto lg:w-2/5 sm:w-full p-5 justify-between lg:gap-[2rem] gap-[1.5rem] font-semibold" id="rightContainer">
        <h3 className="text-black text-3xl font-bold mr-auto">{props.Name}</h3>
        <p className="text-black text-2xl">{props.Description}</p>
        <div className="">
          <h3 className="text-black text-2xl font-bold mr-auto">Tools Used</h3>
          <div className="flex pt-5 gap-4">
            {props.Tools &&
              props.Tools.map((tool) => {
                return <SkillItem Path={tool} />;
              })}
          </div>
        </div>
        <div className="flex justify-between">
          {props.Learn && (
            <a href={props.Learn} className="" target="_blank">
              <button className="btn btn-accent hover:scale-110 hover:opacity-90 hover:text-white duration-150 shadow-stone-300 shadow-md btn-lg">Learn More</button>
            </a>
          )}
          <a href={props.Link} className={!props.Learn && "ml-auto"} target="_blank">
            <button className="btn btn-neutral hover:scale-110 hover:opacity-90 hover:text-white duration-150 shadow-stone-300 shadow-md btn-lg">Check it Out</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
