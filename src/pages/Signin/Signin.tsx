/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useState } from "react";
import {Grid,IconButton,InputAdornment,TextField,Checkbox,
    Box,FormGroup,FormControlLabel,Link,Button, Typography,} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import emailValidator from "email-validator";
import "./Signin.scss";
// import { styled } from '@mui/material/styles';


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
            <Link 
            // href="http://localhost:3000/##" 
            underline="hover" color='red'>
               <Typography className="forgot-password"> Forgot Password ? </Typography>
            </Link>
        </Grid>
    );
};

const NewAccount = () => {
    return (
        <Box onClick={preventDefault}>
            <Link
                // href="http://localhost:3000/#"
                underline="hover"
                color="inherit"
                
            >
               <Typography className="newAccount"> Don't have an account? </Typography>
            </Link>
        </Box>
    );
};


interface PasswordStrengthIndicatorProps {
    value: string;
  }
  
  const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  value,
}) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
  const isValidPassword = (value: string): boolean => {
    return passwordRegex.test(value);
  };

  if (!value) {
    return null;
  }

  const missingTypes: string[] = [];

  if (!/(?=.*[a-z])/.test(value)) {
    missingTypes.push('lowercase letter');
  }

  if (!/(?=.*[A-Z])/.test(value)) {
    missingTypes.push('uppercase letter');
  }

  if (!/(?=.*[!@#$%^&*])/.test(value)) {
    missingTypes.push('special character');
  }

  if (!/(?=.*\d)/.test(value)) {
    missingTypes.push('digit');
  }

  let strength = "Very weak";

  if (isValidPassword(value)) {
    if (value.length >= 3 && value.length < 5) {
      strength = "Weak";
    } else if (value.length >= 5 && value.length < 9) {
      strength = "Strong";
    } else if (value.length >= 9) {
      strength = "Very strong";
    }
  }

  const indicatorContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "end",
  };

  const indicatorStyle: React.CSSProperties = {
    width: `${(value.length / 12) * 100}%`,
    height: "6px",
    backgroundColor:
      strength === "Very weak"
        ? "red"
        : strength === "Weak"
        ? "orange"
        : strength === "Strong"
        ? "yellow"
        : "green",
    borderRadius: "5px",
    marginTop: "8px",
  };

  return (
    <Grid>
      <Grid style={indicatorContainerStyle}>
        <Grid style={indicatorStyle}></Grid>
      </Grid>
      <Grid>{strength}</Grid>
      {missingTypes.length > 0 && (
        <Grid>
          Missing: {missingTypes.join(", ")}
        </Grid>
      )}
    </Grid>
  );
};


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");

    const handleEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPasswordValue(event.target.value);
    };

    const validateEmail = (inputEmail: string) => {
        const isValid = emailValidator.validate(inputEmail);
        setIsValidEmail(isValid);
    };

    const isSignInDisabled = !isValidEmail || passwordValue === "";

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Fragment>
            <Grid container  justifyContent="center" direction={'row'} className="signin-body" >
                <Grid item  md={3}  sx={{marginTop: { sm: '15vh' } }}>  </Grid>
                <Grid item xs={12} sm={12} md={6} className="block" direction={'column'}  sx={{marginTop: { sm: '10vh', xs:'5vh' } }} >
                    <Grid item xs={4} sm={4}>
                        <Typography  variant='h1' className="WelcomeMessage">Hi, Welcome Back</Typography>
                        <Typography variant="caption" className="Credentials"> Enter your credentials to continue </Typography>
                        <Typography variant="body1" className="SignIn">Sign in with Email address</Typography>
                    </Grid>
                        <Grid
                        item xs={2} sm={2}
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%' },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '0.8rem',
                                    width: '100%',
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
                                helperText={
                                    !isValidEmail && "Invalid email format"
                                }
                                onChange={handleEmailChange}
                                value={email}
                            />
                        </Grid>
                        <Grid
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%', },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '0.8rem',
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
                            <PasswordStrengthIndicator
                                value={passwordValue}
                            />
                        </Grid>
                        <Grid container justifyContent={'space-between'} direction={{ xs: "column", sm: "row" }}>
                            <CheckboxLabels />
                            <ForgotPassword />
                        </Grid>
                        <Grid spacing={2} direction="column">
                            <Link
                                // href="http://localhost:3000/##"
                                underline="none"
                            >
                                <Button
                                    variant="contained"
                                    disabled={isSignInDisabled}
                                    sx={{
                                        width: '100%', 
                                        // maxWidth: '20rem',
                                        height: '5vh',
                                        marginTop: '5%',
                                        borderRadius: '0.8rem',
                                        background: '#3767A5',
                                    }}
                                >
                                    Sign In
                                </Button>{" "}
                            </Link>
                            <NewAccount />
                        </Grid>
                    </Grid>
                
            <Grid item  md={3} sx={{marginTop: { sm: '15vh' } }}>
              
              </Grid>   
        </Grid>
        </Fragment>
    );
};

export default SignIn;
