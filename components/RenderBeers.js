import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Alert, Box } from "@mui/material";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";

import BeerCard from "./BeerCard";

export default function RenderBeers() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState([]);
  const handleChange = (event, value) => {
    setPage(value);
    router.push(`beers/?page=${value}`, undefined, { shallow: true });
  };

  const getBeerData = () => {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
      .then((response) => {
        const beers = response.data;

        setBeers(beers);
      })
      .catch((error) => {
        return console.error(error.message);
      });
  };

  useEffect(() => {
    getBeerData();
  }, [page]);

  return (
    <Box>
      <Grid
        container
        direction="row"
        alignContent="center"
        alignItems="center"
        wrap="wrap"
        spacing={3}
      >
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </Grid>

      <Stack className="pagination" spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination
          color="primary"
          count={33}
          page={page}
          onChange={handleChange}
          sx={{ button: { color: "white" } }}
        />
      </Stack>
    </Box>
  );
}
