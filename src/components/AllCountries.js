import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
        borderRadius:"0",
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
        textTransform:'uppercase',
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const useStyles = makeStyles({
  table: {},
  container: {
    height:'100%',
  },
});

export default function AllCountry() {
  const [countryData, setCounteryData] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      );
      let data = await response.json();
      setCounteryData(data.countryitems[0]);
    }
    getData();
  }, []);

  const classes = useStyles();

  return (
<div>
    <div style={{display:'flex'}}>
      <TableContainer className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell align="center">Tatal Cases</StyledTableCell>
              <StyledTableCell align="center">Total Recover</StyledTableCell>
              <StyledTableCell align="center">Total Deaths</StyledTableCell>
              <StyledTableCell align="center">New Cases Today</StyledTableCell>
              <StyledTableCell align="center">New Deaths Today</StyledTableCell>
              <StyledTableCell aligh="center">Active Cases</StyledTableCell>
              <StyledTableCell align="center">Serious Cases</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(countryData).map((key, ind) => (
              <TableRow key={ind}>
                <TableCell component="th" scope="row">
                  {countryData[key].title}
                </TableCell>
                <TableCell align="center">
                  {countryData[key].total_cases}
                </TableCell>
                <TableCell align="center">
                  {countryData[key].total_recovered}
                </TableCell>
                <TableCell align="center">
                  {countryData[key].total_deaths}
                </TableCell>
                <TableCell align="center">
                  {countryData[key].total_new_cases_today}
                </TableCell>
                <TableCell align="center">
                  {countryData[key].total_new_deaths_today}
                </TableCell>
                <TableCell align="center">
                  {countryData[key].total_active_cases}
                </TableCell>
                <TableCell align="center">
                  {countryData[key].total_serious_cases}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  );
}
