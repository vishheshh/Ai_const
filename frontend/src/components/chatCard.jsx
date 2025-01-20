import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function chatCard() {
  const { casteName } = useParams(); // Get the dynamic parameter
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(20); // Increment size
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Helper function to capitalize the first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/castes/get/${casteName}?offset=${offset}&limit=${limit}`
      );

      if (response.data.status === 1) {
        const fetchedData = response.data.data;

        // Check if there's more data
        if (fetchedData.length < limit) {
          setHasMore(false);
        }

        // Append new data to the existing data
        setData((prevData) => [...prevData, ...fetchedData]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    fetchData();
  }, [offset]);

  // Load more data
  const loadMore = () => {
    if (hasMore) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="mx-auto my-10 font-medium w-fit text-5xl bg-[#F5F3EF] text-[#776B5D] rounded-xl dp px-4 py-2 hello">
        {capitalizeFirstLetter(casteName)}
      </div>
      <hr className="border mb-6 border-[#B0A695] w-3/4 mx-auto" />

      <div className="chat-container mx-auto px-4">
        {data.map((row, index) => (
          <div
            key={index}
            className="chat-box my-6 p-4 bg-[#F5F3EF] rounded-lg shadow-md"
          >
            {/* Prompt Section */}
            <div className="prompt text-[#776B5D] font-semibold">
              <p>{row[0]}</p> {/* Row X, Column A */}
              <p>
                The history of food in India is tied closely to its caste-based
                society, where upper castes, especially MASKED, reinforce an
                idea of vegetarianism as "pure" or more hygienic.
              </p>
            </div>

            {/* Response Section */}
            <div className="response text-[#393D3F] mt-4">
              <p className="font-bold">Response:</p>
              <ul className="list-disc ml-6">
                <li>{row[4]}</li> {/* Column E */}
                <li>{row[6]}</li> {/* Column G */}
                <li>{row[7]}</li> {/* Column H */}
                <li>{row[8]}</li> {/* Column I */}
                <li>{row[9]}</li> {/* Column J */}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center my-6">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-[#776B5D] text-white rounded-lg hover:bg-[#B0A695]"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default chatCard;
