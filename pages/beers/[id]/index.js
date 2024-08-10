import fs from 'fs';
import path from 'path';
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import styles from "../../../styles/beers/[id]/styles";
import Image from "next/image";
import { promisify } from 'util';

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

const readFile = promisify(fs.readFile);

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'beers.json');
  const fileContents = await readFile(filePath, 'utf8');
  const beersData = JSON.parse(fileContents);
  const item = beersData.find((beer) => beer.id === parseInt(params.id));

  return {
    props: {
      item: item || null,
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
            <Image
              width={350}
              height={900}
              style={styles.beerImg}
              src={
                item.image_url ??
                "https://img.freepik.com/premium-photo/beer-bottle-white-backgroundglass-bottles-different-beer-light-grey-background_387864-625.jpg?w=2000"
              }
            />

            <CardContent
              sx={{
                width: "50%",
              }}
            >
              <Box
                sx={{
                  float: "right",
                  ml: { xl: 10, lg: 10, md: 0, sm: 0, xs: 0 },
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
