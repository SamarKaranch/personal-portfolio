import React from "react";
import FocusFlow from '../assets/FocusFlow.png'
import Reminders from '../assets/Reminders.png'

const Projects = () => {
  return (
    <div name="projects" className=" w-full md:h-screen text-gray-300 bg-slate-600">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#A3C0C4]">Projects</p>
            <p className="py-6">Here are my projects</p>
        </div>
        {/*Grid*/}
        <div className="grid sm:cols-2 md:grid-cols-2 gap-4 rounded-md">
            {/*Grid Item*/}
            <div style={{backgroundImage: `url(${FocusFlow})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-gray-300 tracking-wider">
                        Focus Flow
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://github.com/colintle/FocusFlow" target="_blank">
                            <button className=" text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${Reminders})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-gray-300 tracking-wider">
                        Reminders Website
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://github.com/SamarKaranch/reminders" target="_blank">
                            <button className=" text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
