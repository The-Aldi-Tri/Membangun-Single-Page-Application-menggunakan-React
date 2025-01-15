import PropTypes from "prop-types";
import React from "react";
import { useParams } from "react-router-dom";
import ArchiveNoteButton from "../components/ArchiveNoteButton";
import DeleteNoteButton from "../components/DeleteNoteButton";
import NoteDetail from "../components/NoteDetail";
import UnarchiveNoteButton from "../components/UnarchiveNoteButton";
import NotFoundPage from "./NotFoundPage";

function DetailPage({
  notes,
  handleArchiveNote,
  handleUnarchiveNote,
  handleDeleteNote,
}) {
  const { noteId } = useParams();
  const note = notes.find((note) => note.id === noteId);

  return note ? (
    <section className="detail-page">
      <NoteDetail
        title={note.title}
        createdAt={note.createdAt}
        body={note.body}
      />
      <div className="detail-page__action">
        {note.archived ? (
          <UnarchiveNoteButton
            handleOnClick={() => handleUnarchiveNote(noteId)}
          />
        ) : (
          <ArchiveNoteButton handleOnClick={() => handleArchiveNote(noteId)} />
        )}
        <DeleteNoteButton handleOnClick={() => handleDeleteNote(noteId)} />
      </div>
    </section>
  ) : (
    <NotFoundPage />
  );
}

DetailPage.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    }),
  ),
  handleArchiveNote: PropTypes.func.isRequired,
  handleUnarchiveNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};

export default DetailPage;
