import React from "react";
import AddMealForm from "components/3-organisms/meals/AddMealForm/AddMealForm";
import Typography from "@material-ui/core/Typography";
import SearchInput from "components/2-molecules/SearchInput/SearchInput";
import { ingredientsURL } from "urls/urls";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "components/3-organisms/Table/Table";

const message = `Add new meal`;
const useStyles = makeStyles((theme) => ({
  page: {
    maxWidth: 800,
    width: "90vw",
  },
}));

const AddMealPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.page}>
      <Grid justify="center" spacing={3} container direction="column">
        <Grid xs={12} item>
          <Typography variant="h4">{message}</Typography>
        </Grid>
        <AddMealForm />
      </Grid>
    </Container>
  );
};

export default AddMealPage;
