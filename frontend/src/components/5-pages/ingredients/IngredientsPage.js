import React from "react";
import IngredientsPageContainer from "containers/ingredients/IngredientsPageContainer";
import Spinner from "components/1-atoms/Spinner/Spinner";
import TabsNav from "components/2-molecules/TabsNav/TabsNav";
import AddItemButton from "components/1-atoms/AddItemButton/AddItemButton";
import { addIngredient } from "urls/routes";
import GsapBoxesList from "components/4-templates/GsapBoxesList/GsapBoxesList";
import Paginator from "components/2-molecules/Paginator/Paginator";
import { Grid, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    padding: "5px"
  },
  paginator: {
    maxWidth: "800px",
    margin: "20px auto"
  }
});

const IngredientPage = () => {
  const {
    itemsArray,
    loading,
    types,
    pages,
    isErrorMessage,
    currentPage,
    currentType,
    pageAndTypeFilterHandler,
    message
  } = IngredientsPageContainer();
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      {loading && <Spinner />}
      {currentType && (
        <TabsNav
          currentType={currentType}
          types={types}
          pageAndTypeFilterHandler={pageAndTypeFilterHandler}
        />
      )}

      {itemsArray.length === 0 && !loading ? (
        <h2>There is nothing to show </h2>
      ) : (
        <GsapBoxesList
          pages={pages}
          loading={loading}
          itemsArray={itemsArray}
          currentPage={currentPage}
          pageAndTypeFilterHandler={pageAndTypeFilterHandler}
        />
      )}
      {itemsArray.length !== 0 && !loading && (
        <div className={classes.paginator}>
          <Paginator
            pageAndTypeFilterHandler={pageAndTypeFilterHandler}
            pages={pages}
            currentPage={currentPage}
          />
        </div>
      )}

      <AddItemButton to={addIngredient} />
    </Container>
  );
};

export default IngredientPage;
