import useGetListItems from "hooks/useGetListItems";
import { ingredientsURL, ingredientTypesURL } from "urls/urls";

const IngredientsPageContainer = () => {
  const {
    itemsArray,
    loading,
    types,
    pages,
    isErrorMessage,
    message,
    currentPage,
    currentType,
    pageAndTypeFilterHandler
  } = useGetListItems({
    typesUrl: ingredientTypesURL,
    itemsUrl: ingredientsURL
  });

  return {
    itemsArray,
    loading,
    types,
    pages,
    isErrorMessage,
    currentPage,
    currentType,
    pageAndTypeFilterHandler,
    message
  };
};

export default IngredientsPageContainer;
