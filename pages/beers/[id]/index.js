import React from "react";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import styles from "./styles";

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `https://api.punkapi.com/v2/beers/${params.id}`
  );
  return {
    props: {
      item: data[0],
    },
  };
}

export default function BeerDetails({ item }) {
  return (
    <Box>
      <Button sx={styles.buttonBack} href="/beers">
        <ArrowBackIcon sx={{ float: "left", width: 50, height: 50 }} />
      </Button>
      <Box sx={styles.detailsContainer}>
        <Card sx={styles.detailsCard}>
          <Box display="flex" sx={styles.cardContent}>
            <CardMedia
              component="img"
              id={item.id}
              alt={item.name}
              sx={styles.beerImg}
              image={
                item.image_url ??
                "https://img.freepik.com/premium-photo/beer-bottle-white-backgroundglass-bottles-different-beer-light-grey-background_387864-625.jpg?w=2000"
              }
            />

            <CardContent
              sx={{
                width: "50%",
                pr: "5%",
              }}
            >
              <Box
                sx={{
                  float: "right",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={styles.brushScriptElement}
                >
                  {item.name}
                </Typography>
                <Divider />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={styles.courierFontElement}
                >
                  {item.tagline}
                </Typography>
                <Divider />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={styles.courierFontElement}
                >
                  {item.first_brewed}
                </Typography>
                <Divider />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={styles.courierFontElement}
                >
                  {item.description}
                </Typography>
                <Divider />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{
                    ...styles.brushScriptElement,
                    pb: 1,
                    paddingTop: 2,
                    fontSize: 50,
                  }}
                >
                  {item.abv}%
                </Typography>

                <Divider />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={styles.courierFontElement}
                >
                  {item.food_pairing}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
