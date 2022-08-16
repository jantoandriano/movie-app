import React from "react";
import styled from "@emotion/styled";

const InputSearch = styled.input`
  width: 80%;
  border-radius: 3px;
  padding: 8px;

  &::placeholder {
    color: grey;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const SearchBox = (props) => {
  return (
    <>
      <InputSearch
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      />
    </>
  );
};

export default SearchBox;
