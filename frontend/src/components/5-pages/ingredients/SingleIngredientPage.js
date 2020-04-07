import React from "react";
import CardSingleElement from "components/2-molecules/CardSingleElement/CardSingleElement";
import SingleIngredientContainer from "containers/ingredients/SingleIngredientContainer";
import Spinner from "components/1-atoms/Spinner/Spinner";

const SingleIngredientPage = ({ match }) => {
  const {
    item,
    setItem,
    loading,
    setLoading,
    isErrorMessage,
    message,
    deleteItem,
  } = SingleIngredientContainer(match.params.id);

  return (
    <div>
      {!item && !loading ? (
        <h2>{message || "Item not found 404"}</h2>
      ) : loading || !item ? (
        <Spinner />
      ) : (
        <CardSingleElement deleteItem={deleteItem} item={item} />
      )}
    </div>
  );
};

export default SingleIngredientPage;
