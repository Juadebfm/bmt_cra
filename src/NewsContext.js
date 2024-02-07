import PropTypes from "prop-types"; // Import PropTypes

// Create a new file for your context, let's call it NewsContext.js
import { createContext, useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const handleSelectedNewsId = (id) => {
    setSelectedNewsId(id);
  };

  return (
    <NewsContext.Provider value={{ selectedNewsId, handleSelectedNewsId }}>
      {children}
    </NewsContext.Provider>
  );
};

// Define propTypes for ProductProvider
NewsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
