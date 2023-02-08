import { styled } from "@mui/material/styles";
import React from "react";

export const Footer = () => {
  const Root = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),

    [theme.breakpoints.up("md")]: {
      marginLeft: "6.7cm",
    },
  }));

  return (
    <Root>
      <footer>@Copyright 2023 All rights reserved</footer>
    </Root>
  );
};
