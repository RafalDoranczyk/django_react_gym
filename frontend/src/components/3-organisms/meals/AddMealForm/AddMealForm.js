import React from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@material-ui/core";
import Alert from "components/2-molecules/Alert/Alert";
import { Save } from "@material-ui/icons";
import AddMealFormContainer from "containers/meals/AddMealFormContainer";
import * as S from "./styles";
import Typography from "@material-ui/core/Typography";
import SearchInput from "components/2-molecules/SearchInput/SearchInput";
import { ingredientsURL } from "urls/urls";
import Table from "components/3-organisms/Table/Table";
import Spinner from "components/1-atoms/Spinner/Spinner";
const AddMealForm = () => {
  const {
    onSubmit,
    message,
    inputs,
    handleSubmit,
    setMessage,
    loading,
    isErrorMessage,
    sourceType,
    setSourceType,
    image,
    setImage,
    ingredients,
    addItemToTable,
    handleInputValueChange,
  } = AddMealFormContainer();

  const textFieldInputsToRender = inputs
    .filter(({ type }) => type === "text")
    .map(({ name, type, inputRef, label }) => (
      <TextField
        key={name}
        id={name}
        type={type}
        inputRef={inputRef}
        label={label}
        name={name}
        variant="outlined"
        size="small"
      />
    ));

  const selectInputsToRender = inputs
    .filter(({ type }) => type === "select")
    .map(({ value, option }) => (
      <MenuItem key={option} value={value}>
        {option}
      </MenuItem>
    ));

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      {textFieldInputsToRender}

      {loading && <Spinner />}

      <FormControl>
        <InputLabel htmlFor="source">Meal type</InputLabel>
        <Select
          labelId="source"
          id="source"
          value={sourceType}
          onChange={(e) => setSourceType(e.target.value)}
        >
          {selectInputsToRender}
        </Select>
      </FormControl>

      <Table
        handleInputValueChange={handleInputValueChange}
        items={ingredients}
      />

      <Typography variant="body1">
        Add some ingredients to the recipe
      </Typography>

      <SearchInput
        onItemClick={addItemToTable}
        itemsSearchUrl={ingredientsURL}
      />

      <Button
        fullWidth
        type="submit"
        disabled={loading}
        variant="contained"
        color="primary"
        startIcon={<Save />}
      >
        {loading ? "Loading..." : "Save"}
      </Button>
      <Alert
        message={message}
        setMessage={setMessage}
        isErrorMessage={isErrorMessage}
      />
    </S.Form>
  );
};

export default AddMealForm;
