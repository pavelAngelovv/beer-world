import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Avatar, Box, Button, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";


const Search = () => {
    const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${query}`)
    setResults(res?.data?.results)
    
    console.log('adad');
    console.log(res.data[0]);
  };
 

  return (
    <FormControl sx={{display:'inline-block'}} onSubmit={handleSubmit}>
      <TextField
        id="filled-basic"
        size="small"
        label="Search Beers"
        variant="filled"
        value={query}
        onChange={handleChange}
      />
    
      
    <Button onClick={handleSubmit} type="submit" >
  <Avatar>
    <SearchIcon />
  </Avatar>
</Button>
    </FormControl>
  );
};

export default Search;

