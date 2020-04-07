import React, { useRef } from "react";
import * as S from "./styles";
import UseOutsideDetect from "hooks/useOutsideDetectClick";
import UseSearchInput from "hooks/useSearchInput";
import { TextField } from "@material-ui/core";

const SearchInput = ({ itemsSearchUrl, onItemClick }) => {
  const ref = useRef(null);
  const {
    onClick,
    onChange,
    onOutsideClick,
    value,
    itemsArray,
  } = UseSearchInput(itemsSearchUrl);

  // UseOutsideDetect(ref, onOutsideClick);

  const click = (item) => () => {
    console.log(item);
    onItemClick(item);
    onClick();
  };

  return (
    <S.InputContainer ref={ref}>
      <TextField
        autoComplete="off"
        fullWidth
        id="search"
        label="Type min. 2 letter to search"
        type="search"
        name="search"
        onChange={(e) => onChange(e)}
        value={value}
        variant="outlined"
        size="small"
      />
      <S.InputDrop>
        {itemsArray.map((item) => (
          <S.SingleDrop onClick={click(item)} key={item.id}>
            {item.name}
          </S.SingleDrop>
        ))}
      </S.InputDrop>
    </S.InputContainer>
  );
};

export default SearchInput;
