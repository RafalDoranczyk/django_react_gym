import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import { Button, TextField } from "@material-ui/core";
import { TweenMax } from "gsap";
import LoginFormContainer from "containers/auth/LoginFormContainer";
import Spinner from "components/1-atoms/Spinner/Spinner";
import Alert from "components/2-molecules/Alert/Alert";

const btnText = "Login";

const LoginForm = () => {
  const ref = useRef(null);
  const {
    onSubmit,
    message,
    inputs,
    handleSubmit,
    setMessage,
    loading,
    isErrorMessage,
  } = LoginFormContainer();

  useEffect(() => {
    TweenMax.to(ref.current, 0.5, { opacity: 1 });
  }, []);

  const inputsToRender = inputs.map(({ name, label, type, inputRef }) => (
    <TextField
      key={name}
      id={name}
      type={type}
      inputRef={inputRef}
      label={label}
      name={name}
      variant="outlined"
      size="small"
    />
  ));

  return (
    <S.FormWrapper ref={ref}>
      {loading && <Spinner />}
      <S.Form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
        {inputsToRender}
        <Alert
          message={message}
          setMessage={setMessage}
          isErrorMessage={isErrorMessage}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          {btnText}
        </Button>
      </S.Form>
    </S.FormWrapper>
  );
};

export default LoginForm;
