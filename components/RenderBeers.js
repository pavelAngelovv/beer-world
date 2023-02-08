import React, {
  useState,
  useEffect,
} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import axios from "axios";

import BeerCard from "./BeerCard";

export default function RenderBeers() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeerData();
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
    router.push(`beers/?page=${value}`, undefined, { shallow: true });
  };

  const getBeerData = () => {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
      .then((response) => {
        const beerData = response.data;

        setBeers(beerData);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

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
