import { useState } from "react";
import axios from "axios";
import useAsyncCall from "./useAsyncCall";

const UseSearchInput = (itemsSearchUrl) => {
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

  const [itemsArray, setItemsArray] = useState([]);
  const [value, setValue] = useState("");

  const onClick = () => {
    setItemsArray([]);
    setValue("");
  };

  const onChange = async (e) => {
    const name = e.target.value.trim().toLowerCase();
    setValue(name);
    if (name.length > 1) {
      setLoading(true);
      const { data } = await axios.get(itemsSearchUrl, {
        params: { name },
      });
      setItemsArray(data);
    } else {
      setItemsArray([]);
    }
  };
  const onOutsideClick = () => {
    setItemsArray([]);
    setValue("");
  };

  return { onClick, onChange, onOutsideClick, value, itemsArray };
};

export default UseSearchInput;
