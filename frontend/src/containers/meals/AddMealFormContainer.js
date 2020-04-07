import axios from "axios";
import { useState, useEffect } from "react";
import useForm from "hooks/useForm";
import { mealTypesURL, mealsURL } from "urls/urls";
import { mealInputs } from "./inputsData";

const AddMealFormContainer = () => {
  const [image, setImage] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [sourceType, setSourceType] = useState("");

  const {
    message,
    setMessage,
    isErrorMessage,
    loading,
    setLoading,
    inputs,
    handleSubmit,
    getValues,
    handleAsyncSuccess,
    handleAsyncError,
    setErrorMessage,
    reset,
  } = useForm(mealInputs);

  const setInputDefault = () => {
    const defaultSource = mealInputs.find(({ type }) => type === "select")
      .value;
    setSourceType(defaultSource);
  };

  useEffect(() => {
    const isFetched = mealInputs.find(({ type }) => type === "select");

    const fetchMealInputs = async () => {
      setLoading(true);
      try {
        const {
          data: { types },
        } = await axios.get(mealTypesURL);
        const selectInputs = types.map(([value, option]) => ({
          type: "select",
          value,
          option,
        }));
        mealInputs.push(...selectInputs);
        setInputDefault();
        handleAsyncSuccess();
      } catch (error) {
        handleAsyncError(error);
      }
    };
    if (!isFetched) {
      fetchMealInputs();
    } else {
      setInputDefault();
    }
  }, []);

  const onSubmit = async () => {
    // setLoading(true);
    if (ingredients.length === 0) {
      setErrorMessage(true);
      return setMessage("Please add some ingredients.");
    }
    const { name, description } = getValues();
    const items = ingredients.map(({ id, value }) => ({
      id,
      quantity: value,
    }));
    const values = { name, description, ingredients: items };

    try {
      const { status, data } = await axios.post(mealsURL, values);
      if (status === 201) {
        reset();
        setIngredients([]);
        handleAsyncSuccess(data.msg);
      }
    } catch (error) {
      console.log(error);
      handleAsyncError(error);
    }

    console.log("submit");
  };

  const addItemToTable = (item) => {
    const { kcal, carbs, protein, fat, price } = item;

    let val = 100;
    if (item.count_type === "1000g") {
      val = 1000;
    } else if (item.count_type === "one") {
      val = 1;
    }
    item.initValue = val;
    item.initKcal = kcal;
    item.initCarbs = carbs;
    item.initProtein = protein;
    item.initFat = fat;
    item.initPrice = price;
    item.value = val;
    setIngredients((ing) => [...ing, item]);
  };

  const handleInputValueChange = (e, id) => {
    const value = e.target.value;
    setIngredients((ing) => {
      const index = ing.findIndex((item) => item.id === id);
      const {
        initKcal,
        initCarbs,
        initProtein,
        initFat,
        initPrice,
        initValue,
      } = ing[index];

      const updatedIng = ingredients[index];
      const div = initValue / value;
      updatedIng.value = value;
      updatedIng.kcal = (initKcal / div).toFixed(2);
      updatedIng.carbs = (initCarbs / div).toFixed(2);
      updatedIng.protein = (initProtein / div).toFixed(2);
      updatedIng.fat = (initFat / div).toFixed(2);
      updatedIng.price = (initPrice / div).toFixed(2);

      return [...ing];
    });
  };

  return {
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
  };
};

export default AddMealFormContainer;
