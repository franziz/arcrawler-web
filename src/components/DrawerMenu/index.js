import React from "react";
import { makeStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";

import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawer: { width: 180, flexShrink: 0 },
  drawerPaper: { width: 180 },
  toolbar: theme.mixins.toolbar
}))

function DrawerMenu(props){
  const classes = useStyles();
  return(
    <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <div className={classes.toolbar}/>
      <List>
        <ListItem selected={props.match.path === "/xpathTest"} button>
          <ListItemText primary="XPATH Tools"/>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default withRouter(DrawerMenu);