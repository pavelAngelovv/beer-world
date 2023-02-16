import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "./styles";

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
      sx={styles.boxContainer}
    >
      <Box sx={{ paddingTop: 10, textAlign: "center" }}>
        <Typography
          sx={{
            ...styles.accountPaper,
            fontSize: "70px",
            fontFamily: ' "Brush Script MT", cursive;',
            paddingBottom: 10,
          }}
        >
          My Account
        </Typography>

        <Box sx={{ ...styles.accountPaper }}>
          <Image
            width={200}
            height={200}
            alt="profile-picture"
            className="profilePicture"
            src={user.picture.large}
          />
        </Box>
        <Box sx={{ ...styles.accountPaper, mt: 2, mb: 5 }}>
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
            <Paper sx={{ ...styles.accountPaper, mb: 2.4 }}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Email</Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} align="center">
                <Typography variant="h6">{user.email}</Typography>
              </Grid>
            </Paper>

            <Paper sx={{ ...styles.accountPaper, mb: 2 }}>
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
            <Paper sx={{ ...styles.accountPaper, mb: 2.3 }}>
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
