import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Vidio Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              // onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
