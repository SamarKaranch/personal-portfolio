import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Firebase from "../assets/firebase.png";
import Github from "../assets/github.png";
import ReactImg from "../assets/react.png";
import JavaScript from "../assets/javascript.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-slate-600 text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#A3C0C4]">
            Skills
          </p>
          <p className="py-4">Technologies that I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="Html" className="w-20 mx-auto py-2" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="CSS" className="w-20 mx-auto py-2" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Firebase} alt="Firebase" className="w-20 mx-auto py-2" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Github} alt="Github" className="w-20 mx-auto py-2" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactImg} alt="React" className="w-20 mx-auto py-2" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JavaScript} alt="JavaScript" className="w-20 mx-auto py-2" />
            <p className="my-4">JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
