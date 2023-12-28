import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-600">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#A3C0C4]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-100">
          Samar Karanch
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a student
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          at University of Central Florida, pursuing bachelor’s degree in
          computer science.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#A3C0C4] hover:border-[#A3C0C4]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
