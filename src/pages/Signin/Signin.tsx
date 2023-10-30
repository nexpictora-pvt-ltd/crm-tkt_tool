/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useState } from "react";
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Box,
  FormGroup,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import emailValidator from "email-validator";
import "./Signin.scss";
import ROUTES from "../../routes";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginAsync} from '../../store/login/login.reducer';
import  { API_ENDPOINTS, axiosCall}  from '../../apiConfig';
import { getServiceLogin } from "../../services/login.service";
import TopLoadingBar from 'react-top-loading-bar';


  
interface apiResponse {
  success: boolean; // Adjust this based on your actual response structure
  // Add other properties as needed
}// Explicit type annotation

const CheckboxLabels = () => {
  return (
    <Grid>
      <FormGroup>
        <FormControlLabel
          className="forgot-password"
          control={<Checkbox defaultChecked />}
          label="Remember Me"
        />
      </FormGroup>
    </Grid>
  );
};

const preventDefault = (event: React.MouseEvent) => event.preventDefault();

const ForgotPassword = () => {
  return (
    <Grid onClick={preventDefault}>

        <Typography className="forgot-password"> Forgot Password ? </Typography>

    </Grid>
  );
};

const NewAccount = () => {
  const navigate = useNavigate();

  const handleNavigateToRegister = () => {
    navigate(ROUTES.REGISTER);
  };

  return (
    <Box onClick={handleNavigateToRegister}>
      <Typography variant="body2" className="newAccount" >
        Don't have an account? Register here.
      </Typography>
    </Box>
  );
};



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  const [error, setError] = useState<null | string>(null);


  const dispatch = useDispatch();


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const validateEmail = (inputEmail: string) => {
    const isValid = emailValidator.validate(inputEmail);
    setIsValidEmail(isValid);
  };

  const isSigninDisabled = !isValidEmail || passwordValue === "" || loading;

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleSignIn = async () => {
    setLoadingBarProgress(30);
    setLoading(true);
  
    try {
      const requestData = {
        email,
        password: passwordValue,
      };
  
      const action = loginAsync(requestData) as any;
      const resultAction = await dispatch(action);

      if (loginAsync.fulfilled.match(resultAction)) {
        setLoadingBarProgress(100); 
        setTimeout(() => {
          setLoadingBarProgress(0); 
          navigate(ROUTES.DASHBOARD);
        }, 400); 
      } else {
        setError("Invalid email or password");
        setLoadingBarProgress(0); 
      }
    } catch (apiError) {
      console.error("Sign-in failed: ", apiError);
      setError("An error occurred. Please try again.");
      setLoadingBarProgress(0); 
    }
  };
  
  return (
    <Fragment>
        <TopLoadingBar
        color="#477fcdce" height={8}
        progress={loadingBarProgress}
        onLoaderFinished={() => setLoadingBarProgress(0)}
      />
      <Grid
        container
        justifyContent="center"
        direction={"row"}
        className="signin-body background-image-container"
        maxHeight={"100%"}
        px={{ xs: 0, sm: 2 }}
        py={{ xs: 0, sm: 15 }}
      >
        <Grid
        item
          container
          xs={12}
          className="block"
          direction={"row"}
          py={{ xs: 13, sm: 5 }}
          // sx={{ marginTop: { sm: "10vh" } }}
          height={"100%"}
          width={"100%"}
        >
          <Grid item
            container
            xs={12}
            justifyContent={"center"}
            direction={"row"}
            rowGap={{ xs: 2, sm: 5 }}
          >
            <Grid item xs={12}>
              <Typography variant="h1" className="WelcomeMessage">
                Hi, Welcome Back
              </Typography>{" "}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" className="Credentials">
                {" "}
                Enter your credentials to continue{" "}
              </Typography>{" "}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" className="SignIn">
                Sign in with Email address
              </Typography>
            </Grid>
          </Grid>
          <Grid item
            container
            xs={12}
            marginTop={{ xs: "0vh", sm: "2vh" }}
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
              label="Email"
              variant="outlined"
              type="email"
              error={!isValidEmail}
              helperText={!isValidEmail && "Invalid email format"}
              onChange={handleEmailChange}
              value={email}
            />
            
          </Grid>
          <Grid item
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
              label="Password"
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
          <Grid item
            container
            xs={12}
            marginTop={{ xs: "0vh", sm: "2vh", md: "4vh" }}
            justifyContent={"space-between"}
            direction={{ sm: "row" }}
          >
            <Grid item container xs={12} sm={6}>
              <CheckboxLabels />{" "}
            </Grid>
            <Grid item container justifyContent={"flex-end"} xs={12} sm={6}>
              <ForgotPassword />{" "}
            </Grid>
          </Grid>
          <Grid item
            container
            className="button-conntainer"
            direction="column"
            marginTop={{ xs: "0vh", sm: "2vh", md: "4vh" }}
          >
            {/* <Link to={ROUTES.DASHBOARD} style={{ textDecoration: 'none' }} > */}
              <Grid container>
              {error && <Typography color="error">{error}</Typography>}
      <Button
        variant="contained"
        disabled={isSigninDisabled}
        sx={{
          width: "100%",
          borderRadius: "0.8rem",
          background: "#3767A5",
        }}
        onClick={handleSignIn}
      >
        {loading ? "Signing In..." : "Sign In"}
      </Button>{" "}
              </Grid>
            {/* </Link> */}
            <NewAccount />
          </Grid>
        </Grid>

        {/* <Grid  px={2} xs={0}  md={3} className="logoImg">
        <img src={Logopart2} alt="logo part 2" />
        </Grid> */}
      </Grid>
    </Fragment>
  );
};

export default SignIn;
