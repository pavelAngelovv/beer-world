import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const useStyles = makeStyles({
  listHeader: {
    width: 100,
    fontFamily: '"Brush Script MT", cursive',
    fontSize: 45,
    paddingLeft: 50,
    paddingRight: 40,
  },
  listItem: {
    width: 240,
    marginLeft: 0,
    fontFamily: '"Courier New", Courier, monospace',
    fontWeight: "bold",
    fontSize: 21,
  },
});

export default function ListViewBeers({ beers }) {
  const classes = useStyles();

  const handleCardClick = (event) => {
    console.log("table card clicked!");
  };

  return (
    <Box sx={{ ml: { lg: 30, sm: 0 } }}>
      <Table
        sx={{ maxWidth: 500, aligntext: "center" }}
        aria-label="simple table"
      >
        <Box sx={{ ml: 2, mb: 4 }}>
          <TableHead>
            <TableRow sx={{ color: "white", backgroundColor: "white" }}>
              <Box>
                <TableCell
                  sx={{
                    fontFamily: '"Brush Script MT", cursive',
                    fontSize: 45,
                    pr: 6,
                  }}
                  align="center"
                >
                  id
                </TableCell>
                <TableCell
                  sx={{
                    width: 100,
                    fontFamily: '"Brush Script MT", cursive',
                    fontSize: 45,
                    paddingLeft: 7,
                    paddingRight: 30,
                    pr: 10,
                  }}
                  align="center"
                >
                  name
                </TableCell>
                <TableCell
                  sx={{
                    width: 100,
                    fontFamily: '"Brush Script MT", cursive',
                    fontSize: 45,
                    paddingLeft: 14,
                    paddingRight: 30,
                    pr: 10,
                  }}
                  align="center"
                >
                  abv
                </TableCell>
                <TableCell className={classes.listHeader} align="center">
                  first_brewed
                </TableCell>
                <TableCell className={classes.listHeader} align="center">
                  contributed_by
                </TableCell>
              </Box>
            </TableRow>
          </TableHead>
        </Box>
        <TableBody sx={{ minWidth: 650 }}>
          {beers.map((beer) => (
            <Box sx={{ ml: 2 }}>
              <TableRow
                key={beer.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Card sx={{ width: "100%", m: 1.2, ml: 0, borderRadius: 10 }}>
                  <CardActionArea onClick={handleCardClick}>
                    <TableCell
                      sx={{
                        fontSize: 1,
                        marginLeft: 0,
                        fontFamily: '"Courier New", Courier, monospace',
                        fontWeight: "bold",
                        fontSize: 15,
                      }}
                      align="center"
                    >
                      {beer.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        width: 283,
                        marginLeft: 0,
                        fontFamily: '"Courier New", Courier, monospace',
                        fontWeight: "bold",
                        fontSize: 19,
                      }}
                      align="center"
                    >
                      {beer.name}
                    </TableCell>
                    <TableCell className={classes.listItem} align="center">
                      {beer.abv}%
                    </TableCell>
                    <TableCell className={classes.listItem} align="center">
                      {beer.first_brewed}
                    </TableCell>
                    <TableCell
                      sx={{
                        width: 300,
                        marginLeft: 0,
                        fontFamily: '"Courier New", Courier, monospace',
                        fontWeight: "bold",
                        pl: 5,
                        fontSize: 19,
                      }}
                      align="center"
                    >
                      {beer.contributed_by}
                    </TableCell>
                  </CardActionArea>
                </Card>
              </TableRow>
            </Box>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
