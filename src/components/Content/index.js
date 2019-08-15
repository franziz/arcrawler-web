import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: { flexGrow: 1, padding: theme.spacing(3) }
}))

export default function Content(props){
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      {props.children}
    </main>
  )
}