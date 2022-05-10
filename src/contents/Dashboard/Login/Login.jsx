import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { setUserinfo } from "../../../store/userinfo/actions";

export default function Login(props) {
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.userinfo);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onLogin = () => {
    // console.log(user);
    dispatch(setUserinfo(user));
  };
  console.log(userinfo);
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            onChange={handleChange}
          />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            onChange={handleChange}
          />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Button variant="contained" onClick={onLogin}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
}
