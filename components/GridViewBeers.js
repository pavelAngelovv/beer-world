import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function GridViewBeers({ beers }) {
  const handleCardClick = (event) => {
    console.log("Grid card clicked!");
  };
  return (
    <Grid
      container
      direction="row"
      alignContent="center"
      alignItems="center"
      wrap="wrap"
      spacing={3}
    >
      {beers.map((beer) => (
        <Box sx={{ m: 2, ml: 1.3, textAlign: "center" }}>
          <Card
            sx={{
              ml: 5,
              borderRadius: "186px",
              backgroundColor: "white",
              width: 480,
            }}
          >
            <CardActionArea onClick={handleCardClick}>
              <CardContent>
                <CardMedia
                  component="img"
                  alt={beer.name}
                  className="cardImg"
                  image={
                    beer.image_url ??
                    "https://img.freepik.com/premium-photo/beer-bottle-white-backgroundglass-bottles-different-beer-light-grey-background_387864-625.jpg?w=2000"
                  }
                />

                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    fontFamily: '"Brush Script MT", cursive',
                    fontWeight: "bold",
                    fontSize: 35,
                  }}
                >
                  {beer.name}
                </Typography>
                <Divider />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {beer.tagline}
                </Typography>
                <Divider />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{
                    paddingBottom: 1,
                    paddingTop: 2,
                    fontSize: 50,
                    fontFamily: '"Brush Script MT", cursive',
                  }}
                >
                  {beer.abv}%
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
    </Grid>
  );
}