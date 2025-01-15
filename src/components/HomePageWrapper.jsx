import PropTypes from "prop-types";
import React from "react";
import { useSearchParams } from "react-router-dom";
import HomePage from "../pages/HomePage";

function HomePageWrapper({ activeNotes }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function changeSearchParams(keyword) {
    setSearchParams({ keyword: keyword });
  }

  return (
    <HomePage
      activeNotes={activeNotes}
      onSearch={changeSearchParams}
      activeKeyword={searchParams.get("keyword")}
    />
  );
}

HomePageWrapper.propTypes = {
  activeNotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    }),
  ),
};

export default HomePageWrapper;
