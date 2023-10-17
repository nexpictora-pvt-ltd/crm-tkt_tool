import React, { Fragment, useState } from "react";
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { emailSchema, phoneSchema, passwordSchema } from '../../components/ValidationSchema';
import ROUTES from "../../routes";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [postalValue, setPostalValue] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(event.target.value.replace(/[^0-9]/g, ''));
  };
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressValue(event.target.value);
  };
  const handlePostalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostalValue(event.target.value.replace(/[^0-9]/g, ''));
  };

  const validateEmail = (inputEmail: string) => {
    const isValid = emailSchema.isValidSync(inputEmail);
    setIsValidEmail(isValid);
  };

  const isRegisterDisabled =
    !isValidEmail ||
    !phoneSchema.isValidSync(phoneValue) ||
    !passwordSchema.isValidSync(passwordValue) ||
    nameValue === "" ||
    addressValue === "" ||
    postalValue === "";

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Fragment>
      <Grid
        container
        justifyContent="center"
        direction={"row"}
        className="signin-body background-image-container"
        maxHeight={"100%"}
        px={{ xs: 0, sm: 2 }}
        py={{ xs: 0, sm: 8 }}
      >
        <Grid
          container
          xs={12}
          className="block"
          direction={"row"}
          py={{ xs: 13, sm: 4 }}
          height={"100%"}
          width={"100%"}
        >
          <Grid
            container
            xs={12}
            justifyContent={"center"}
            direction={"row"}
            rowGap={{ xs: 2, sm: 5 }}
          >
            <Grid xs={12}>
              <Typography variant="h1" className="WelcomeMessage">
                Hi, Welcome
              </Typography>{" "}
            </Grid>
            <Grid xs={12}>
              <Typography variant="body1" className="SignIn">
                To create your account, Enter the details.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.8rem",
                width: "100%",
                flexShrink: 0,
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Enter Full Name"
              variant="outlined"
              value={nameValue}
              onChange={handleNameChange}
              required
            />
            <TextField
              id="outlined-basic"
              label="Email ID"
              variant="outlined"
              type="email"
              error={!isValidEmail}
              helperText={!isValidEmail && "Invalid email format"}
              onChange={handleEmailChange}
              value={email}
              required
            />
            <TextField
              id="outlined-basic"
              label="Phone No."
              variant="outlined"
              value={phoneValue}
              onChange={handlePhoneChange}
              inputMode="numeric" // Allow only numeric input
              required
            />

            <TextField
              id="outlined-basic"
              label="Address "
              variant="outlined"
              onChange={handleAddressChange}
              value={addressValue}
              required
            />
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6}>
                <TextField
                  id="outlined-basic"
                  label="Postal Code"
                  variant="outlined"
                  onChange={handlePostalChange}
                  value={postalValue}
                  inputMode="numeric" 
                  type="number" 
                  required
                />
              </Grid>

              <Grid item xs={6} sm={6}>
                <TextField
                  id="filled-read-only-input"
                  label="City"
                  defaultValue=""
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            xs={12}
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.8rem",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-adornment-password"
              label="Create Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              onChange={handlePasswordChange}
              value={passwordValue}
              helperText={!phoneSchema && "Invalid Password format"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-adornment-password"
              label="Re-enter Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              onChange={handlePasswordChange}
              value={passwordValue}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid
            container
            className="button-conntainer"
            direction="column"
            marginTop={{ xs: "0vh", sm: "2vh", md: "4vh" }}
          >
            <Link to={ROUTES.SIGN_IN} style={{ textDecoration: "none" }}>
              <Grid container>
                <Button
                  variant="contained"
                  disabled={isRegisterDisabled}
                  sx={{
                    width: "100%",
                    borderRadius: "0.8rem",
                    background: "#3767A5",
                  }}
                >
                  Register Account
                </Button>{" "}
              </Grid>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Register;
