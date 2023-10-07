import React from "react";

const Card = (props) => {
  return (
    <div className="flex lg:flex-row sm:flex-col items-center justify-center lg:gap-16 sm:gap-8 w-full">
      <div className="lg:w-3/5 sm:w-full mx-auto " id="leftContainer">
        <img src={props.Picture} alt="" className=" w-full h-auto shadow-stone-500 shadow-lg hover:scale-105 duration-150 " />
      </div>
      <div className="flex flex-col my-auto lg:w-2/5 sm:w-full  justify-between lg:gap-[3rem] sm:gap-[1.5rem] " id="rightContainer">
        <h3 className="text-black text-xl font-bold mr-auto">{props.Name}</h3>
        <p className="text-black">{props.Description}</p>
        <a href={props.Link} className="ml-auto">
          <button className="btn btn-neutral hover:scale-110 hover:opacity-90 hover:text-white duration-150 shadow-stone-300 shadow-md">Check it Out</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
