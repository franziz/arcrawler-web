import React from "react";
import { makeStyles } from "@material-ui/styles";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: { zIndex: theme.zIndex.drawer + 1 }
}))

export default function Header(){
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" style={{ color: "white" }} noWrap>ARCrawler</Typography>
      </Toolbar>
    </AppBar>
  )
}