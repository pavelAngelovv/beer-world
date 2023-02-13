import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

import GridViewBeers from "./gridViewBeers";
import ListViewBeers from "./ListViewBeers";

export default function RenderBeers() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [view, setView] = useState("gridView");
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    getBeerData();
  }, [page]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (query === "") {
      router.push(`beers`, undefined, { shallow: true });
      return getBeerData();
    }

    const res = await axios
      .get(`https://api.punkapi.com/v2/beers?beer_name=${query}&per_page=10`)
      .catch((error) => console.error(error.message));
    const queryBeerData = res.data;
    router.push(`beers/?beer_name=${query}`, undefined, { shallow: true });
    setIsSearch(true);
    setBeers(queryBeerData);
  };

  const handleChange = (event, value) => {
    setPage(value);
    router.push(`beers/?page=${value}`, undefined, { shallow: true });
  };

  const getBeerData = () => {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
      .then((response) => {
        const beerData = response.data;
        setIsSearch(false);
        setBeers(beerData);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <Box>
      <Box sx={{ ml: 2 }}>
        <FormControl
          sx={{ display: "inline-block", pb: 10, ml: 3 }}
          onSubmit={handleSubmit}
        >
          <TextField
            id="input-search"
            size="large"
            label="Search Beers"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            sx={{ backgroundColor: "white", borderRadius: 10 }}
            value={query}
            onChange={handleSearchChange}
          />

          <Button onClick={handleSubmit} type="submit">
            <Avatar sx={{ width: 50, height: 50 }}>
              <SearchIcon />
            </Avatar>
          </Button>
        </FormControl>
        <ToggleButtonGroup
          orientation="horizontal"
          exclusive
          sx={{ backgroundColor: "white", float: "right", mr: 7 }}
        >
          <ToggleButton
            onClick={() => {
              setView("gridView");
            }}
            value="module"
            aria-label="module"
          >
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => {
              setView("listView");
            }}
            value="list"
            aria-label="list"
          >
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        {view == "gridView" ? <GridViewBeers beers={beers} /> : null}
        {view == "listView" ? <ListViewBeers beers={beers} /> : null}
      </Box>

      {!isSearch && (
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
      )}
    </Box>
  );
}