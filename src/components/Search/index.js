import React, { useState } from "react";
import { useDispatch } from "react-redux";

//redux
import { fetchSearch } from "../../store/actions/movies";

//styles
import { Button } from "../../styles/buttonStyles";
import { SearchContainer } from "./styles";

export const Search = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  return (
    <SearchContainer>
      <input
        value={textInput}
        onChange={inputHandler}
        placeholder="What do you want to watch?"
        type="text"
      />
      <Button
        onClick={textInput.length ? submitSearch : null}
        type="submit"
        primary
      >
        SEARCH
      </Button>
    </SearchContainer>
  );
};
