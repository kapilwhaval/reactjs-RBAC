import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import { addUser } from '../../redux/actions/user';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import constants from '../../constants';
import * as Yup from 'yup';

export default ({ history }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [error] = useState('');

    const initialValues = {
        email: 'test@yopmail.com',
        password: 'sadasdadasdadadadas'
    }
    const validationSchema = () => Yup.object({
        email: Yup.string().email(constants.ERROR_MESSAGES.INVALID_EMAIL).required(constants.ERROR_MESSAGES.REQUIRED),
        password: Yup.string().required(constants.ERROR_MESSAGES.REQUIRED).min(6, constants.ERROR_MESSAGES.SHORT_PASSWORD)
    })

    const onSubmit = () => {
        // login(formik.values)
        // .then((res) => {
        let data = {
            "user": {
                "firstName": "Kapil",
                "lastName": "Whaval",
                "email": "whavalkapil@gmail.com",
                "modules": [
                    {
                        "moduleName": "Dashboard",
                        "modulePageUrl": "/dashboard",
                        "moduleId": 1,
                    },
                    //Uncomment this to give access to roles page
                    // {
                    //     "moduleName": "Roles Management",
                    //     "modulePageUrl": "/roles",
                    //     "moduleId": 1,
                    //     "actions": {
                    //         read: true,
                    //         create: true,
                    //         edit: true,
                    //         remove: true
                    //     }
                    // },
                    {
                        "moduleName": "Users Management",
                        "modulePageUrl": "/users",
                        "moduleId": 2,
                        "actions": {
                            read: true,
                            create: true,
                            edit: true,
                            remove: true
                        }
                    },
                ]
            }
        }
        dispatch(addUser(data))
        history.push("/dashboard");
        // })
        // .catch((err) => setError('Invalid Email id or password'))
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography className={classes.loginLabel} component="h1" variant="h5">Login</Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onBlur={formik.handleBlur('email')}
                        onChange={formik.handleChange('email')}
                        value={formik.values.email}
                        helperText={formik.errors.email}
                        error={formik.errors.email ? true : false} />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onBlur={formik.handleBlur('password')}
                        onChange={formik.handleChange('password')}
                        value={formik.values.password}
                        helperText={formik.errors.password}
                        error={formik.errors.password ? true : false} />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /><br />
                    <center style={{ color: 'red', fontSize: '16px' }}>{error}</center>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Login</Button>
                </form>
                <Grid container>
                    <Grid item xs>
                        <Link to="/forgot-password">Forgot password?</Link>
                    </Grid>
                    <Grid item>
                        <Link to="/sign-up">Don't have an account? Sign Up</Link>
                    </Grid>
                </Grid>
            </div>
            <Box mt={8}>
                <Typography variant="body2" align="center">
                    {'Kapil Whaval © '}{` ${new Date().getFullYear()}`}
                </Typography>
            </Box>
        </Container>
    );
}
