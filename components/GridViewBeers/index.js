import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "./styles";
import Image from "next/image";

export default function GridViewBeers({ beers }) {
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
        <Box key={beer.id} sx={{ m: 2, ml: 1.3, textAlign: "center" }}>
          <Card sx={styles.card}>
            <Box sx={styles.cardContainer}>
              <Link href={`/beers/${beer.id}`}>
                <CardActionArea>
                  <CardContent>
                    <Image
                      width={300}
                      height={600}
                      style={styles.cardImg}
                      src={
                        beer.image_url ??
                        "https://img.freepik.com/premium-photo/beer-bottle-white-backgroundglass-bottles-different-beer-light-grey-background_387864-625.jpg?w=2000"
                      }
                    />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ ...styles.brushScriptText, fontSize: 35 }}
                    >
                      {beer.name}
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={styles.courierText}
                    >
                      {beer.tagline}
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      sx={{
                        ...styles.brushScriptText,
                        paddingBottom: 1,
                        paddingTop: 2,
                        fontSize: 50,
                      }}
                    >
                      {beer.abv}%
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Box>
          </Card>
        </Box>
      ))}
    </Grid>
  );
}
