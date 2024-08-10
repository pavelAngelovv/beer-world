import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

import GridViewBeers from "./GridViewBeers";
import ListViewBeers from "./ListViewBeers";
import beersData from "../beers.json";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query === "") {
      return getBeerData();
    }

    const queryBeerData = beersData.filter((beer) =>
      beer.name.toLowerCase().includes(query.toLowerCase())
    );
    setIsSearch(true);
    setBeers(queryBeerData);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const getBeerData = () => {
    const beersPerPage = 5;
    const paginatedBeers = beersData.slice((page - 1) * beersPerPage, page * beersPerPage);
    setIsSearch(false);
    setBeers(paginatedBeers);
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
            label="Under development"
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
        <Stack
          sx={{
            color: "#ffffff",
            flexWrap: "wrap",
            alignItems: "center",
            marginTop: "1rem",
            textAlign: "center",
          }}
          spacing={2}
        >
          <Typography>Page: {page}</Typography>
          <Pagination
            color="primary"
            count={Math.ceil(beersData.length / 5)}
            page={page}
            onChange={handleChange}
            sx={{ button: { color: "white" } }}
          />
        </Stack>
      )}
    </Box>
  );
}
