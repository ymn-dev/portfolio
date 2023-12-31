import React from "react";
import Card from "./Card";

const Project = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-10">
      <h1 className="text-black font-bold text-4xl mb-8">PROJECTS</h1>
      <div className="flex flex-col items-center justify-center gap-10">
        <Card
          Picture="benom.png"
          Name="Benom Health Web Application"
          Link="https://benom-health-webapp-frontend.vercel.app/"
          Description="Exercise tracking web application built with MERN
          stack tailored for office workers to log their
          healthy activities, deployed on Vercel and Render.
          In this web application you can add your exercise logs and let it calculate the calories you burned then make a graph from your recent exercises to track progress.
          Required the user to login to keep the records or you can try calculate calories as a guest! (Render may take up to 1 minute to go online after 15 minutes of inactivity) 
          "
          Tools={["mongodb.svg", "express-light.svg", "react.svg", "node-js.svg", "tailwind.svg"]}
        />
        <Card
          Picture="findyourhat.png"
          Name="Find Your Hat"
          Link="https://replit.com/@ymn-dev/05-find-your-hat"
          Description="A console game! now with my own spin, this game will ask you for the field size you want to play and the difficulty, then you can enjoy the gameplay loop where you can keep tracking your win record in the map size in that difficulty"
          Tools={["node-js.svg"]}
        />
        <Card
          Picture="colmaracademy.png"
          Name="Colmar Academy"
          Link="https://colmar-academy-assessment.vercel.app/"
          Description="Responsive design practice with an academy's front page! Another project from Codeacademy that's done with only vanilla HTML/CSS. Designed according to specification and adding hover effect in many places to make it looks more interactive"
          Tools={["html5.svg", "css3.svg"]}
        />
        <Card
          Picture="theteacozy.png"
          Name="The Tea Cozy"
          Link="https://ymn-tea-cozy.vercel.app/"
          Description="One of my earliest off platform project from Codeacademy writing with vanilla HTML/CSS, a good looking coffee shop webpage with no responsive design, done according to specifications."
          Tools={["html5.svg", "css3.svg"]}
        />
        <Card
          Picture="adminpanel.png"
          Name="Admin Monitor Panel"
          Link="https://career-changer-react-assessment-05.vercel.app/"
          Description="An easy to understand React webpage made to be different for 3 types of viewers: a guest, an user and an admin, it gives an idea of how to custom a page for each user's rights to see and do something, all managed with React's useState"
          Tools={["react.svg", "tailwind.svg"]}
        />
        {/* <Card Picture="" Name="" Link="" Description="" /> */}
      </div>
    </div>
  );
};

export default Project;
