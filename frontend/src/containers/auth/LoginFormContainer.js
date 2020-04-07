import axios from "axios";
import { loginURL } from "urls/urls";
import { dashboard } from "urls/routes";
import { loginInputs } from "./authInputs";
import useForm from "hooks/useForm";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const LoginFormContainer = () => {
  const { setAuthorized, setTime } = useContext(AuthContext);
  const history = useHistory();
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
  } = useForm(loginInputs);

  const onSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(loginURL, getValues());
      const accessTime = Number(data.access_time).toFixed() * 60;
      setTime(accessTime);
      reset();
      handleAsyncSuccess();
      setAuthorized(true);
      history.push(dashboard);
    } catch (error) {
      handleAsyncError(error);
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
  };
};

export default LoginFormContainer;
