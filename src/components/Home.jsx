import React from "react";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { LuNetwork } from "react-icons/lu";

function Home() {
  return (
    <div>
      <div className="intro">
        <h1>React Web Developer</h1>
        <p className="w-3/4 text-balance">
          React is a JavaScript library for building user interfaces.React has
          been designed from the start for gradual adoption, and you can use as
          little or as much React as you need. Whether you want to get a taste
          of React, add some interactivity to a simple HTML page, or start a
          complex React-powered app, the links in this section will help you get
          started.
        </p>
        <a href="https://react.dev/">
        <button className="text-white bg-blue-500 mt-4">Learn More</button></a>
      </div>
      <div className="achievements">
        <div className="work">
          <i className=""><GrProjects /></i>
          <p className="work-heading">Projects</p>
          <p className="work-text">
            I have worked on many projects and I am very proud of them. I am a
            very good developer and I am always looking for new projects.
          </p>
        </div>
        <div className="work">
          <i className=""><GiSkills /></i>
          <p className="work-heading">Skills</p>
          <p className="work-text">
            I have a lot of skills and I am very good at them. I am very good at
            programming and I am always looking for new skills.
          </p>
        </div>
        <div className="work">
          <i className=""><LuNetwork /></i>
          <p className="work-heading">Network</p>
          <p className="work-text">
            I have a lot of network skills and I am very good at them. I am very
            good at networking and I am always looking for new network skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
