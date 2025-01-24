import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setCasteDetails } from "./reducers/caste";
import { useNavigate } from "react-router-dom";
const CasteCard = ({ name, photo }) => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const optionsBoxRef = useRef(null);
  const dispatch = useDispatch();

  const handleCasteCard = () => {
    setShowOptions(true);
  };

 const handleOptionClick = (model) => {
    // Dispatch caste details to Redux
    dispatch(setCasteDetails({ name, photo, model }));
    const url = `/castes/${name.toLowerCase()}/${encodeURIComponent(model)}`;
    // console.log(url)
    // window.open(url, "_blank");
    navigate(url);
    nab
  };


  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setShowOptions(false); // Close the options box
    }
  };
  useEffect(() => {
    if (showOptions) {
      gsap.fromTo(
        optionsBoxRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [showOptions]);

  return (
    <div className="w-[250px] h-[400px] bg-white shadow-lg rounded-lg overflow-hidden relative group transition-all duration-300">
      {/* Image Section */}
      <div className="h-2/3 overflow-hidden relative" onClick={handleCasteCard}>
        <img
          src={photo}
          alt={name}
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
          onClick={handleCasteCard}
        >
          <span className="relative z-10">{name}</span>
          {/* Background Animation */}
          <div className="absolute top-0 right-full w-full h-full bg-[#F5F3EF] group-hover:right-0 transition-all duration-300"></div>
          {/* Text Color Change on Hover */}
          <span className="absolute inset-0 bg-transparent group-hover:text-white transition duration-1000 z-0"></span>
        </div>
      </div>
      {/* Centered Options Box */}
      {showOptions && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div
            ref={optionsBoxRef}
            className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4 md:w-5/12"
          >
            <div className="flex justify-between items-center">
              <div className="mx-auto w-fit px-5 bg-[#F5F3EF] text-[#776B5D] rounded-xl dp mb-5 text-5xl font-bodoni">
                {name}
              </div>
              <IoMdClose
                onClick={() => setShowOptions(false)}
                className="bg-[#F5F3EF] text-[#776B5D] rounded-3xl hover:bg-[#776B5D] hover:text-[#F5F3EF] text-4xl dp"
              />
            </div>

            <div className="flex">
              <img
                src={photo}
                alt={name}
                className="w-1/3 object-cover group-hover:brightness-75 transition duration-300 dp"
              />
              <div className="flex flex-col text-[#776B5D] p-10 ml-3 rounded-lg text-3xl ">
                <h2 className="text-3xl font-semibold text-gray-600 mb-8">
                  Available Models
                </h2>
                <ol className="list-decimal list-inside flex flex-col items-start">
                  <li
                    className="hover:bg-[#F5F3EF] duration-300 cursor-pointer p-2 mb-1 rounded-lg dp"
                    onClick={() => handleOptionClick("GPT-4o-English")}
                  >
                    GPT-4o English
                  </li>
                  <li
                    className="hover:bg-[#F5F3EF] duration-300 cursor-pointer p-2 mb-1 rounded-lg dp"
                    onClick={() => handleOptionClick("GPT-4o-Hindi")}
                  >
                    GPT-4o Hindi
                  </li>
                </ol>
              </div>
            </div>
            <button
              className="mt-4 text-lg text-gray-500 hover:text-gray-700 font-[1000] hover:bg-[#F5F3EF] duration-300 py-2 px-4 rounded-3xl dp"
              onClick={() => setShowOptions(false)}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CasteCard;
