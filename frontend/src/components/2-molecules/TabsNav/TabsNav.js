import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    margin: "0 auto 20px auto",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce({
  pageAndTypeFilterHandler,
  currentType,
  types,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={currentType}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="secondary"
          aria-label="scrollable force tabs example"
        >
          {types.map((type) => (
            <Tab
              onClick={() => pageAndTypeFilterHandler({ type: type[0] })}
              value={type[0]}
              key={type[0]}
              label={type[1]}
              wrapped
            />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
}
