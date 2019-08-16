import React from "react";
import firebase from "firebase/app";
import initializeFirebase from "utils/intializeFirebase";
import { makeStyles } from "@material-ui/styles"
import { withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";
import "firebase/auth";

import { Container, Avatar, Typography, TextField, Button, CircularProgress } from "@material-ui/core";
import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: { marginTop: theme.spacing(8), display: 'flex', flexDirection: 'column', alignItems: 'center' },
  avatar: { margin: theme.spacing(1), backgroundColor: theme.palette.secondary.main },
  form: { width: '100%', marginTop: theme.spacing(1) },
  submit: { margin: theme.spacing(3, 0, 2) },
  circularProgress: { marginRight: theme.spacing(1), color: theme.palette.action.disabled }
}))

function LoginPage(props){
  const [ email, setEmail ] = React.useState("");
  const [ password, setPassword ] = React.useState("");
  const [ isLoading, setIsLoading ] = React.useState(false);

  const classes = useStyles();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSignInClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try{
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      if(user) props.history.replace("/dashboard");
    }catch(err){
      props.enqueueSnackbar(err.message);
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    initializeFirebase();
  }, [])

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign in</Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined" margin="normal" label="Email Address"
            name="email" autoComplete="email" value={email} onChange={handleEmailChange}
            required fullWidth autoFocus/>
          <TextField
            variant="outlined" margin="normal" label="Password"
            name="password" type="password" autoComplete="current-password"
            value={password} onChange={handlePasswordChange}
            required fullWidth/>
          <Button 
            type="submit" variant="contained" color="primary" disabled={isLoading}
            className={classes.submit} onClick={handleSignInClick} fullWidth>
            {isLoading? <CircularProgress className={classes.circularProgress} size={16}/>: null} Sign In
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default withSnackbar(withRouter(LoginPage));