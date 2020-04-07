import { useState, useEffect } from "react";

const useAsyncCall = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isErrorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (loading && message) {
      setMessage("");
    }
  }, [loading, message]);

  const handleAsyncError = (err) => {
    setLoading(false);
    setErrorMessage(true);
    console.log(err.response);

    if (err.response) {
      const { status } = err.response;
      if (err.response.message) {
        return setMessage(err.response.message);
      }
      switch (status) {
        case 500:
          return setMessage(
            "Something wrong with the server. Please try again later."
          );
        case 404:
          return setMessage("404 not found");
        case 401:
          return setMessage(`You're not authorized.`);
        default:
          return setMessage(
            "Somethin wrong with the server. Please try again later."
          );
      }
    }
  };
  const handleAsyncSuccess = (msg) => {
    setLoading(false);
    setErrorMessage(false);
    setMessage(msg || "");
  };

  return {
    loading,
    setLoading,
    message,
    setMessage,
    isErrorMessage,
    setErrorMessage,
    handleAsyncError,
    handleAsyncSuccess,
  };
};

export default useAsyncCall;
