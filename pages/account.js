
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Grid, Paper, Typography } from "@material-ui/core";
import { Divider } from "@mui/material";

export default function Profile() {
  useEffect(() => {
    getProfileData();
  }, []);

  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [gender, setGender] = useState([]);
  const [picture, setPicture] = useState([]);
  const [phone, setPhone] = useState([]);
  const [locationCountry, setLocationCountry] = useState([]);

  const getProfileData = async () => {
    await axios.get(`https://randomuser.me/api/`).then((response) => {
      const userData = response.data.results[0];
      const first = userData.name.first;
      const second = userData.name.last;
      const userEmail = userData.email;
      const userGender = userData.gender;
      const userPhone = userData.phone;
      const userLocationCountry = userData.location.country;
      const picture_url = userData.picture.large;

      setFirstName(first);
      setLastName(second);
      setPicture(picture_url);
      setEmail(userEmail);
      setGender(userGender);
      setPhone(userPhone);
      setLocationCountry(userLocationCountry);
    });
  };

  return (
    <div className="accountWrapper">
      <h1 className="accountTitle">My Account</h1>

      <Grid container style={{ marginLeft: 60 }} spacing={2}>
        <Grid style={{ marginLeft: 600 }} item xs={12} container spacing={2}>
          <Grid item sm={6} md={4} align="right">
            <img className="profilePicture" src={`${picture}`}></img>
          </Grid>
          <Grid item sm={6} md={8} alignt="left" container>
            <Grid item xs={12} container alignItems="flex-end">
              <Typography variant="h4">{`${firstName}`}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">{`${lastName}`}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={6}
          key="item"
          container
          direction="column"
          alignItems="center"
        >
          <Paper className="paper">
            <Grid item xs={12}>
              <Typography variant="subtitle1">Email</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} align="center">
              <Typography variant="h6">{email}</Typography>
            </Grid>
          </Paper>

          <Paper className="paper">
            <Grid item xs={12}>
              <Typography variant="subtitle1">Phone Number</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} align="center">
              <Typography variant="h6">{phone}</Typography>
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
          <Paper className="paper">
            <Grid item xs={12}>
              <Typography variant="subtitle1">Gender</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} align="center">
              <Typography variant="h6">{gender}</Typography>
            </Grid>
          </Paper>

          <Paper className="paper">
            <Grid item xs={12}>
              <Typography variant="subtitle1">Country</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} align="center">
              <Typography variant="h6">{locationCountry}</Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );

}
