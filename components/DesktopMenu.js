import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PortraitIcon from "@mui/icons-material/Portrait";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          color: "white",
          backgroundColor: "white",
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <SportsBarIcon sx={{ color: "black" }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{ color: "black" }}
          >
            Beer World
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem key="my-account" disablePadding>
            <ListItemButton href="/account">
              <ListItemIcon>
                <PortraitIcon />
              </ListItemIcon>
              <ListItemText primary="My Account" />
            </ListItemButton>
          </ListItem>
          <ListItem key="beers" disablePadding>
            <ListItemButton href="/beers">
              <ListItemIcon>
                <SportsBarIcon />
              </ListItemIcon>
              <ListItemText primary="Beers" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
