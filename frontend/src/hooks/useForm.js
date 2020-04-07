import { useEffect } from "react";
import { useForm as useHookForm } from "react-hook-form";
import useAsyncCall from "./useAsyncCall";

const useForm = (inputs) => {
  const {
    loading,
    setLoading,
    message,
    setMessage,
    isErrorMessage,
    setErrorMessage,
    handleAsyncError,
    handleAsyncSuccess,
  } = useAsyncCall();

  const {
    register,
    handleSubmit,
    errors,
    getValues,
    setError,
    reset,
  } = useHookForm();

  inputs.forEach((input) => {
    input.inputRef = register(input.validation);
    return input;
  });

  useEffect(() => {
    console.log(errors);
    const isFormValidationErr = Object.keys(errors).length > 0;
    if (isFormValidationErr) {
      setError(true);
      setErrorMessage(true);
      const msg = Object.values(errors)[0].message;
      msg ? setMessage(msg) : setMessage("Please fill all inputs");
    }
  }, [errors]);

  return {
    message,
    setMessage,
    isErrorMessage,
    setErrorMessage,
    setError,
    loading,
    setLoading,
    inputs,
    handleSubmit,
    getValues,
    reset,
    handleAsyncSuccess,
    handleAsyncError,
  };
};

export default useForm;
