import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = (props) => {
  function handleSearch(value) {
    props.searchHandler(value);
  }

  return (
    <SearchBox>
      <input
        type="text"
        placeholder="Start Looking for your note"
        onChange={(event) => handleSearch(event.target.value)}
      />
      <FaSearch className="search-btn" />
    </SearchBox>
  );
};

export default Search;

const SearchBox = styled.div`
  margin-right: 15px;
  input {
    outline: none;
    border: none;
    background: none;
    width: 0;
    padding: 0;
    float: left;
    font-size: 16px;
    transition: 0.3s;
    border-radius: 4px;
    &::placeholder {
      color: #dbc5b0;
      font-size: 14px;
    }
    &:focus,
    &:not(:placeholder-shown) {
      width: 240px;
      padding: 0 6px;
    }
  }
  .search-btn {
    float: right;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  &:hover {
    input {
      width: 240px;
      padding: 0 6px;
    }
  }
`;
