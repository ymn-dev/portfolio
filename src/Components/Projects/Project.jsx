import React from "react";
import Card from "./Card";
const Project = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-10 px-16 ">
      <h1 className="text-black font-bold text-4xl">PROJECTS</h1>
      <div className="flex flex-col items-center justify-center p-10 gap-10">
        <Card
          Picture="findyourhat.png"
          Name="Find Your Hat"
          Link="https://replit.com/@ymn-dev/05-find-your-hat"
          Description="A console game! now with my own spin, this game will ask you for the field size you want to play and the difficulty, then you can enjoy the gameplay loop where you can keep tracking your win record in the map size in that difficulty"
        />
        <Card
          Picture="colmaracademy.png"
          Name="Colmar Academy"
          Link="https://colmar-academy-assessment.vercel.app/"
          Description="Responsive design practice with an academy's front page! Another project from Codeacademy that's done with only vanilla HTML/CSS. Designed according to specification and adding hover effect in many places to make it looks more interactive"
        />
        <Card
          Picture="theteacozy.png"
          Name="The Tea Cozy"
          Link="https://ymn-tea-cozy.vercel.app/"
          Description="One of my earliest off platform project from Codeacademy writing with vanilla HTML/CSS, a good looking coffee shop webpage with no responsive design, done according to specifications."
        />
        <Card
          Picture="adminpanel.png"
          Name="Admin Monitor Panel"
          Link="https://career-changer-react-assessment-05.vercel.app/"
          Description="An easy to understand React webpage made to be different for 3 types of viewers: a guest, an user and an admin, it gives an idea of how to custom a page for each user's rights to see and do something, all managed with React's useState"
        />
        {/* <Card Picture="" Name="" Link="" Description="" /> */}
      </div>
    </div>
  );
};

export default Project;
