import axios from "axios";
import { useState, useEffect } from "react";
import useForm from "hooks/useForm";
import { ingredientInputs } from "./ingredientInputs";
import { ingredientTypesURL, ingredientsURL } from "urls/urls";

const AddIngredientFormContainer = () => {
  const [image, setImage] = useState();
  const [countType, setCountType] = useState("");
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
    reset,
  } = useForm(ingredientInputs);

  const setInputDefault = () => {
    const countDefault = ingredientInputs.find(({ type }) => type === "radio")
      .value;
    const sourceDefault = ingredientInputs.find(({ type }) => type === "select")
      .value;
    setCountType(countDefault);
    setSourceType(sourceDefault);
  };

  useEffect(() => {
    const isFetched = ingredientInputs.find(({ type }) => type === "radio");

    const fetchIngredientInputs = async () => {
      setLoading(true);
      try {
        const {
          data: { counts, types },
        } = await axios.get(ingredientTypesURL);
        const radioInputs = counts.map(([value, label]) => ({
          type: "radio",
          value,
          label,
        }));
        const selectInputs = types.map(([value, option]) => ({
          type: "select",
          value,
          option,
        }));
        ingredientInputs.push(...radioInputs, ...selectInputs);
        setInputDefault();
        handleAsyncSuccess();
      } catch (error) {
        handleAsyncError(error);
      }
    };
    if (!isFetched) {
      fetchIngredientInputs();
    } else {
      setInputDefault();
    }
  }, []);

  const onSubmit = async () => {
    setLoading(true);
    const data = new FormData();
    const values = {
      ...getValues(),
      count_type: countType,
      source_type: sourceType,
    };
    Object.entries(values).forEach((value) => {
      data.append(value[0].toLowerCase(), value[1]);
    });
    if (image) {
      data.append("image", image);
    }

    try {
      const { status } = await axios.post(ingredientsURL, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (status === 201) {
        reset();
        setImage(undefined);
        handleAsyncSuccess(`You have created an ingredient!`);
      }
    } catch (err) {
      handleAsyncError(err);
    }
  };

  return {
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
  };
};

export default AddIngredientFormContainer;
