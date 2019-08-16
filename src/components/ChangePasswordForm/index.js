import React from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase/app";
import { makeStyles } from "@material-ui/styles";
import { withSnackbar } from "notistack";
import "firebase/auth";

import { Container, Typography, TextField, Button, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: { marginTop: theme.spacing(2), display: 'flex', flexDirection: 'column', alignItems: 'center' },
  form: { width: '100%', marginTop: theme.spacing(1) },
  submit: { margin: theme.spacing(3, 0, 2) },
  circularProgress: { marginRight: theme.spacing(1), color: theme.palette.action.disabled }
}))

function ChangePasswordForm(props){
  const [ currentPassword, setCurrentPassword ] = React.useState("");
  const [ newPassword, setNewPassword ] = React.useState("");
  const [ repeatPassword, setRepeatPassword ] = React.useState("");
  const [ isLoading, setIsLoading ] = React.useState(false);

  const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleRepeatPasswordChange = (e) => setRepeatPassword(e.target.value);
  const handleChangePasswordClick = async (e) => {
    try{
      e.preventDefault();
      setIsLoading(true);
      if(repeatPassword === "" || newPassword === ""){
        props.enqueueSnackbar("New password or repeat password cannot be blank");
      }else if(repeatPassword !== newPassword){
        props.enqueueSnackbar("New password and repeat password are not the same");
      }else{
        const currentUser = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, currentPassword);

        await currentUser.reauthenticateWithCredential(credential);
        await currentUser.updatePassword(newPassword);
        props.enqueueSnackbar("Password has been changed");
        setCurrentPassword("")
        setNewPassword("")
        setRepeatPassword("");
        if(props.onSuccess) props.onSuccess()
      }
    }catch(err){
      props.enqueueSnackbar(err.message)
    }finally{ setIsLoading(false); }
  }

  const classes = useStyles();

  React.useEffect(() => {
    if(firebase.apps.length === 0){
      const firebaseConfig = {
        apiKey: "AIzaSyB3T5aeuAMD5HY4KcvwgF4_2UYgelnFe0I",
        authDomain: "arcrawler-web.firebaseapp.com",
        databaseURL: "https://arcrawler-web.firebaseio.com",
        projectId: "arcrawler-web",
        storageBucket: "",
        messagingSenderId: "257357879856",
        appId: "1:257357879856:web:5ed927f891e0132f"
      };
      firebase.initializeApp(firebaseConfig);
    }
  }, [])

  return (
    <Container>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">Change Password</Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined" margin="normal" label="Current Password"
            name="current-password" autoComplete="current-password" type="password"
            value={currentPassword} onChange={handleCurrentPasswordChange}
            required fullWidth autoFocus/>
          <TextField
            variant="outlined" margin="normal" label="New Password" 
            name="new-password" type="password"
            value={newPassword} onChange={handleNewPasswordChange}
            required fullWidth/>
          <TextField
            variant="outlined" margin="normal" label="New Password" 
            name="repeat-password" type="password"
            value={repeatPassword} onChange={handleRepeatPasswordChange}
            required fullWidth/>
          <Button 
            type="submit" variant="contained" color="primary" disabled={isLoading}
            className={classes.submit} onClick={handleChangePasswordClick} fullWidth>
            {isLoading? <CircularProgress className={classes.circularProgress} size={16}/>: null} Change Password
          </Button>
        </form>
      </div>
    </Container>
  );
}

ChangePasswordForm.propTypes = { onSuccess: PropTypes.func }
ChangePasswordForm.defaultProps = { onSuccess: () => {} }

export default withSnackbar(ChangePasswordForm);