import React from "react";
import PropTypes from "prop-types";

const PersonCard = ({ id, image, personName ,socialMedia,affiliation}) => {
  return (
    <div className="w-[200px] h-auto bg-white rounded-xl overflow-hidden flex flex-col items-center p-4">
      {/* Image Section */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
        <img
          src={image}
          alt={personName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Social Media Section */}
    <div className="flex space-x-2">
        {socialMedia.map((icon,index) => (
          <a
            key={index}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <img
              src={icon.image}
              alt={`${icon.platform} icon`}
              className="w-6 h-6"
            />
          </a>
        ))}
      </div>

      {/* Name Section */}
      <h2 className="text-lg text-gray-800 mb-2">
        {personName}
      </h2>


      {/* Affliation Section */}
      <p className="text-sm text-gray-600 mb-3 text-center ">{affiliation}</p>

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
