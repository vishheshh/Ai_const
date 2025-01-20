import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="w-full h-[300px] bg-[#F5F3EF] mt-10 rounded-t-3xl">
      <div className="w-full flex ml-10 flex-col">
        <NavLink
          to={"/"}
          className="w-fit border-2 border-slate-700 rounded-lg px-4 py-2 dp mt-6"
        >
          <div className="text-5xl font-extralight text-slate-800 hello">
            AI Constitution of India
          </div>
        </NavLink>
        <div className="italic hello tracking-widest text-lg font-semibold text-gray-500">
          AI must prevail the diversity of the land
        </div>
      </div>

      <div className="ml-10 mt-10 text-3xl hello text-[#776B5D]">
        Disclaimers
      </div>
      <div className="ml-10 hello">All the images used are AI generated</div>
    </div>
  );
}

export default Footer