import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-600 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#A3C0C4]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>I am Samar, Welcome to my portfolio.</p>
          </div>
          <div>
            <p>
              I am a Student at University of Central Florida, pursuing
              bachelor’s degree in computer science. Has experience in teaching
              and customer service. Proven ability to help customers with their
              needs through simplifying problems and solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
