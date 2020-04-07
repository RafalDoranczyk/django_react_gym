import useGetListItems from "hooks/useGetListItems";
import { mealsURL, mealTypesURL } from "urls/urls";

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
    typesUrl: mealTypesURL,
    itemsUrl: mealsURL
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
