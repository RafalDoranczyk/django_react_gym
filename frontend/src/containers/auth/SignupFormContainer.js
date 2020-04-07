import axios from "axios";
import { signupURL } from "urls/urls";
import { login } from "urls/routes";
import { signupInputs } from "./authInputs";
import useForm from "hooks/useForm";
import { useHistory } from "react-router-dom";

const SignupFormContainer = () => {
  const history = useHistory();
  const {
    message,
    setMessage,
    isErrorMessage,
    setError,
    loading,
    setLoading,
    inputs,
    handleSubmit,
    getValues,
    handleAsyncSuccess,
    handleAsyncError,
    reset
  } = useForm(signupInputs);

  const additionalValidation = () => {
    let isValid = false;
    const { password, confirmPassword } = getValues();
    if (password !== confirmPassword) {
      setError("repeatPassword", "notMatch", "Passwords must be the same.");
    } else {
      isValid = true;
    }
    return isValid;
  };

  const onSubmit = async () => {
    if (!additionalValidation()) return;
    setLoading(true);
    try {
      const { data, status } = await axios.post(signupURL, getValues());
      if (status === 201) {
        reset();
        handleAsyncSuccess(data.message);
        history.push(login);
      }
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
    isErrorMessage
  };
};

export default SignupFormContainer;
