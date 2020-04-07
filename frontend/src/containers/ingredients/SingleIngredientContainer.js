import useGetSingleItem from "hooks/useGetSingleItem";
import { singleIngredientURL } from "urls/urls";

const SigngleIngredientContainer = (id) => {
  const {
    item,
    setItem,
    loading,
    setLoading,
    isErrorMessage,
    message,
    deleteItem,
  } = useGetSingleItem({ singleItemURL: singleIngredientURL, id });

  return {
    item,
    setItem,
    loading,
    setLoading,
    isErrorMessage,
    message,
    deleteItem,
  };
};

export default SigngleIngredientContainer;
