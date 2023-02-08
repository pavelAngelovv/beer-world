import * as React from "react";
import Box from "@mui/material/Box";

import PersistentDrawerLeft from "./MobileMenu";
import PermanentDrawerLeft from "./DesktopMenu";

function Navbar() {
  return (
    <Box>
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
    </Box>
  );
}
export default Navbar;
