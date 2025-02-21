import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gpt4oenglish from "../components/religions/Gpt4oenglish";
import Gpt4ohindi from "../components/religions/Gpt4ohindi";

function ReligionDetails() {
  const { name, model } = useParams(); // Get the dynamic parameter
  const decodedParam = decodeURIComponent(model);
  // console.log(decodedParam)
  return (
    <div className="w-full h-screen px-2 md:px-10">
      {decodedParam === "GPT-4o-English" && <Gpt4oenglish />}
      {decodedParam === "GPT-4o-Hindi" && <Gpt4ohindi />}
      {decodedParam === "Sutra-Hindi"}
      {decodedParam === "Krutrium-Hindi"}
      {decodedParam === "Airvata-Hindi"}
      {decodedParam === "Llama-3.3-70B-English"}
      {decodedParam === "Navrasa-2.0-Hindi"}
      {decodedParam === "Claude-3.5-Sonnet-English"}
      {decodedParam === "Phi-3.5-English"}
      {decodedParam === "Gemma-2B-English"}
      {decodedParam === "Mixtral-English"}
      {decodedParam === "Jamba-English"}
      {decodedParam === "Mamba-English"}
      {decodedParam === "DeepSeek-R1-English"}
      <div className="w-full h-32"></div>
    </div>
  );
}

export default ReligionDetails;
