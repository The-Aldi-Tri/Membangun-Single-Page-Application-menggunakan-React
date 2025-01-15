import PropTypes from "prop-types";
import React from "react";
import { useSearchParams } from "react-router-dom";
import ArchivePage from "../pages/ArchivePage";

function ArchivePageWrapper({ archivedNotes }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function changeSearchParams(keyword) {
    setSearchParams({ keyword: keyword });
  }

  return (
    <ArchivePage
      archivedNotes={archivedNotes}
      onSearch={changeSearchParams}
      activeKeyword={searchParams.get("keyword")}
    />
  );
}

ArchivePageWrapper.propTypes = {
  archivedNotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    }),
  ),
};

export default ArchivePageWrapper;
