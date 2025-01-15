import PropTypes from "prop-types";
import React from "react";
import SaveNoteButton from "../components/SaveNoteButton";

class NewNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  handleTitleOnChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  render() {
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Judul Catatan"
            value={this.state.title}
            onChange={this.handleTitleOnChange}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Isi Catatan"
            contentEditable
            onInput={this.onInputHandler}
          />
        </div>
        <div className="add-new-page__action">
          <SaveNoteButton
            handleOnClick={() =>
              this.props.handleNewNote({
                title: this.state.title,
                body: this.state.body,
              })
            }
          />
        </div>
      </section>
    );
  }
}

NewNotePage.propTypes = {
  handleNewNote: PropTypes.func.isRequired,
};

export default NewNotePage;
