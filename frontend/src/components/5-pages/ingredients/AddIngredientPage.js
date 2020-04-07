import React from "react";
import AddIngredientForm from "components/3-organisms/ingredients/AddIngredientForm/AddIngredientForm";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  page: {
    maxWidth: 800,
  },
  paper: {
    maxWidth: 500,
    padding: theme.spacing(2),
    marginTop: 20,
    marginBottom: 30,
  },
}));

const AddIngredient = () => {
  const classes = useStyles();

  return (
    <Container className={classes.page} maxWidth="sm">
      <Grid
        spacing={2}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4">Add new ingredient</Typography>
        </Grid>

        <Grid item>
          <AddIngredientForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddIngredient;
