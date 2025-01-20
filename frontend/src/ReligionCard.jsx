import React from "react";

const ReligionCard = ({ image, religionName, onLearnMore }) => {
  return (
    <div className="w-[300px] h-[400px] bg-white shadow-lg rounded-lg overflow-hidden relative group transition-all duration-300">
      {/* Image Section */}
      <div className="h-2/3 overflow-hidden relative" onClick={onLearnMore}>
        <img
          src={image}
          alt={religionName}
          className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-2">
          {/* {religionName} */}
        </h2>
      </div>

      {/* Learn More Button */}
      <div className="w-full flex items-center justify-center">
        <div
          className="relative group flex items-center justify-center border-2 border-slate-700 px-3 py-1 rounded-lg text-slate-700 text-2xl overflow-hidden cursor-pointer transition-all duration-300 transform group-hover:-translate-y-1"
          onClick={onLearnMore}
        >
          <span className="relative z-10">{religionName}</span>
          {/* Background Animation */}
          <div className="absolute top-0 right-full w-full h-full bg-[#F5F3EF] group-hover:right-0 transition-all duration-300"></div>
          {/* Text Color Change on Hover */}
          <span className="absolute inset-0 bg-transparent group-hover:text-white transition duration-1000 z-0"></span>
        </div>
      </div>
    </div>
  );
};

export default ReligionCard;
