import React, {
  useState,
  useEffect,
} from 'react';
import axios from "axios";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    await axios
      .get(`https://randomuser.me/api/`)
      .then((response) => {
        const userData = response.data.results[0];

        setUser(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!user.name) {
    return null;
  }

  return (
    <Box
      sx={{ marginLeft: { md: 45, sm: "0" }, marginRight: { md: 15, sm: 0 } }}
    >
      <Box sx={{ paddingTop: 10, textAlign: "center" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "70px",
            fontFamily: ' "Brush Script MT", cursive;',
            paddingBottom: 10,
          }}
        >
          My Account
        </Typography>

        <Box sx={{ textAlign: "center" }}>
          <Image
            width={200}
            height={200}
            alt="profile-picture"
            className="profilePicture"
            src={user.picture.large}
          />
        </Box>
        <Box sx={{ textAlign: "center", mt: 2, mb: 5 }}>
          <Grid item xs={12}>
            <Typography variant="h4">{`${user.name.first}`}</Typography>
            <Typography variant="h4">{`${user.name.last}`}</Typography>
          </Grid>
        </Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            key="item"
            container
            direction="column"
            alignItems="center"
            sx={{ wordWrap: "break-word" }}
          >
            <Paper sx={{ textAlign: "center", width: "100%", mb: 2.4 }}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Email</Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} align="center">
                <Typography variant="h6">{user.email}</Typography>
              </Grid>
            </Paper>

            <Paper sx={{ textAlign: "center", width: "100%", mb: 2 }}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Phone Number</Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} align="center">
                <Typography variant="h6">{user.phone}</Typography>
              </Grid>
            </Paper>
          </Grid>

          <Grid
            item
            xs={6}
            key="account-item"
            container
            direction="column"
            alignItems="center"
          >
            <Paper sx={{ textAlign: "center", width: "100%", mb: 2.3 }}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Gender</Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} align="center">
                <Typography variant="h6">{user.gender}</Typography>
              </Grid>
            </Paper>

            <Paper sx={{ textAlign: "center", width: "100%", mb: 30 }}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Country</Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} align="center">
                <Typography variant="h6">{user.location.country}</Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
