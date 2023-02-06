import { CardMedia, Divider } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginLeft: 15,
    width: 485,
  },
});

export default function GridCard({ beer }) {
  const classes = useStyles();
  const handleCardClick = (event) => {
    console.log("Card clicked");
  };

  return (
    <div className="card">
      <Card
        style={{ borderRadius: "186px", backgroundColor: "white" }}
        className={classes.root}>
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
              style={{
                fontFamily: '"Brush Script MT", cursive',
                fontWeight: "bold",
                fontSize: 35,
                paddingBottom: 30,
              }}
            >
              {beer.name}
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                paddingBottom: 20,
                fontFamily: '"Courier New", Courier, monospace',
                fontWeight: "bold",
                fontSize: 20,
                paddingTop: 17,
              }}
            >
              {beer.tagline}
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                paddingBottom: 5,
                paddingTop: 20,
                fontSize: 50,
                fontFamily: '"Brush Script MT", cursive',
              }}
            >
              {beer.abv}%
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}