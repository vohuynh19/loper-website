import { Input } from "antd";
import { useState } from "react";
import { FloatCloseButton, SearchButton, StyledInput, Wrapper } from "./styled";

const UniversalSearch = () => {
  const [text, setText] = useState("");

  const resetTextHandler = () => setText("");

  return (
    <Wrapper>
      <StyledInput
        placeholder="Search your quest here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <FloatCloseButton onClick={resetTextHandler}>x</FloatCloseButton>
      )}
      <SearchButton>Search</SearchButton>
    </Wrapper>
  );
};

export default UniversalSearch;
