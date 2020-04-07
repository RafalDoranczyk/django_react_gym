import React from "react";
import { Save } from "@material-ui/icons";
import {
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  InputLabel,
  TextField,
  Fade,
  Button,
  Select,
} from "@material-ui/core";
import UploadButton from "components/2-molecules/UploadButton/UploadButton";
import Alert from "components/2-molecules/Alert/Alert";
import AddIngredientFormContainer from "containers/ingredients/AddIngredientFormContainer";
import Spinner from "components/1-atoms/Spinner/Spinner";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  container: {
    maxWidth: 550,
  },
});

const AddIngredientForm = () => {
  const {
    onSubmit,
    message,
    inputs,
    handleSubmit,
    setMessage,
    loading,
    isErrorMessage,
    countType,
    sourceType,
    setCountType,
    setSourceType,
    image,
    setImage,
  } = AddIngredientFormContainer();

  const classes = useStyles();

  const radioInputsToRender = inputs
    .filter(({ type }) => type === "radio")
    .map(({ label, value }) => (
      <FormControlLabel
        key={label}
        value={value}
        control={<Radio color="secondary" />}
        label={label}
      />
    ));

  const textFieldInputsToRender = inputs
    .filter(({ type }) => type === "text" || type === "number")
    .map(({ name, type, inputRef, label }) => (
      <Grid item key={name}>
        <TextField
          fullWidth
          id={name}
          type={type}
          inputRef={inputRef}
          label={label}
          name={name}
          variant="outlined"
          size="small"
        />
      </Grid>
    ));

  const selectInputsToRender = inputs
    .filter(({ type }) => type === "select")
    .map(({ value, option }) => (
      <MenuItem key={option} value={value}>
        {option}
      </MenuItem>
    ));

  return (
    <Fade in={!!countType}>
      <Grid
        className={classes.container}
        direction="column"
        container
        spacing={2}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        component="form"
      >
        {loading && <Spinner />}

        <Grid item>
          <InputLabel id="source">Pick count type</InputLabel>
          <RadioGroup
            aria-label="position"
            name="position"
            value={countType}
            onChange={(e) => setCountType(e.target.value)}
            row
          >
            {radioInputsToRender}
          </RadioGroup>
        </Grid>

        {textFieldInputsToRender}

        <Grid item>
          <InputLabel id="source">Pick a source group</InputLabel>
          <Select
            fullWidth
            labelId="source"
            id="source"
            value={sourceType}
            onChange={(e) => setSourceType(e.target.value)}
          >
            {selectInputsToRender}
          </Select>
        </Grid>

        <Grid item>
          <UploadButton
            file={image}
            onChange={(e) => setImage(e.target.files[0])}
          >
            Upload image
          </UploadButton>
        </Grid>

        <Grid item>
          {/* SAVE BUTTON */}
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
        </Grid>

        <Alert
          message={message}
          setMessage={setMessage}
          isErrorMessage={isErrorMessage}
        />
      </Grid>
    </Fade>
  );
};

export default AddIngredientForm;
