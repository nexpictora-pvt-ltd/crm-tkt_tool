/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getProfileAsync } from "../../store/profile/profile.reducer";
import { useAppSelector } from "../../hooks/useAppSelector";
import Cookies from "js-cookie";
import './profile.page.scss'

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showChangePasswordFields, setShowChangePasswordFields] =
    useState(false);

  const dispatch = useDispatch();
  const profile = useAppSelector((state) => state.profile);
  const isLoading = useAppSelector((state) => state.profile.isLoading);

  const accessToken = Cookies.get("token");
  // console.log("Access Token:", accessToken);
  const user_id = Cookies.get("user_id");

  useEffect(() => {
    const requestInfo = { accessToken, user_id };

    dispatch(getProfileAsync(requestInfo) as any);
  }, [dispatch, accessToken, user_id]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const toggleChangePasswordFields = () =>
    setShowChangePasswordFields((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container xs={12}>
        <Grid container xs={12} justifyContent={"center"} p={2}>
          {isLoading ? (
            <Skeleton variant="circular" width={200} height={200} />
          ) : (
            <AccountCircleIcon
              sx={{ width: "200px", height: "200px", color: "#CBEEF0" }}
            />
          )}
        </Grid>

        {isLoading ? (
          <Grid container xs={12} justifyContent="center" alignItems="center">
            <Skeleton variant="text" width="20%" height={40} />
          </Grid>
        ) : (
          <Grid container xs={12} justifyContent={"center"}>
            <Typography variant="h5" color={"#082C5E"}>
              {profile.profile.name}
            </Typography>
          </Grid>
        )}
      </Grid>

      {isLoading ? (
        <Grid container xs={12}>
          <Grid container xs={12}>
            <Grid container xs={6} p={2}>
              <Skeleton variant="rectangular" width="100%" height={56} />
            </Grid>
            <Grid container xs={6} p={2}>
              <Skeleton variant="rectangular" width="100%" height={56} />
            </Grid>
          </Grid>
          <Grid container xs={12} p={2}>
            <Skeleton variant="rectangular" width="100%" height={56} />
          </Grid>
        </Grid>
      ) : (
        <Grid container xs={12}>
          <Grid container xs={12}>
            <Grid container xs={6} p={2}>
              <TextField
                label="Email"
                id="filled-read-only-input"
                defaultValue={profile.profile.email}
                variant="filled"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid container xs={6} p={2}>
              <TextField
                label="Phone Number"
                id="filled-size-normal"
                defaultValue={profile.profile.phone}
                variant="filled"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container xs={12} p={2}>
            <TextField
              label="Address"
              id="filled-size-normal"
              defaultValue={profile.profile.address}
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
            />
          </Grid>
        </Grid>
      )}

<Grid container xs={12}>
  <Grid container xs={12} p={2}>
    {isLoading ? (
      <Grid container xs={12} justifyContent="start">
        <Skeleton variant="text" width="40%" height={40} />
      </Grid>
    ) : (
      <Typography
        variant="h5"
        style={{ cursor: "pointer", color: "#D36A2F" }}
        onClick={toggleChangePasswordFields}
      >
        Change Password?
      </Typography>
    )}
  </Grid>



        {showChangePasswordFields && (
          <>
            <Grid container xs={12} sm={12} md={6} p={2}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Old Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Old pass"
                />
              </FormControl>
            </Grid>

            <Grid container xs={12} sm={12} md={6} p={2}>
              <FormControl fullWidth variant="outlined">
                <InputLabel >
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="New pass"
                />
              </FormControl>
            </Grid>

            <Grid container xs={12} sm={12} md={6} p={2}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm pass"
                />
              </FormControl>
            </Grid>

            <Grid container xs={12} justifyContent={"right"}>
              <Button variant="contained">Change Password</Button>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Profile;
