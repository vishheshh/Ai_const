import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gpt4oenglish from "../components/Gpt4oenglish";
import Gpt4ohindi from "../components/Gpt4ohindi";

function CasteDetails() {
  const { casteName, model } = useParams(); // Get the dynamic parameter
  const decodedParam = decodeURIComponent(model);
  console.log(decodedParam)
  return (
    <div className="w-full h-screen px-2 md:px-10">
      {decodedParam === "GPT-4o English" && <Gpt4oenglish />}
      {decodedParam === "GPT-4o Hindi" && <Gpt4ohindi />}
      <div className="w-full h-32"></div>
    </div>
  );
}

export default CasteDetails;
