import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "components/3-organisms/Navigation/Navigation";
import * as ROUTES from "urls/routes";
import * as PAGES from "components/5-pages";
import AuthContext from "./context/AuthContext";
import AppContext from "./AppContext";
import { Container, makeStyles } from "@material-ui/core";

const navHeight = "70";

const useStyles = makeStyles({
  wrapper: {
    marginTop: `${navHeight}px`,
    " & > div": {
      minHeight: `calc(100vh - ${navHeight * 3}px )`,
    },
  },
});

const App = () => {
  const classes = useStyles();

  const value = AppContext();
  const { protectedRoute, isAuthorized, time } = value;

  return (
    <AuthContext.Provider value={value}>
      {isAuthorized !== null && (
        <Container className={classes.wrapper}>
          <Navigation />
          <Switch>
            <Route exact path={ROUTES.home} component={PAGES.HomePage} />
            <Route exact path={ROUTES.login} component={PAGES.LoginPage} />
            <Route exact path={ROUTES.signup} component={PAGES.SignupPage} />
            <Route
              exact
              path={ROUTES.notAllowed}
              component={PAGES.NotAllowedPage}
            />
            <Route
              exact
              path={ROUTES.dashboard}
              render={(props) => protectedRoute(PAGES.DashboardPage, props)}
            />
            <Route
              exact
              path={ROUTES.addIngredient}
              render={(props) => protectedRoute(PAGES.AddIngredientPage, props)}
            />
            <Route
              exact
              path="/dashboard/ingredients/:id"
              render={(props) =>
                protectedRoute(PAGES.SingleIngredientPage, props)
              }
            />
            <Route
              strict
              exact
              path={ROUTES.ingredients}
              render={(props) => protectedRoute(PAGES.IngredientsPage, props)}
            />
            <Route
              exact
              path={ROUTES.addMeal}
              render={(props) => protectedRoute(PAGES.AddMealPage, props)}
            />
            <Route
              strict
              exact
              path={ROUTES.meals}
              render={(props) => protectedRoute(PAGES.MealsPage, props)}
            />
            <Route
              render={(props) => protectedRoute(PAGES.NotFoundPage, props)}
            />
          </Switch>

          {/*
   
 
    <Route
      exact
      path={ROUTES.foodDays}
      render={props => protectedRoute(PAGES.FoodDaysPage, props)}
    />
    <Route
      exact
      path={ROUTES.addFoodDay}
      render={props => protectedRoute(PAGES.AddFoodDayPage, props)}
    />
   */}
        </Container>
      )}
    </AuthContext.Provider>
  );
};

export default App;
