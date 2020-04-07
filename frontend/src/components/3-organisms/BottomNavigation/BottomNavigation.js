import React, { useState } from "react";
import * as S from "./styles";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import FastfoodIcon from "@material-ui/icons/Fastfood";

const BottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <S.BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label='Diet'
        icon={<FastfoodIcon fontSize='small' />}
      />
      <BottomNavigationAction
        label='Gym'
        value='Gym'
        icon={<FitnessCenterIcon fontSize='small' />}
      />
    </S.BottomNavigation>
  );
};

export default BottomNavigation;
