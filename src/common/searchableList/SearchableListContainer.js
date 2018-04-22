import React, { Component } from "react";
import PropTypes from "prop-types";

import SearchableList from "common/searchableList/SearchableList";

class SearchableListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      searchableColumns: props.items
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.items.length !== prevState.searchableColumns.length) {
      return {
        searchableColumns: nextProps.items
      };
    }
    return null;
  }

  handleClickClearIcon = () => {
    this.setState({
      searchString: "",
      searchableColumns: this.props.items
    });
  };

  handleChange = event => {
    this.setState({
      searchString: event.target.value,
      searchableColumns: event.target.value
        ? this.props.items.filter(({ Label }) =>
            Label.toLowerCase().includes(event.target.value.toLowerCase())
          )
        : this.props.items
    });
  };

  render() {
    const { label, items, onItemClick } = this.props;
    const { searchString, searchableColumns } = this.state;

    return (
      <SearchableList
        label={label}
        totItems={items.length}
        searchableColumns={searchableColumns}
        searchString={searchString}
        onItemClick={onItemClick}
        handleChange={this.handleChange}
        handleClickClearIcon={this.handleClickClearIcon}
      />
    );
  }
}

SearchableListContainer.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default SearchableListContainer;
