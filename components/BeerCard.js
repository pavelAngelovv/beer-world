import React from "react";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BeerCard({ beer }) {
  const handleCardClick = (event) => {
    console.log("ad");
  };

  return (
    <Box sx={{ m: "0.5cm", ml: "0.45cm", textAlign: "center" }}>
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
  );
}
