import React from "react";
import TableStyle from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";

const Table = ({ ingredients, changeIngredientQuantity }) => {
  return (
    <TableContainer component={Paper}>
      <TableStyle aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align='right'>Quantity</TableCell>
            <TableCell align='right'>Calories</TableCell>
            <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
            <TableCell align='right'>Protein&nbsp;(g)</TableCell>
            <TableCell align='right'>Fat&nbsp;(g)</TableCell>
            <TableCell align='right'>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map(
            (
              { _id, name, quantity, kcal, carbs, protein, fat, price },
              index
            ) => (
              <TableRow key={_id + index}>
                <TableCell component='th' scope='row'>
                  {name}
                </TableCell>
                <TableCell align='right'>
                  <Input
                    type='number'
                    min='1'
                    onChange={e => changeIngredientQuantity(e, _id)}
                    value={quantity}
                  />
                </TableCell>
                <TableCell align='right'>{kcal}</TableCell>
                <TableCell align='right'>{carbs}</TableCell>
                <TableCell align='right'>{protein}</TableCell>
                <TableCell align='right'>{fat}</TableCell>
                <TableCell align='right'>{price}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </TableStyle>
    </TableContainer>
  );
};

export default Table;
