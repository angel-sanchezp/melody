import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import {login } from '../store/user.action'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


export const Login = () => {
    const [values, setUserValues] = useState([])
    const dispatch = useDispatch()
    let history = useHistory();


    useEffect(() => {
        dispatch(login(values))
    }, [values])


    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = "Required"
        } else if (values.password.length < 5) {
            errors.password = "Invalid password"

        }
        return errors;
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setUserValues(values)
        history.push("/audiofyapp");
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);

        }, 400);
    }

    const customInput = (props) => {
        return <TextField {...props} />
    }



    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    style={{
                        marginTop: 50,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: '#fff',
                        marginBottom: 20,
                        height: '100vh',

                    }}
                >
                    <Avatar style={{ margin: 1, backgroundColor: '#6abf6f' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="section" onSubmit={handleSubmit} noValidate style={{ marginTop: 1, color: '#fff' }}>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={validate}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Field
                                        type="email"
                                        name="email"
                                        as={customInput}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        autoComplete="email"
                                        autoFocus
                                        style={{ backgroundColor: '#ffff' }}
                                    />
                                    <ErrorMessage name="email" component="div" />
                                    <Field
                                        type="password"
                                        name="password"
                                        as={customInput}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        autoComplete="current-password"
                                        autoFocus
                                        style={{ backgroundColor: '#ffff' }}
                                    />
                                    <ErrorMessage name="password" component="div" />
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        fullWidth
                                        variant="contained"
                                        style={{ marginTop: 3, marginBottom: 2, backgroundColor: '#6abf6f' }}>
                                        Login
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <div className="login-container">
                            <h4>Or Login With:</h4>
                        </div>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}









//         </div>
//     )
// }