import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerCard from "./CardCollection";
import { Grid } from "@mui/material";


export default function PaginationControlled() {
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    router.push(`beers/?page=${value}`, undefined, { shallow: true });
  };

  const [Beer, setBeers] = useState([]);
  const getBeerData = () => {
    console.log(page);

    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
      .then((response) => {
        const beers = response.data;

        setBeers(beers);
      });
  };

  useEffect(() => {
    getBeerData();
  }, [page]);

  return (
    <div key="beer-cards">
      <Grid
        container
        direction="row"
        alignContent="center"
        alignItems="center"
        wrap="wrap"
        spacing={3}
      >
        <BeerCard beers={Beer} />
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
    </div>
  );
}
