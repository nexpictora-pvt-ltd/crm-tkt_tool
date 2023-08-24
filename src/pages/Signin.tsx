import React, { useState } from "react";
import {Container,Grid,IconButton,InputAdornment,TextField,Checkbox,
    Box,FormGroup,FormControlLabel,Link,Stack,Button,} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import emailValidator from "email-validator";
// import "./Main.css";
import "./Signin.scss"

const CheckboxLabels = () => {
    return (
        <FormGroup>
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Me"
            />
        </FormGroup>
    );
};

const preventDefault = (event: React.MouseEvent) => event.preventDefault();

const ForgotPassword = () => {
    return (
        <Box className="forgot-password" onClick={preventDefault}>
            <Link 
            // href="http://localhost:3000/##" 
            underline="none" color="inherit">
                {"Forgot Password ?"}
            </Link>
        </Box>
    );
};

const NewAccount = () => {
    return (
        <Box className="newAccount" onClick={preventDefault}>
            <Link
                // href="http://localhost:3000/#"
                underline="hover"
                color="inherit"
            >
                {"Don't have an Account ?"}
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
    if (!value) {
        return null;
    }

    let strength = "Very weak";

    if (value.length >= 3 && value.length < 5) {
        strength = "Weak";
    } else if (value.length >= 5 && value.length < 9) {
        strength = "Strong";
    } else if (value.length >= 9) {
        strength = "Very strong";
    }

    const indicatorContainerStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "end",
    };

    const indicatorStyle: React.CSSProperties = {
        width: `${(value.length / 12) * 100}%`,
        height: "8px",
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
        <div style={indicatorContainerStyle}>
            <div style={indicatorStyle}></div>
        </div>
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
        <Container maxWidth="md">
            <Grid container justifyContent="center">
                <Grid item xs={false} sm={2} md={3} lg={3} />
                <Grid item xs={12} sm={8} md={6} lg={6}>
                    <Stack
                        className="block"
                        style={{ textAlign: "center" }}
                    >
                    <div>
                        <div className="WelcomeMessage">Hi, Welcome Back</div>
                        <div className="Credentials">
                            Enter your credentials to continue
                        </div>
                        <div className="SignIn">Sign in with Email address</div>
                    </div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%', maxWidth: '19.5rem', height: '6ch' },
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
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%', maxWidth: '19.5rem', },
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
                        </Box>
                        <Stack direction={{ xs: "column", sm: "row" }}>
                            <CheckboxLabels />
                            <ForgotPassword />
                        </Stack>
                        <Stack spacing={2} direction="column">
                            <Link
                                // href="http://localhost:3000/##"
                                underline="none"
                            >
                                <Button
                                    variant="contained"
                                    disabled={isSignInDisabled}
                                    sx={{
                                        width: '100%', 
                                        maxWidth: '20rem',
                                        height: '2.5rem',
                                        marginTop: '5%',
                                        borderRadius: '0.8rem',
                                        background: '#3767A5',
                                    }}
                                >
                                    Sign In
                                </Button>{" "}
                            </Link>
                            <NewAccount />
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={false} sm={2} md={3} lg={3} />
            </Grid>
        </Container>
    );
};

export default SignIn;
