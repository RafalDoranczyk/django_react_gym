import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";
import { ingredients } from "urls/routes";
import { Button, Typography, Paper, makeStyles } from "@material-ui/core";
import SimpleMenu from "../../1-atoms/SimpleMenu/SimpleMenu";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "4px 16px",
    letterSpacing: 2,
  },
}));

const CardListElement = ({ element, elementRef }) => {
  const { id, name, kcal, carbs, protein, fat, price, image } = element;

  const classes = useStyles();
  let countText;

  // if (countType) {
  //   if (countType === "perOnePiece") {
  //     countText = "One piece";
  //   } else if (countType === "per100g") {
  //     countText = "100 g";
  //   } else {
  //     countText = "1 kg";
  //   }
  // }

  return (
    <S.Card ref={elementRef} elevation={2}>
      <S.CardHeader>
        <Typography variant="caption" component="span">
          {name}
        </Typography>

        <S.CountText>{countText}</S.CountText>
      </S.CardHeader>
      <S.CardBody>
        <S.MacroList>
          <Typography variant="body2">Kcal: {kcal}</Typography>
          <Typography variant="body2">Carbs: {carbs}</Typography>
          <Typography variant="body2">Protein: {protein}</Typography>
          <Typography variant="body2">Fat: {fat}</Typography>
          <Typography variant="body2">Price: {price}</Typography>
        </S.MacroList>

        <S.Image>
          {image ? <img src={image} alt="" /> : <BrokenImageIcon />}
        </S.Image>
      </S.CardBody>
      <S.CardFooter>
        <SimpleMenu />
      </S.CardFooter>
    </S.Card>
  );
};

export default CardListElement;
