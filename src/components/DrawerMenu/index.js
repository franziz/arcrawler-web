import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawer: { width: 180, flexShrink: 0 },
  drawerPaper: { width: 180 },
  toolbar: theme.mixins.toolbar
}))

export default function DrawerMenu(){
  const classes = useStyles();
  return(
    <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <div className={classes.toolbar}/>
      <List>
        <ListItem button>
          <ListItemText primary="XPATH Tools"/>
        </ListItem>
        {/* <ListItem button>
          <ListItemText primary="Issue Tracker"/>
        </ListItem> */}
      </List>
    </Drawer>
  )
}