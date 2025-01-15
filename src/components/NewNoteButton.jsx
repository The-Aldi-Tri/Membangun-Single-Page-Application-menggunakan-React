import React from "react";
import { Link } from "react-router-dom";

function NewNoteButton() {
  return (
    <Link to={"/notes/new"}>
      <button className="action" type="button" title="Tambah">
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18M12 6V18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </Link>
  );
}

export default NewNoteButton;
