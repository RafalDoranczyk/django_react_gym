import useAsyncCall from "./useAsyncCall";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const UseGetSingleitem = ({ singleItemURL, id }) => {
  const [item, setItem] = useState();
  const history = useHistory();
  const {
    loading,
    setLoading,
    isErrorMessage,
    handleAsyncError,
    handleAsyncSuccess,
    message,
  } = useAsyncCall();

  useEffect(() => {
    const getItem = async () => {
      setLoading(true);
      try {
        const response = await axios.get(singleItemURL(id));
        setItem(response.data);
        handleAsyncSuccess();
      } catch (error) {
        handleAsyncError(error);
      }
    };

    getItem();
  }, [id]);

  const deleteItem = async (id) => {
    setLoading(true);
    try {
      axios.delete(singleItemURL(id));
      handleAsyncSuccess();
      history.push("/dashboard");
    } catch (error) {
      handleAsyncError(error);
    }
  };

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

export default UseGetSingleitem;
