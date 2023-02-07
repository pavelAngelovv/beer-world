import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import PersistentDrawerLeft from "./DrawerMenu";
import PermanentDrawerLeft from "./PermanentDrawer";

function Navbar() {
  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <PersistentDrawerLeft />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          paddingRight: "30px",
          justifyContent: "right",
        }}
      >
        <PermanentDrawerLeft />
      </Box>
    </AppBar>
  );
}
export default Navbar;
