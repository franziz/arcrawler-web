import React from 'react';
import customTheme from "utils/customTheme";
import firebase from "firebase/app";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";
import "firebase/auth";

import LoginPage from "pages/LoginPage";
import XpathTestPage from "pages/XpathTestPage";
import ChangePasswordPage from "pages/ChangePasswordPage";
import DashboardPage from 'pages/DashboardPage';

function PrivateRoute({ component: Component, ...rest }){
  return (
    <Route
      {...rest}
      render={(props) => {
        const user = firebase.auth().currentUser;
        if(user) return <Component {...props}/>
        else return <Redirect to={{ pathname: "/login", state: {from: props.location} }}/>
      }}/>
  )
}

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <SnackbarProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <PrivateRoute path="/xpathTest" component={XpathTestPage}/>
            <PrivateRoute path="/changePassword" component={ChangePasswordPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <PrivateRoute path="/" component={DashboardPage}/>
          </Switch>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
