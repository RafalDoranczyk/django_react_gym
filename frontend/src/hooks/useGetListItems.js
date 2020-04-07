import { useState, useEffect } from "react";
import axios from "axios";
import useAsyncCall from "./useAsyncCall";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

const UseGetListItem = ({ typesUrl, itemsUrl }) => {
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState();
  const [count, setCount] = useState(0);
  const [itemsArray, setItemsArray] = useState([]);
  const history = useHistory();
  const {
    loading,
    setLoading,
    isErrorMessage,
    handleAsyncError,
    handleAsyncSuccess,
    message
  } = useAsyncCall();

  const getItemsHandler = async typeOnPageLoad => {
    const values = queryString.parse(history.location.search);
    setLoading(true);
    setItemsArray([]);
    try {
      const {
        data: { data, count, pages }
      } = await axios.get(itemsUrl, {
        params: {
          page: values.page || 1,
          type: values.type || typeOnPageLoad || types[0][0]
        }
      });
      setItemsArray(data);
      setPages(pages);
      setCount(count);
      setLoading(false);
    } catch (error) {
      handleAsyncError(error);
    }
  };

  const pageAndTypeFilterHandler = ({ page, type }) => {
    const { location } = history;
    const values = queryString.parse(location.search);
    let search = "";
    if (page) {
      setCurrentPage(page);
      if (values.type) {
        search = `page=${page}&type=${values.type}`;
      } else {
        search = `page=${page}`;
      }
    }
    if (type) {
      setCurrentType(type);
      setCurrentPage(1);
      if (values.page) {
        search = `page=1&type=${type}`;
      } else {
        search = `type=${type}`;
      }
    }
    history.push({
      pathname: location.pathname,
      search
    });
  };

  const getTypesHandler = async () => {
    setLoading(true);
    try {
      const {
        data: { types }
      } = await axios.get(typesUrl);
      setTypes(types);
      const typeOnPageLoad = types[0][0];
      setCurrentType(typeOnPageLoad);
      handleAsyncSuccess();
      return typeOnPageLoad;
    } catch (error) {
      handleAsyncError(error);
    }
  };

  const fetchTypesAndItems = async () => {
    const typeOnPageLoad = await getTypesHandler();
    updatePageAndType();
    getItemsHandler(typeOnPageLoad);
  };

  const updatePageAndType = () => {
    const values = queryString.parse(history.location.search);
    if (values.page) {
      setCurrentPage(Number(values.page));
    }
    if (values.type) {
      setCurrentType(values.type);
    }
  };

  useEffect(() => {
    if (types.length === 0) {
      fetchTypesAndItems();
    } else {
      getItemsHandler();
    }
  }, [history.location.search]);

  return {
    itemsArray,
    loading,
    types,
    pages,
    isErrorMessage,
    currentPage,
    setCurrentPage,
    currentType,
    setCurrentType,
    pageAndTypeFilterHandler,
    message
  };
};

export default UseGetListItem;
