import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center"
  }
});

const PaginationControlled = ({
  pages,
  currentPage,
  pageAndTypeFilterHandler
}) => {
  const handleChange = (event, value) => {
    pageAndTypeFilterHandler({ page: value });
  };
  const classes = useStyles();

  return (
    <Pagination
      className={classes.wrapper}
      count={pages}
      page={currentPage}
      onChange={handleChange}
    />
  );
};

export default PaginationControlled;
