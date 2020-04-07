import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Input, TableFooter } from "@material-ui/core";

const MaterialTable = ({ items = [], handleInputValueChange }) => {
  const results = {
    kcal: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
    price: 0,
  };

  items.forEach((item) => {
    Object.entries(item).forEach((e) => {
      const key = e[0];
      const val = e[1];
      if (results[key] >= 0) {
        results[key] += Number(val);
      }
    });
  });

  const { kcal, carbs, protein, fat, price } = results;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell size="small">Quantity</TableCell>
            <TableCell align="right">Kcal</TableCell>
            <TableCell align="right">Fat</TableCell>
            <TableCell align="right">Carbs</TableCell>
            <TableCell align="right">Protein</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                <Input
                  style={{
                    maxWidth: 50,
                  }}
                  type="number"
                  value={row.value}
                  onChange={(e) => handleInputValueChange(e, row.id)}
                />
              </TableCell>
              <TableCell align="right">{row.kcal}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {items.length > 0 && (
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{kcal}</TableCell>
              <TableCell align="right">{carbs}</TableCell>
              <TableCell align="right">{protein}</TableCell>
              <TableCell align="right">{fat}</TableCell>
              <TableCell align="right">{price}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </TableContainer>
  );
};

export default MaterialTable;
