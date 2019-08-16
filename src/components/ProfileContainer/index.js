import React from "react";
import { makeStyles } from "@material-ui/styles";

import Header from "components/Header";
import ProfileDrawer from "components/ProfileDrawer";
import Content from "components/Content";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex" }
}))

export default function AppContainer(props){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
      <ProfileDrawer/>
      <Content>
        {props.children}
      </Content>
    </div>
  )
}