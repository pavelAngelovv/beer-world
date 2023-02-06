import React from "react";
import GridCard from "./BeerCard";

export default function CardCollection({ beers }) {
  const handleClick = (card) => {
    console.log(`Card ${card} clicked`);
  };

  return beers.map((beer) => <GridCard key={beer.id} beer={beer} />);
}
