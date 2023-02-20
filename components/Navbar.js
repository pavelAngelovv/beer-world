import * as React from "react";
import Box from "@mui/material/Box";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function Navbar() {
  return (
    <Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <MobileMenu />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          paddingRight: "30px",
          justifyContent: "right",
        }}
      >
        <DesktopMenu />
      </Box>
    </Box>
  );
}
export default Navbar;
