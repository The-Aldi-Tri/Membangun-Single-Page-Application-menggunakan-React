import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function UnarchiveNoteButton({ handleOnClick }) {
  return (
    <Link to={"/"}>
      <button
        className="action"
        type="button"
        title="Aktifkan"
        onClick={handleOnClick}
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            d="M2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            d="M12 17L12 11M12 11L14.5 13.5M12 11L9.5 13.5"
            stroke="#1C274C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </Link>
  );
}

UnarchiveNoteButton.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default UnarchiveNoteButton;
