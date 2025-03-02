import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function ReligionPage() {
  const religionDetails = useSelector((state) => state.religion.details);
  console.log(religionDetails);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capitalizeFirstLetter = (string) => {   
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="w-full h-auto">
      <div className="w-full flex items-center justify-center flex-col">
        <div className="w-auto">
          <NavLink
            to={"/"}
            className="w-fit  border-slate-700 rounded-lg px-4 py-2"
          >
            <div className="text-6xl font-black text-slate-800 font-bodoni">
              AI Constitution of India
            </div>
          </NavLink>
          <div className="font-playball font-light text-3xl text-gray-700 -mt-8 ml-auto text-right">
            <span className="hello italic">AI</span> must prevail the diversity
            of the land
          </div>
        </div>
      </div>
      <hr className="mx-auto border border-slate-800 w-1/2 mt-2" />
      <div className="mx-auto font-bodoni my-6 font-medium w-fit text-5xl bg-[#F5F3EF] text-[#776B5D] rounded-xl dp px-4 py-2">
        {capitalizeFirstLetter(religionDetails.name)}
      </div>
      <hr className="border mb-6 border-[#B0A695] w-3/4 mx-auto mt-10 " />
      <Outlet />
    </div>
  );
}

export default ReligionPage;
