import React from "react";
import {
  home,
  login,
  signup,
  dashboard,
  ingredients,
  meals,
  foodDays,
} from "urls/routes";
import {
  Home,
  Info,
  AccountCircleOutlined,
  PersonAddOutlined,
} from "@material-ui/icons";
import Icon from "@mdi/react";
import {
  mdiFoodApple,
  mdiFood,
  mdiViewDashboard,
  mdiDumbbell,
  mdiWeightLifter,
  mdiCalendarArrowLeft,
} from "@mdi/js";

export const notAuthNav = [
  { txt: "Home", to: home, icon: <Home /> },
  { txt: "Login", to: login, icon: <AccountCircleOutlined /> },
  { txt: "Signup", to: signup, icon: <PersonAddOutlined /> },
  { txt: "About", to: "/about", icon: <Info /> },
];

export const authNav = [
  {
    txt: "Dashboard",
    to: dashboard,
    icon: <Icon path={mdiViewDashboard} size={1.2} />,
  },
  {
    txt: "Ingredients",
    to: ingredients,
    icon: <Icon path={mdiFoodApple} size={0.9} />,
  },
  { txt: "Meals", to: meals, icon: <Icon path={mdiFood} size={0.9} /> },
  {
    txt: "Food day plans",
    to: foodDays,
    icon: <Icon path={mdiCalendarArrowLeft} size={0.9} />,
  },

  {
    txt: "Gym Plans",
    to: foodDays,
    icon: <Icon path={mdiDumbbell} size={0.9} />,
  },
  {
    txt: "Gym results",
    to: "/",
    icon: <Icon path={mdiWeightLifter} size={0.9} />,
  },
];
