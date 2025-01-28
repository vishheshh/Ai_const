import React from "react";
import PropTypes from "prop-types";

const PersonCard = ({ id, image, personName ,socialMedia,affiliation}) => {
  return (
    <div className="w-[270px] h-auto bg-white rounded-xl overflow-hidden flex flex-col items-center justify-evenly p-4">
      {/* Image Section */}
      <div className="w-40 max-h-40 dp rounded-full overflow-hidden mb-4 bg-black">
        <img
          src={image}
          alt={personName}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Social Media Section */}
      <div className="flex space-x-2 ">
        {socialMedia.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800 transition dp"
          >
            <img
              src={icon.image}
              alt={`${icon.platform} icon`}
              className="w-8 h-8"
            />
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* Name Section */}
        <h2 className="text-2xl font-bold text-[#776B5D] mb-2">{personName}</h2>

        {/* Affliation Section */}
        <p className="text-xl text-gray-600 mb-3 text-center ">{affiliation}</p>
      </div>
    </div>
  );
};



// PropTypes Validation
PersonCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  personName: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Default Props
PersonCard.defaultProps = {
  socialMedia: [],
};

export default PersonCard;
